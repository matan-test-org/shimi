import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ShimiServiceBase } from "./base/shimi.service.base";

@Injectable()
export class ShimiService extends ShimiServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
