import Fastify, {  } from 'fastify';

const fastify = Fastify({
  logger: true
})
// const itemValidation = { // Define validation
//   schema: {
//       body: {
//           type: 'object',
//           additionalProperties: false,
//           required: [
//               'item'
//           ],
//           properties: {
//               item: { type: 'string' }
//           }
//       },
//       response: {
//           201: {
//               type: 'object',
//               properties: {
//                   item: { type: 'string' }
//               }
//           }
//       }
//   }
// }
const stack: unknown[] = [];

fastify.get('/', async (request, reply) => {
  return { hello: 'world' }
})

fastify.get('/getStack', (request, reply) => {
  reply.send(stack)
})

fastify.post<{ Body: {item: string}}>('/addItem', (request, reply) => {
  const item: any = request.body.item
  stack.push(item)
  reply.send(stack)
})

const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()