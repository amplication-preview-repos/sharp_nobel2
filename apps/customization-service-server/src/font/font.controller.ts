import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FontService } from "./font.service";
import { FontControllerBase } from "./base/font.controller.base";

@swagger.ApiTags("fonts")
@common.Controller("fonts")
export class FontController extends FontControllerBase {
  constructor(protected readonly service: FontService) {
    super(service);
  }
}
