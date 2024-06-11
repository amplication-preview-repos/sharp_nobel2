import { ComponentUpdateManyWithoutPagesInput } from "./ComponentUpdateManyWithoutPagesInput";
import { InputJsonValue } from "../../types";
import { WebsiteWhereUniqueInput } from "../website/WebsiteWhereUniqueInput";

export type PageUpdateInput = {
  components?: ComponentUpdateManyWithoutPagesInput;
  content?: InputJsonValue;
  title?: string | null;
  website?: WebsiteWhereUniqueInput | null;
};
