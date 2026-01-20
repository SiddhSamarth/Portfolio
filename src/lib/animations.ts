// Common animation configurations
export const ANIMATION_EASE = [0.25, 0.46, 0.45, 0.94] as const;

export const SPRING_CONFIG = {
  stiffness: 100,
  damping: 18,
} as const;

export const SPRING_CONFIG_STIFF = {
  stiffness: 400,
  damping: 17,
} as const;

export const SPRING_CONFIG_SOFT = {
  stiffness: 80,
  damping: 20,
} as const;
