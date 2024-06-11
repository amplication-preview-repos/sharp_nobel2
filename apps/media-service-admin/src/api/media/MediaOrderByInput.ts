import { SortOrder } from "../../util/SortOrder";

export type MediaOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  size?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
  uploadedBy?: SortOrder;
  url?: SortOrder;
};
