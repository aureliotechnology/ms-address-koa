import cors from '@koa/cors'
// import * as Sentry from '@sentry/node'
import { Container, inject, injectable } from 'inversify'
import serve from 'koa-static'
import { Action, ClassConstructor, createKoaServer, IocAdapter, useContainer } from 'routing-controllers'
import { TYPES } from '@infraestructure/adapter/dependecy-inject/dependecy-inject.types'
import DependecyInject from '@infraestructure/adapter/dependecy-inject'

@injectable()
export default class KoaModule implements IocAdapter {
  private app: any
  private container: Container
  constructor() {
    // Sentry.init({ dsn: appConfig.SENTRY_DSN })
    const newLocal = this.container = DependecyInject.getContainer();

    this.app = createKoaServer({
      cors: true,
      controllers: [
       
      ],
      defaultErrorHandler: false,
      middlewares: [],
      async authorizationChecker(action: Action, roles: string[]) {
        return true
      },
      async currentUserChecker(action: Action) {
        return true
      },
    })

    this.app.use(
      cors({
        origin: '*',
        exposeHeaders: 'Access-Control-Allow-Origin',
      }),
    )
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  get<T>(someClass: ClassConstructor<T>, action?: Action): T {
    return this.container.resolve<T>(someClass)
  }

  configureServices(): void {
    useContainer(this)
  }

  start(): void {
    const port = parseInt(process.env.PORT)
    this.app.use(serve(__dirname + '/static'))
    this.app.listen(port)
  }

  stop(): void | Promise<void> {
    throw new Error('Method not implemented.')
  }

  getApp(): any {
    return this.app
  }
}
