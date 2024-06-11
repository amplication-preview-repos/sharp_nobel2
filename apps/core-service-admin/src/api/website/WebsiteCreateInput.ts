import { PageCreateNestedManyWithoutWebsitesInput } from "./PageCreateNestedManyWithoutWebsitesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WebsiteCreateInput = {
  description?: string | null;
  name?: string | null;
  pages?: PageCreateNestedManyWithoutWebsitesInput;
  published?: boolean | null;
  user?: UserWhereUniqueInput | null;
};
