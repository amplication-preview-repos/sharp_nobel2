import { Page } from "../page/Page";
import { User } from "../user/User";

export type Website = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  pages?: Array<Page>;
  published: boolean | null;
  updatedAt: Date;
  user?: User | null;
};
