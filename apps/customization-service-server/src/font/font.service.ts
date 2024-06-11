import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FontServiceBase } from "./base/font.service.base";

@Injectable()
export class FontService extends FontServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
