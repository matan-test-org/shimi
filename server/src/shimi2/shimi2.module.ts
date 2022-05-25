import { Module } from "@nestjs/common";
import { Shimi2ModuleBase } from "./base/shimi2.module.base";
import { Shimi2Service } from "./shimi2.service";
import { Shimi2Controller } from "./shimi2.controller";
import { Shimi2Resolver } from "./shimi2.resolver";

@Module({
  imports: [Shimi2ModuleBase],
  controllers: [Shimi2Controller],
  providers: [Shimi2Service, Shimi2Resolver],
  exports: [Shimi2Service],
})
export class Shimi2Module {}
