import { PageUpdateManyWithoutWebsitesInput } from "./PageUpdateManyWithoutWebsitesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WebsiteUpdateInput = {
  description?: string | null;
  name?: string | null;
  pages?: PageUpdateManyWithoutWebsitesInput;
  published?: boolean | null;
  user?: UserWhereUniqueInput | null;
};
