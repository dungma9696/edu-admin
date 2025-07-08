/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { ControlMapMUI } from "./item-mui";

export type ControlTypes =
  | "input"
  | "textarea"
  | "checkbox"
  | "switch"
  | "select"
  | "radio"
  | "date"
  | "checkbox-group";

export interface Option {
  label: string;
  value: any;
}

export interface MyFormItemProps {
  name: string;
  label: string;
  type: ControlTypes;
  options?: Option[];
  defaultValue?: any;
  gridProps?: any;
  row?: boolean;
  [key: string]: any;
}

const MyFormItem: React.FC<MyFormItemProps> = (props) => {
  const { name, label, type, options, ...rest } = props;
  const { control, formState } = useFormContext();
  const error = formState.errors[name];

  const Component = ControlMapMUI[type];

  if (!Component) return null;

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={props.defaultValue ?? ""}
      render={({ field }) =>
        Component({
          field,
          label,
          options,
          error,
          ...rest,
        })
      }
    />
  );
};

export default MyFormItem;
