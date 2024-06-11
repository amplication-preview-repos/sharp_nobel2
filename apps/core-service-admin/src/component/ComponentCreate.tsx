import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { PageTitle } from "../page/PageTitle";

export const ComponentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <ReferenceInput source="page.id" reference="Page" label="page">
          <SelectInput optionText={PageTitle} />
        </ReferenceInput>
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Create>
  );
};
