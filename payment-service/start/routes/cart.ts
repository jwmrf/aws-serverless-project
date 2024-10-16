import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {

    Route.get('/', () => {

        return 'Hello World'
    })

    Route.post('/', 'MakeCreateCartController.create')

}).prefix('cart')
