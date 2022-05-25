import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { Shimi2ServiceBase } from "./base/shimi2.service.base";

@Injectable()
export class Shimi2Service extends Shimi2ServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
