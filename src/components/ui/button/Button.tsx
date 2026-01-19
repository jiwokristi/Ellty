import { forwardRef, type ComponentProps } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../../utils/cn';

const buttonVariants = cva(
  [
    'inline-flex',
    'items-center',
    'justify-center',
    'gap-2.5',
    'cursor-pointer',
    'rounded-sm',
  ],
  {
    variants: {
      intent: {
        primary: ['bg-primary', 'text-black', 'hover:bg-(--btn-primary-hover)'],
      },
      size: {
        medium: [
          'px-5',
          'py-2.5',
          'text-sm',
          'font-normal',
          'tracking-normal',
          'leading-[18.2px]',
        ],
      },
      disabled: {
        false: null,
        true: ['cursor-not-allowed'],
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'medium',
    },
  },
);

export interface ButtonProps
  extends
    Omit<ComponentProps<'button'>, 'disabled'>,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, intent, size, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ intent, size, disabled }), className)}
        disabled={!!disabled}
        {...props}
      />
    );
  },
);

Button.displayName = 'Button';
