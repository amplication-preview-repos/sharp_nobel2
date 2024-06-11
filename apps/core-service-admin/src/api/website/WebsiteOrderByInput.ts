import { SortOrder } from "../../util/SortOrder";

export type WebsiteOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  published?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
