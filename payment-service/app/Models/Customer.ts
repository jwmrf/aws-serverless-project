import { DateTime } from 'luxon'
import { BaseModel, beforeSave, column } from '@ioc:Adonis/Lucid/Orm'

export default class Customer extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public name: string

  @column()
  public email: string

  @column.date({ columnName: 'birthDate' })
  public birthDate: DateTime

  @column()
  public avatar?: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static assignUuid(cart: Customer) {
    if (!cart.id) {
      cart.id = crypto.randomUUID()
    }
  }
}
