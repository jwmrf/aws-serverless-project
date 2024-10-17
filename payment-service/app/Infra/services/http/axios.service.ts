import { HttpServiceContract } from "App/Domain/services/http/http.service.contract";
import axios, { AxiosResponse } from "axios";

export class AxiosHttpService implements HttpServiceContract {
    async post<TRequest, TResponse>(url: string, payload: TRequest, headers): Promise<TResponse> {

        const response: AxiosResponse<TResponse> = await axios.post<TResponse>(url, payload, {
            headers
        });

        return response as TResponse;
    }
}