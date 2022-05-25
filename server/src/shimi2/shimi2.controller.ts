import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { Shimi2Service } from "./shimi2.service";
import { Shimi2ControllerBase } from "./base/shimi2.controller.base";

@swagger.ApiTags("shimi2s")
@common.Controller("shimi2s")
export class Shimi2Controller extends Shimi2ControllerBase {
  constructor(
    protected readonly service: Shimi2Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
