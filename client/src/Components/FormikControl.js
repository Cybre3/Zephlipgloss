import React from "react";
import Input from "./Form/Input";
import Textarea from "./Form/Textarea";
import Select from "./Form/Select";
import RadioButtons from "./Form/RadioButtons";
import CheckboxGroup from "./Form/CheckboxGroup";
import DatePicker from "./Form/DatePicker";
import ChakraInput from "./ChakraInput";

function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <RadioButtons {...rest} />;
    case "checkbox":
      return <CheckboxGroup {...rest} />;
    case "date":
      return <DatePicker {...rest} />;
    case "chakrainput":
      return <ChakraInput {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
