import * as graphql from "@nestjs/graphql";
import { FontResolverBase } from "./base/font.resolver.base";
import { Font } from "./base/Font";
import { FontService } from "./font.service";

@graphql.Resolver(() => Font)
export class FontResolver extends FontResolverBase {
  constructor(protected readonly service: FontService) {
    super(service);
  }
}
