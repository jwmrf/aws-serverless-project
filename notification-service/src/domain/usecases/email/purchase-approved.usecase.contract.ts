import { InputPurchaseApprovedDto } from "src/application/dtos/purchase-approved.dto";

export interface PurchaseApprovedUseCaseContract {
    execute: (data: InputPurchaseApprovedDto) => Promise<void>
}