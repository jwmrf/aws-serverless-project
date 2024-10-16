import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {

    Route.post('/', 'MakeCreateCustomerController.create')

}).prefix('customer')
