/* eslint-disable */
/* tslint:disable */

import { type UseQueryOptions, useQuery, useQueryClient, type UseQueryReturnType } from '@tanstack/vue-query'
import type { ApiFactory } from './ApiFactory'
import { ResponseError, type ApiError } from './g/api'
import type { Ref } from 'vue'

type _ReturnType<T extends Function> = T extends (...args: any) => infer R ? R : any

type RemoveLast<T extends any[]> = 
	T extends [...infer _, infer L] 
		? L
		: T extends [...infer I, (infer _)?] 
			? I
			: never

type Flatten<T> = T extends [infer U] 
	? U 
	: T extends [(infer R)?] 
		? R 
		: T

type ParametersWithoutLast<F extends Function> = 
	F extends (...args: any) => infer _ 
		? Flatten<RemoveLast<Parameters<F>>> 
		: never

export type UseQueryReturnWrapperType<T> = {
	query: UseQueryReturnType<T, ApiError>
	remove: () => void
}

//For some reason vue-type MaybeRef<T> = Ref<T> | T breaking intellisense
type UnwrapRef<T> = T extends Ref<infer U> ? U : T

export type ApiUseQueryOptions<TResult> =
	Omit<UnwrapRef<UseQueryOptions<TResult, Error, TResult>>, 'queryKey' | 'queryFn'>

export type BaseQueryApiOptionsWithFactory<T> = Partial<T> & { apiFactory: ApiFactory, formatName?: string }
export type BaseQueryApiOptionsWithoutFactory<T> = Partial<T> & { apiFactory?: ApiFactory, formatName?: string }

export default class BaseQueryApi<
	TResult,
	TQueryHooksAPIBuilderOptions = ApiUseQueryOptions<TResult>
> {

	protected options: BaseQueryApiOptionsWithFactory<TQueryHooksAPIBuilderOptions>

	constructor(options: BaseQueryApiOptionsWithFactory<TQueryHooksAPIBuilderOptions>) {
		this.options = options
	}
	
	protected _useQuery<
		TFunction extends Function,
		TFactoryFunction extends Function, 
		TParams extends ParametersWithoutLast<TFunction>
	>(
		factory: TFactoryFunction,
		f: TFunction,
		args: (() => ParametersWithoutLast<TFunction>) | TParams
	): UseQueryReturnWrapperType<Awaited<_ReturnType<TFunction>>> {

		const client = factory.call(this.options.apiFactory)

		if (!(f.name in client)) {
			throw new Error(`Method ${f.name} does not exist in the client`)
		}
		
		const queryClient = useQueryClient()
		
		const queryFn = async (): Promise<_ReturnType<typeof f>> => {
			try {
				
				const args_ = typeof args === 'function' ? args() : args

				return await (Array.isArray(args_) 
					? f.call(client, ...args_ as []) 
					: f.call(client, args_)
					)
			}
			catch (error) {
				
				if (error instanceof ResponseError) {
					throw await error.response.json()
				}
				
				throw { 
					code: 1,
					message: JSON.stringify(error),
					type: 'Unknown'
				} as ApiError
			}
		}

		return {
			query: useQuery<Awaited<ReturnType<typeof queryFn>>, ApiError>({
				queryKey: [this.options?.formatName ?? f.name],
				queryFn: () => queryFn() as Awaited<ReturnType<typeof queryFn>>,
				throwOnError : false,
				...this.options,

			}),
			remove: () => queryClient.removeQueries({
				queryKey: [this.options?.formatName ?? f.name]
			})
		}
	}

}