import { ComponentCreateNestedManyWithoutPagesInput } from "./ComponentCreateNestedManyWithoutPagesInput";
import { InputJsonValue } from "../../types";
import { WebsiteWhereUniqueInput } from "../website/WebsiteWhereUniqueInput";

export type PageCreateInput = {
  components?: ComponentCreateNestedManyWithoutPagesInput;
  content?: InputJsonValue;
  title?: string | null;
  website?: WebsiteWhereUniqueInput | null;
};
