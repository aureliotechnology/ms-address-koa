import { IModule } from "./IModule"

export default class Server {
  private modules: IModule[]
  public webServer: any

  constructor() {
    this.modules = new Array<IModule>()
  }

  addModule(module: IModule, isWebServer = false): void {
    this.modules.push(module)
    if (isWebServer) this.webServer = module
  }

  async run(): Promise<void> {
    for await (const module of this.modules) {
      await module.configureServices()
      await module.start()
    }
  }

  async stop(): Promise<void> {
    const promises = new Set()
    for (const module of this.modules) {
      promises.add(module.stop())
    }
    await Promise.all(promises)
  }
}
