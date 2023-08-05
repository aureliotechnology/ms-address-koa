import 'reflect-metadata'
import { injectable } from "inversify";
import { Get, JsonController, Res } from "routing-controllers";
import IController from "../interfaces/controller.interface";

@injectable()
@JsonController('/')
export default class AddressController implements IController {
    constructor(){}

    @Get('health-check')
    healthCheck(): string {
        return 'ok'
    }
}