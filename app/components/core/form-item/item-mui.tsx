/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Switch,
  TextField,
} from "@mui/material";

export type ControlTypes =
  | "input"
  | "textarea"
  | "select"
  | "radio"
  | "checkbox"
  | "switch"
  | "date"
  | "checkbox-group";

interface Option {
  label: string;
  value: any;
}

interface CommonProps {
  field: any;
  label?: string;
  error?: any;
  options?: Option[];
  [key: string]: any;
}

export const ControlMapMUI = {
  input: ({ field, label, error, ...rest }: CommonProps) => (
    <TextField
      fullWidth
      {...field}
      label={label}
      error={!!error}
      helperText={error?.message}
      {...rest}
    />
  ),

  textarea: ({ field, label, error, ...rest }: CommonProps) => (
    <TextField
      fullWidth
      multiline
      minRows={4}
      {...field}
      label={label}
      error={!!error}
      helperText={error?.message}
      {...rest}
    />
  ),

  select: ({ field, label, options = [], error }: CommonProps) => (
    <FormControl fullWidth error={!!error}>
      <InputLabel>{label}</InputLabel>
      <Select {...field} label={label}>
        {options.map((opt) => (
          <MenuItem key={opt.value} value={opt.value}>
            {opt.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  ),

  radio: ({ field, label, options = [], row = false }: CommonProps) => (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <RadioGroup {...field} row={row}>
        {options.map((opt) => (
          <FormControlLabel
            key={opt.value}
            value={opt.value}
            control={<Radio />}
            label={opt.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  ),

  checkbox: ({ field, label }: CommonProps) => (
    <FormControlLabel
      control={<Checkbox {...field} checked={field.value} />}
      label={label}
    />
  ),

  switch: ({ field, label }: CommonProps) => (
    <FormControlLabel
      control={<Switch {...field} checked={field.value} />}
      label={label}
    />
  ),

  date: ({ field, label, error }: CommonProps) => (
    <TextField
      fullWidth
      type="date"
      label={label}
      InputLabelProps={{ shrink: true }}
      error={!!error}
      helperText={error?.message}
      {...field}
    />
  ),

  "checkbox-group": ({
    field,
    label,
    options = [],
    error,
    row = false,
  }: CommonProps) => {
    const { value = [], onChange } = field;

    const handleChange = (checkedValue: any) => {
      const currentIndex = value.indexOf(checkedValue);
      const newChecked = [...value];

      if (currentIndex === -1) {
        newChecked.push(checkedValue);
      } else {
        newChecked.splice(currentIndex, 1);
      }

      onChange(newChecked);
    };

    return (
      <FormControl component="fieldset" error={!!error}>
        <FormLabel component="legend">{label}</FormLabel>
        <div
          style={{
            display: "flex",
            flexDirection: row ? "row" : "column",
            gap: 8,
          }}
        >
          {options.map((opt) => (
            <FormControlLabel
              key={opt.value}
              control={
                <Checkbox
                  checked={value.includes(opt.value)}
                  onChange={() => handleChange(opt.value)}
                />
              }
              label={opt.label}
            />
          ))}
        </div>
        {error?.message && (
          <p style={{ color: "#d32f2f", fontSize: "0.75rem", marginTop: 4 }}>
            {error.message}
          </p>
        )}
      </FormControl>
    );
  },
};
