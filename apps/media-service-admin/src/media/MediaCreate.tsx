import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const MediaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="size" source="size" />
        <TextInput label="type" source="typeField" />
        <TextInput label="uploadedBy" source="uploadedBy" />
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Create>
  );
};
