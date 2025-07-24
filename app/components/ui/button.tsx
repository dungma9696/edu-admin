import type { FC, ReactNode } from "react";
import { Button as MuiButton } from "@mui/material";
import type { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import styles from "./styles/button.module.scss";

const BUTTON_VARIANTS = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  SUCCESS: "success",
  DANGER: "danger",
  DISABLED: "disabled",
  OUTLINE: "outline",
} as const;

const BUTTON_SIZES = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
} as const;

export type ButtonVariant =
  (typeof BUTTON_VARIANTS)[keyof typeof BUTTON_VARIANTS];
export type ButtonSize = (typeof BUTTON_SIZES)[keyof typeof BUTTON_SIZES];

export interface ButtonProps
  extends Omit<MuiButtonProps, "variant" | "color" | "size"> {
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "disabled"
    | "outline";
  size?: ButtonSize;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({
  variant = "primary",
  size = BUTTON_SIZES.MEDIUM,
  children,
  disabled = false,
  className = "",
  ...props
}) => {
  const getButtonClass = (): string => {
    const baseClass = styles.button;
    const variantClass = disabled ? styles.disabled : styles[variant];
    const sizeClass = size !== BUTTON_SIZES.MEDIUM ? styles[size] : "";

    return `${baseClass} ${variantClass} ${sizeClass} ${className}`.trim();
  };

  const isDisabled = disabled || variant === BUTTON_VARIANTS.DISABLED;

  return (
    <MuiButton className={getButtonClass()} disabled={isDisabled} {...props}>
      {children}
    </MuiButton>
  );
};

export default Button;
