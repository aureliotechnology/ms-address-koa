import IUC from "@app/interface/uc.interface";
import { Container } from "inversify";
import { TYPES } from "../dependecy-inject.types";
import { listClass } from "@infraestructure/config/util/list-class";
import IController from "~/presentation/interfaces/controller.interface";
import CreateAddressUC from "@app/use_case/create-address.uc";
import AddressController from "~/presentation/controllers/address.controller";

const container = new Container();
const ucs = [CreateAddressUC];
for (const uc of ucs) {
    container.bind<IUC>(TYPES.UC).to(uc).whenTargetNamed(uc.name)
}

const controllers = [AddressController]
for (const controller of controllers) {
    container.bind<IController>(TYPES.Controller).to(controller).whenTargetNamed(controller.name)
}

export { container };