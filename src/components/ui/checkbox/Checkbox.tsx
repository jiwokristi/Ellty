import { forwardRef, type ComponentProps } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../../utils/cn';

import CheckWhite from '../../../assets/checkWhite.svg?react';

const checkboxVariants = cva(
  'relative inline-flex items-center justify-center rounded-md border',

  {
    variants: {
      size: {
        md: 'h-5.75 w-5.75',
      },
      intent: {
        primary: [
          'border-grey-200',
          'opacity-60',
          'hover:opacity-100',
          'hover:border-grey-300',
          'hover:[&_.checkWhite_path]:stroke-grey-100',
          'active:[&_.checkWhite_path]:stroke-grey-400',
          'active:ring-[3px]',
          'active:ring-blue/10',
          'active:opacity-100',

          'group-hover:opacity-100',
          'group-hover:border-grey-300',
          'group-hover:[&_.checkWhite_path]:stroke-grey-100',
          'group-active:[&_.checkWhite_path]:stroke-grey-400',
          'group-active:ring-[3px]',
          'group-active:ring-blue/10',
          'group-active:opacity-100',
        ],
      },
      checked: {
        false: null,
        true: [
          'bg-blue',
          'border-blue',
          'opacity-100',
          'hover:bg-(--checkbox-blue-hover)',
          'hover:border-(--checkbox-blue-hover)',
          'active:[&_.checkWhite_path]:stroke-white',
          'active:bg-blue',
          'active:border-blue',

          'group-hover:bg-(--checkbox-blue-hover)',
          'group-hover:border-(--checkbox-blue-hover)',
          'group-active:[&_.checkWhite_path]:stroke-white',
          'group-active:bg-blue',
          'group-active:border-blue',
        ],
      },
      disabled: {
        false: null,
        true: 'cursor-not-allowed',
      },
    },
    defaultVariants: {
      size: 'md',
      intent: 'primary',
      checked: false,
      disabled: false,
    },
  },
);

export interface CheckboxProps
  extends
    Omit<ComponentProps<'input'>, 'size' | 'checked' | 'disabled'>,
    VariantProps<typeof checkboxVariants> {}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, size, intent, checked, disabled, ...props }, ref) => {
    return (
      <label className="inline-flex items-center gap-2 cursor-pointer">
        <span
          className={cn(
            checkboxVariants({
              size,
              intent,
              checked,
              disabled,
            }),
            className,
          )}
        >
          <CheckWhite className="checkWhite" />
        </span>

        <input
          ref={ref}
          type="checkbox"
          checked={!!checked}
          disabled={!!disabled}
          className="sr-only"
          aria-checked={!!checked}
          {...props}
        />
      </label>
    );
  },
);

Checkbox.displayName = 'Checkbox';
