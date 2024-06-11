import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { PAGE_TITLE_FIELD } from "./PageTitle";
import { WEBSITE_TITLE_FIELD } from "../website/WebsiteTitle";

export const PageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="website" source="website.id" reference="Website">
          <TextField source={WEBSITE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Component"
          target="pageId"
          label="Components"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="data" source="data" />
            <TextField label="ID" source="id" />
            <ReferenceField label="page" source="page.id" reference="Page">
              <TextField source={PAGE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="type" source="typeField" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
