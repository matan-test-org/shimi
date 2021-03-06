/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateBlaArgs } from "./CreateBlaArgs";
import { UpdateBlaArgs } from "./UpdateBlaArgs";
import { DeleteBlaArgs } from "./DeleteBlaArgs";
import { BlaFindManyArgs } from "./BlaFindManyArgs";
import { BlaFindUniqueArgs } from "./BlaFindUniqueArgs";
import { Bla } from "./Bla";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { BlaService } from "../bla.service";

@graphql.Resolver(() => Bla)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class BlaResolverBase {
  constructor(
    protected readonly service: BlaService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Bla",
    action: "read",
    possession: "any",
  })
  async _blasMeta(
    @graphql.Args() args: BlaFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Bla])
  @nestAccessControl.UseRoles({
    resource: "Bla",
    action: "read",
    possession: "any",
  })
  async blas(@graphql.Args() args: BlaFindManyArgs): Promise<Bla[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Bla, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Bla",
    action: "read",
    possession: "own",
  })
  async bla(@graphql.Args() args: BlaFindUniqueArgs): Promise<Bla | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Bla)
  @nestAccessControl.UseRoles({
    resource: "Bla",
    action: "create",
    possession: "any",
  })
  async createBla(@graphql.Args() args: CreateBlaArgs): Promise<Bla> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Bla)
  @nestAccessControl.UseRoles({
    resource: "Bla",
    action: "update",
    possession: "any",
  })
  async updateBla(@graphql.Args() args: UpdateBlaArgs): Promise<Bla | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Bla)
  @nestAccessControl.UseRoles({
    resource: "Bla",
    action: "delete",
    possession: "any",
  })
  async deleteBla(@graphql.Args() args: DeleteBlaArgs): Promise<Bla | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [User])
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async users(
    @graphql.Parent() parent: Bla,
    @graphql.Args() args: UserFindManyArgs
  ): Promise<User[]> {
    const results = await this.service.findUsers(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
