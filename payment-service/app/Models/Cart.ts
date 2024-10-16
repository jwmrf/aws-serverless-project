import { DateTime } from 'luxon'
import { BaseModel, beforeSave, column } from '@ioc:Adonis/Lucid/Orm'

export default class Cart extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column({ columnName: 'customerId' })
  public customerId: string

  @column({ columnName: 'productId' })
  public productId: string

  @column({ columnName: 'totalAmount' })
  public totalAmount: number

  @column()
  public quantity: number

  @column({ columnName: 'paymentMethod' })
  public paymentMethod: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static assignUuid(cart: Cart) {
    if (!cart.id) {
      cart.id = crypto.randomUUID()
    }
  }
}
