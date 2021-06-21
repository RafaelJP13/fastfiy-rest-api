const fastify = require('fastify')({logger:true})
const items = require('../Items')
fastify.register(require('./routes/items'))

const PORT = 5000

const start = async () => {

    try{

        await fastify.listen(PORT)

    }

    catch(error) {

        fastify.log.error(error)
        proccess.exit(1)

    }

}

start()

