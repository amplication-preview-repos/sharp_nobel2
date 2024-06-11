import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const MediaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="size" source="size" />
        <TextInput label="type" source="typeField" />
        <TextInput label="uploadedBy" source="uploadedBy" />
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Edit>
  );
};
