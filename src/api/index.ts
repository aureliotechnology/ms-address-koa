import 'reflect-metadata'


import { Container } from 'inversify'
import Server from '@infraestructure/modules/Server'
import { TYPES } from '@infraestructure/adapter/dependecy-inject/dependecy-inject.types'
import DependecyInject from '@infraestructure/adapter/dependecy-inject'
import KoaModule from '@infraestructure/modules/koa/KoaModule'

interface ISetupServer {
  server: Server
  container: Container
}

export const setupServer = async (): Promise<ISetupServer> => {
  const container = DependecyInject.getContainer();
 


  // container.bind<Container>(TYPES.Container).toConstantValue(container)

  const server = new Server()

  server.addModule(container.resolve(KoaModule), true)

  console.log('Dependency Injection Done')

  return {
    server,
    container,
  }
}
// eslint-disable-next-line prettier/prettier
(async () => {
  const { server } = await setupServer()
  await server.run()
})()
