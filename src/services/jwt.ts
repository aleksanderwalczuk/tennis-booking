// Reference
// https://github.com/fastify/fastify-jwt
import fastifyJWT from 'fastify-jwt'
import fp from 'fastify-plugin'

module.exports = fp(async function(fastify, opts) {
  fastify.register(fastifyJWT, {
    secret: "supersecret"
  })

  fastify.decorate("authenticate", async (request, reply) => {
    try {
      await request.jwtVerify()
    } catch (err) {
      reply.send(err)
    }
  })
})