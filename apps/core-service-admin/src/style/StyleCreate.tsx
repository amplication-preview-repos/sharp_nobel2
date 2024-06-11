import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const StyleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="css" multiline source="css" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
