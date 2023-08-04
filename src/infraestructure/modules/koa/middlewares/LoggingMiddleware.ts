import ILogger from '@crosscutting/adapters/logger/ILogger'
import TYPES from '@crosscutting/Types'
import * as Sentry from '@sentry/node'
import { ValidationError } from 'class-validator'
import { inject, injectable } from 'inversify'
import Koa from 'koa'
import { KoaMiddlewareInterface, Middleware } from 'routing-controllers'

enum HttpClientError {
  BAD_REQUEST = 'BadRequestError',
  UNAUTHORIZED = 'UnauthorizedError',
  NOT_FOUND = 'NotFoundError',
}

@injectable()
@Middleware({ type: 'before' })
export default class LoggingMiddleware implements KoaMiddlewareInterface {
  constructor(@inject(TYPES.ILogger) private readonly logger: ILogger) { }

  async use(context: Koa.Context, next: (err?: any) => Promise<any>): Promise<any> {
    try {
      this.logger.info(JSON.stringify(context))
      return await next()
    } catch (ex) {
      this.logger.warning(Reflect.get(ex, 'constructor').name, ex)
      context.response.body = JSON.parse(JSON.stringify(ex, ['name', 'errorCode', 'message', 'stack']))
      const isClientError =
        ex.hasOwnProperty('errorCode') || ex.name === HttpClientError.BAD_REQUEST || ex instanceof ValidationError
      if (isClientError) {
        // Domain Exception
        context.response.status = 400
      } else if (ex.name === HttpClientError.UNAUTHORIZED) {
        context.response.status = 401
      } else if (ex.name === HttpClientError.NOT_FOUND) {
        context.response.status = 404
      } else {
        context.response.status = 500
        Sentry.withScope(function (scope) {
          scope.addEventProcessor(function (event) {
            return Sentry.Handlers.parseRequest(event, context.request)
          })
          Sentry.captureException(ex)
        })
      }
    }
  }
}
