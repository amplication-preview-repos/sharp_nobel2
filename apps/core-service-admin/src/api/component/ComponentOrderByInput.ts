import { SortOrder } from "../../util/SortOrder";

export type ComponentOrderByInput = {
  createdAt?: SortOrder;
  data?: SortOrder;
  id?: SortOrder;
  pageId?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
