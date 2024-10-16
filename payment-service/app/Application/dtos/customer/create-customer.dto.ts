import { DateTime } from "luxon"

export type InputCreateCustomerDto = {
    name: string
    email: string
    birthDate: DateTime
    avatar?: string
}