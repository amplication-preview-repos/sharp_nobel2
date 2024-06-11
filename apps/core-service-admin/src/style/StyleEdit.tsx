import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const StyleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="css" multiline source="css" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
