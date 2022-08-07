import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { FieldHookConfig, useField } from "formik";

type InputFieldProps = FieldHookConfig<any> & {
  label: string;
  name: string;
  placeholder?: string;
};

const InputField = ({ label, ...props }: InputFieldProps) => {
  const [field, { error }] = useField(props);

  return (
    <FormControl isInvalid={!!error}>
      <FormLabel>{label}</FormLabel>
      <Input
        {...field}
        name={props.name}
        id={field.name}
        placeholder={props.placeholder}
      />
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
};

export default InputField;
