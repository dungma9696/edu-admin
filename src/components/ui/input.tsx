/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import type { FC, ChangeEvent, ReactNode, FocusEvent } from "react";

import {
  TextField,
  Select,
  MenuItem,
  InputAdornment,
  FormControl,
  Typography,
  IconButton,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

import type { TextFieldProps, SelectProps } from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import styles from "./styles/indput.module.scss";

const INPUT_STATES = {
  BLANK: "blank",
  FILLED: "filled",
  FOCUS: "focus",
  ERROR: "error",
} as const;

const INPUT_TYPES = {
  TEXT: "text",
  EMAIL: "email",
  PASSWORD: "password",
  PHONE: "tel",
  NUMBER: "number",
  SELECT: "select",
  DATE: "date",
  CHECKBOX_GROUP: "checkbox",
  RADIO_GROUP: "radio",
} as const;

export type InputState = (typeof INPUT_STATES)[keyof typeof INPUT_STATES];
export type InputType = (typeof INPUT_TYPES)[keyof typeof INPUT_TYPES];

export interface SelectOption {
  value: string | number | boolean;
  label: string;
}

export interface InputProps extends Omit<TextFieldProps, "variant" | "type"> {
  inputType?: InputType;
  state?: InputState;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  label?: string;
  helperText?: string;
  options?: SelectOption[];
  onValueChange?: (value: any) => void;
  validate?: (value: string | string[]) => boolean;
  direction?: "row" | "column";
}

const parseBoolean = (val: any): any => {
  if (val === "true") return true;
  if (val === "false") return false;
  return val;
};

const Input: FC<InputProps> = ({
  inputType = "text",
  state = "blank",
  leftIcon,
  rightIcon,
  label,
  helperText,
  options = [],
  value = "",
  placeholder = "Text",
  disabled = false,
  className = "",
  onValueChange,
  direction,
  onChange,
  onFocus,
  onBlur,
  margin,
  size,
  fullWidth = true,
  validate,
  ...props
}) => {
  const [internalError, setInternalError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const getInputClass = (): string => {
    const baseClass = styles.input;
    const stateClass = styles[state] || "";
    const typeClass = inputType === INPUT_TYPES.SELECT ? styles.select : "";

    return `${baseClass} ${stateClass} ${typeClass} ${className}`.trim();
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const newValue = event.target.value;
    onValueChange?.(newValue);
    onChange?.(event);
  };

  const handleBlur = (
    event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    onBlur?.(event);
    if (validate) {
      const isValid = validate(value as string);
      setInternalError(!isValid);
    }
  };

  const handleSelectChange = (event: any) => {
    const newValue = parseBoolean(event.target.value);
    onValueChange?.(newValue);
    if (validate) {
      const isValid = validate(newValue);
      setInternalError(!isValid);
    }
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const showError = state === INPUT_STATES.ERROR || internalError;
  const isFocused = state === INPUT_STATES.FOCUS;
  const isPassword = inputType === INPUT_TYPES.PASSWORD;
  const currentType = isPassword
    ? showPassword
      ? "text"
      : "password"
    : inputType;

  if (inputType === INPUT_TYPES.SELECT) {
    const selectProps: Partial<SelectProps> = {
      value: value === true || value === false ? value.toString() : value,
      onChange: handleSelectChange,
      disabled,
      displayEmpty: true,
      IconComponent: ExpandMoreIcon,
      error: showError,
      variant: "outlined",
      fullWidth,
      onFocus,
      onBlur,
      ...(margin && margin !== "normal" && { margin }),
      ...(size && { size }),
    };

    return (
      <div className={styles.inputContainer}>
        {label && (
          <Typography
            className={`${styles.label} ${showError ? styles.error : ""}`}
          >
            {label}
          </Typography>
        )}
        <FormControl fullWidth>
          <Select className={getInputClass()} {...selectProps}>
            <MenuItem value="" disabled>
              {placeholder}
            </MenuItem>
            {options.map((option, index) => (
              <MenuItem key={index} value={option.value.toString()}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {showError && helperText && (
          <Typography className={`${styles.helperText} ${styles.error}`}>
            {helperText}
          </Typography>
        )}
      </div>
    );
  }

  if (inputType === INPUT_TYPES.CHECKBOX_GROUP) {
    const currentValue = Array.isArray(value)
      ? value.map((v) => v.toString())
      : [];

    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { value: checkboxValue, checked } = event.target;
      let updatedValues = [...currentValue];

      if (checked) {
        updatedValues.push(checkboxValue);
      } else {
        updatedValues = updatedValues.filter((v) => v !== checkboxValue);
      }

      const parsedValues = updatedValues.map(parseBoolean);
      onValueChange?.(parsedValues);
      if (validate) {
        setInternalError(!validate(parsedValues as any));
      }
    };

    return (
      <div className={styles.inputContainer}>
        {label && (
          <Typography
            className={`${styles.label} ${showError ? styles.error : ""}`}
          >
            {label}
          </Typography>
        )}
        <FormGroup className={getInputClass()} row={direction === "row"}>
          {options.map((option) => (
            <FormControlLabel
              key={option.value.toString()}
              control={
                <Checkbox
                  checked={currentValue.includes(option.value.toString())}
                  onChange={handleCheckboxChange}
                  value={option.value.toString()}
                  disabled={disabled}
                />
              }
              label={option.label}
            />
          ))}
        </FormGroup>
        {showError && helperText && (
          <Typography className={`${styles.helperText} ${styles.error}`}>
            {helperText}
          </Typography>
        )}
      </div>
    );
  }

  if (inputType === INPUT_TYPES.RADIO_GROUP) {
    const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
      const newValue = parseBoolean(event.target.value);
      onValueChange?.(newValue);
      if (validate) {
        setInternalError(!validate(newValue));
      }
    };

    return (
      <div className={styles.inputContainer}>
        {label && (
          <Typography
            className={`${styles.label} ${showError ? styles.error : ""}`}
          >
            {label}
          </Typography>
        )}
        <RadioGroup
          className={getInputClass()}
          value={value === true || value === false ? value.toString() : value}
          onChange={handleRadioChange}
          row={direction === "row"}
        >
          {options.map((option) => (
            <FormControlLabel
              key={option.value.toString()}
              value={option.value.toString()}
              control={<Radio disabled={disabled} />}
              label={option.label}
            />
          ))}
        </RadioGroup>
        {showError && helperText && (
          <Typography className={`${styles.helperText} ${styles.error}`}>
            {helperText}
          </Typography>
        )}
      </div>
    );
  }

  return (
    <div className={styles.inputContainer}>
      {label && (
        <Typography
          className={`${styles.label} ${showError ? styles.error : ""}`}
        >
          {label}
        </Typography>
      )}
      <TextField
        type={currentType}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        error={showError}
        focused={isFocused}
        className={getInputClass()}
        onChange={handleChange}
        onFocus={onFocus}
        onBlur={handleBlur}
        margin={margin}
        size={size}
        fullWidth={fullWidth}
        InputProps={{
          startAdornment: leftIcon ? (
            <InputAdornment position="start">{leftIcon}</InputAdornment>
          ) : undefined,
          endAdornment: isPassword ? (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleTogglePasswordVisibility}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ) : rightIcon ? (
            <InputAdornment position="end">{rightIcon}</InputAdornment>
          ) : undefined,
        }}
        {...props}
      />
      {showError && helperText && (
        <Typography className={`${styles.helperText} ${styles.error}`}>
          {helperText}
        </Typography>
      )}
    </div>
  );
};

export default Input;
