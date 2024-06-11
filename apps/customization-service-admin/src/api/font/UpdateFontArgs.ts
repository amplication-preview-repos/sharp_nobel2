import { FontWhereUniqueInput } from "./FontWhereUniqueInput";
import { FontUpdateInput } from "./FontUpdateInput";

export type UpdateFontArgs = {
  where: FontWhereUniqueInput;
  data: FontUpdateInput;
};
