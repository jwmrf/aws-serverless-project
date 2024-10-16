import { DateTime } from 'luxon'
import { BaseModel, beforeSave, column } from '@ioc:Adonis/Lucid/Orm'

export default class Order extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column({ columnName: 'cartId' })
  public cartId: string

  @column({ columnName: 'paymentStatus' })
  public paymentStatus: string

  @column({ columnName: 'paymentMethod' })
  public paymentMethod: string

  @column({ columnName: 'paymentDate' })
  public paymentDate: Date


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static assignUuid(order: Order) {
    if (!order.id) {
      order.id = crypto.randomUUID()
    }
  }
}
