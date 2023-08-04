export interface IModule {
  configureServices(): Promise<void> | void
  start(): Promise<void> | void
  stop(): Promise<void> | void
}
