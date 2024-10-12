export interface DeleteProductUseCaseContract {
    execute(id : string): Promise<void>
}