import { forwardRef, type ComponentProps } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../../utils/cn';

const cardVariants = cva(
  'relative rounded-md p-2.5 border border-grey-50 shadow-(--shadow-card-default)',
  {
    variants: {
      variant: {
        default: 'bg-white',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface CardProps
  extends ComponentProps<'div'>, VariantProps<typeof cardVariants> {}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          cardVariants({
            variant,
          }),
          className,
        )}
        {...props}
      />
    );
  },
);

Card.displayName = 'Card';
