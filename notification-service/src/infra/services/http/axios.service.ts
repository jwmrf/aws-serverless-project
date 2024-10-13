import axios from "axios";
import { HttpServiceContract } from "src/domain/service/http/http.service.contract";

export class AxiosHttpService implements HttpServiceContract {
    async post<TRequest, TResponse>(url: string, payload: TRequest, headers): Promise<TResponse> {
        const response = await axios.post<TResponse>(url, payload, {
            headers
        });
        return response as TResponse;
    }
}