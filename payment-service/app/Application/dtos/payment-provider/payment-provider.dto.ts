export type InputPaymentProviderDto = {
    customer: {
        name: string
        email: string
    }
    payment_method: {
        type: string
    }
    installments?: number
    total: number
}

export type OutputPaymentProviderDto = {
    id: string
    customer: {
        name: string
        email: string
    }
    payment_method: {
        type: string
    }
    installments?: number
    total: number
    status: string
}