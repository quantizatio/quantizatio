const fastify = require('fastify')()
const mongoose = require('mongoose')
const Account = require('./model')
const Portfolio = require('./models/portfolio')

// Connect to DB
mongoose.connect('mongodb://localhost/quantom') 
  .then(() => console.log('MongoDB connected…')) 
  .catch(err => console.log(err))

fastify.register(require('fastify-cors'), { 
  origin: true,
})

fastify.get('/', async (request, reply) => {
  const account = await Account.findOne()
  return account
})

fastify.get('/portfolio', async (request, reply) => {
  const portfolio = await Portfolio.findOne()
  return portfolio
})

const start = async () => {
  try {
    await fastify.listen(7000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
