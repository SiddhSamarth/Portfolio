// Smooth animation configurations
export const ANIMATION_EASE = [0.22, 0.61, 0.36, 1] as const; // smooth ease-out

export const SMOOTH_EASE = [0.16, 1, 0.3, 1] as const; // very smooth

export const SPRING_CONFIG = {
  stiffness: 65,
  damping: 22,
} as const;

export const SPRING_CONFIG_STIFF = {
  stiffness: 180,
  damping: 22,
} as const;

export const SPRING_CONFIG_SOFT = {
  stiffness: 50,
  damping: 24,
} as const;

export const TRANSITION_SMOOTH = {
  duration: 1,
  ease: [0.22, 0.61, 0.36, 1] as const,
} as const;

export const TRANSITION_ENTER = {
  duration: 0.9,
  ease: [0.16, 1, 0.3, 1] as const,
} as const;
