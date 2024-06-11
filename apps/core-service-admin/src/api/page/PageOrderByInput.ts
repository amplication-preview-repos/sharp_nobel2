import { SortOrder } from "../../util/SortOrder";

export type PageOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  websiteId?: SortOrder;
};
