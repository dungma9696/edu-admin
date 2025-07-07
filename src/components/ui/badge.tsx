"use client";

import type { FC, ReactNode, MouseEvent } from "react";
import styles from "./styles/badge.module.scss";

// Constants
const BADGE_VARIANTS = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  SUCCESS: "success",
  WARNING: "warning",
  ERROR: "error",
} as const;

const BADGE_STYLES = {
  PRIMARY: "primary",
  SOFT: "soft",
  OUTLINED: "outlined",
} as const;

const BADGE_SIZES = {
  SMALL: "small",
  MEDIUM: "medium",
} as const;

// Types
export type BadgeVariant = (typeof BADGE_VARIANTS)[keyof typeof BADGE_VARIANTS];
export type BadgeStyle = (typeof BADGE_STYLES)[keyof typeof BADGE_STYLES];
export type BadgeSize = (typeof BADGE_SIZES)[keyof typeof BADGE_SIZES];

export interface BadgeProps {
  variant?: BadgeVariant;
  badgeStyle?: BadgeStyle;
  size?: BadgeSize;
  icon?: ReactNode;
  children?: ReactNode;
  className?: string;
  onClick?: (event: MouseEvent<HTMLSpanElement>) => void;
}

// Component
const Badge: FC<BadgeProps> = ({
  variant = BADGE_VARIANTS.PRIMARY,
  badgeStyle = BADGE_STYLES.PRIMARY,
  size = BADGE_SIZES.MEDIUM,
  icon,
  children,
  className = "",
  onClick,
}) => {
  const getBadgeClass = (): string => {
    const baseClass = styles.badge;
    const sizeClass = styles[size];
    const styleClass = styles[badgeStyle];
    const variantClass = styles[variant];
    const iconOnlyClass = icon && !children ? styles.iconOnly : "";

    return `${baseClass} ${sizeClass} ${styleClass} ${variantClass} ${iconOnlyClass} ${className}`.trim();
  };

  const isClickable = !!onClick;

  return (
    <span
      className={getBadgeClass()}
      onClick={onClick}
      style={{ cursor: isClickable ? "pointer" : "default" }}
      role={isClickable ? "button" : undefined}
      tabIndex={isClickable ? 0 : undefined}
    >
      {icon && !children ? icon : children}
    </span>
  );
};

export default Badge;
