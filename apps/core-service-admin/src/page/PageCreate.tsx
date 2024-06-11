import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ComponentTitle } from "../component/ComponentTitle";
import { WebsiteTitle } from "../website/WebsiteTitle";

export const PageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="components"
          reference="Component"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ComponentTitle} />
        </ReferenceArrayInput>
        <div />
        <TextInput label="title" source="title" />
        <ReferenceInput source="website.id" reference="Website" label="website">
          <SelectInput optionText={WebsiteTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
