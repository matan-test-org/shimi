import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ShimiResolverBase } from "./base/shimi.resolver.base";
import { Shimi } from "./base/Shimi";
import { ShimiService } from "./shimi.service";

@graphql.Resolver(() => Shimi)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ShimiResolver extends ShimiResolverBase {
  constructor(
    protected readonly service: ShimiService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
