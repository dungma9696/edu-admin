/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import MyFormItem, { MyFormItemProps } from "../form-item/index";
import { Button, Grid } from "@mui/material";
import * as yup from "yup";

export interface MyFormProps {
  options?: MyFormItemProps[];
  schema: yup.ObjectSchema<any>;
  onSubmit: (values: any) => void;
  defaultValues?: any;
  spacing?: number;
}

const MyForm: React.FC<MyFormProps> = ({
  options = [],
  schema,
  onSubmit,
  defaultValues = {},
  spacing = 2,
}) => {
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
        <Grid container spacing={spacing}>
          {options.map((field) => (
            <Grid key={field.name} size={field.gridProps ?? { xs: 12 }}>
              <MyFormItem {...field} />
            </Grid>
          ))}
          <Grid size={{ xs: 12 }}>
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </FormProvider>
  );
};

export default MyForm;
