import { FontWhereInput } from "./FontWhereInput";
import { FontOrderByInput } from "./FontOrderByInput";

export type FontFindManyArgs = {
  where?: FontWhereInput;
  orderBy?: Array<FontOrderByInput>;
  skip?: number;
  take?: number;
};
