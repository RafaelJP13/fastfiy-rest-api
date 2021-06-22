import {getItems, getItem, addItem} from '../controllers/Item'

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
    },
    handler:getItems,
    

}

const getItemOpts = {

    schema:{
    response:{
        200:Item,

        }
    },

    handler:getItem,
    
}

const postItemOpts = {

    schema:{

        201:Item,

    },

    handler:addItem,
}

const itemRoutes = (fastify, options, done) =>{

    fastify.get('/items', getItemsOpts)
    fastify.get('/items/:id', getItemOpts)
    fastify.post('/items', postItemOpts)

    done()

}

export default itemRoutes