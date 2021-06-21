const items = require('../../Items')


const Item = {

  
    type:'object',
    properties:{
        id: {type:'string'},
        name: {type:'string'}
        
    }
}

const getItemsOpts = {

    schema:{
        response:{
            200:{
            type:'array',
            items:Item
            }
        }
    }
}



const getItemOpts = {

    schema:{
    response:{
        200:Item,

        }
    }

}




const itemRoutes = (fastify, options, done) =>{

    fastify.get('/items', getItemsOpts, (req, reply) => {

        reply.send(items)

    })


    fastify.get('/items/:id', getItemOpts, (req, reply) => {

        const {id} = req.params
        const item = items.find(item => item.id === id)

        reply.send(item)

    })

    done()

}

module.exports = itemRoutes