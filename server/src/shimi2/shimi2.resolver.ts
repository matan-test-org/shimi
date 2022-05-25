import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { Shimi2ResolverBase } from "./base/shimi2.resolver.base";
import { Shimi2 } from "./base/Shimi2";
import { Shimi2Service } from "./shimi2.service";

@graphql.Resolver(() => Shimi2)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class Shimi2Resolver extends Shimi2ResolverBase {
  constructor(
    protected readonly service: Shimi2Service,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
