import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {

    Route.post('/', 'MakeCreateOrderController.create')

}).prefix('order')