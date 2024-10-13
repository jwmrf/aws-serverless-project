export interface HttpServiceContract {
    post<TRequest, TResponse>(url: string, payload: TRequest, headers): Promise<TResponse>;
}