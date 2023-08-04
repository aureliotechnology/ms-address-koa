import { inject, injectable } from 'inversify'
import Koa from 'koa'
import { KoaMiddlewareInterface, Middleware } from 'routing-controllers'

@injectable()
@Middleware({ type: 'before' })
export default class ErrorHandlerMiddleware implements KoaMiddlewareInterface {
  constructor() {}

  async use(ctx: Koa.Context, next: (err?: any) => Promise<any>): Promise<any> {

  }
}
