"use client";

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
} as const;

export type InputState = (typeof INPUT_STATES)[keyof typeof INPUT_STATES];
export type InputType = (typeof INPUT_TYPES)[keyof typeof INPUT_TYPES];

export interface SelectOption {
  value: string | number;
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
  onValueChange?: (value: string) => void;
  validate?: (value: string) => boolean;
}

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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSelectChange = (event: any) => {
    const newValue = event.target.value as string;
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
      value,
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
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
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
