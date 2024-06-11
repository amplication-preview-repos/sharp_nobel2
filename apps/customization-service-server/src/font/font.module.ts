import { Module } from "@nestjs/common";
import { FontModuleBase } from "./base/font.module.base";
import { FontService } from "./font.service";
import { FontController } from "./font.controller";
import { FontResolver } from "./font.resolver";

@Module({
  imports: [FontModuleBase],
  controllers: [FontController],
  providers: [FontService, FontResolver],
  exports: [FontService],
})
export class FontModule {}
