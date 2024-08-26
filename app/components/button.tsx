import * as React from 'react';

import { Spinner } from '@/app/components/spinner';
import { cn } from '@/lib/utils';

const variants = {
  primary: 'bg-blue-600 text-white',
  secondary: 'bg-white text-gray-500',
  inverse: 'bg-white text-blue-600',
  danger: 'bg-red-600 text-white',
};

const sizes = {
  sm: 'py-2 px-4 text-body',
  md: 'py-2 px-6 text-body',
  lg: 'py-3 px-8 text-lg',
};

// React.ButtonHTMLAttributesを継承しているためbuttonが持つ属性を継承している
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  isLoading?: boolean;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = 'button',
      className = '',
      variant = 'primary',
      size = 'md',
      isLoading = false,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        // eslint-disable-next-line react/button-has-type
        type={type}
        className={cn(
          'flex items-center justify-center rounded-md border border-gray-300 font-medium shadow-sm hover:opacity-80 focus:outline-none disabled:cursor-not-allowed disabled:opacity-70',
          variants[variant],
          sizes[size],
          className,
        )}
        {...props}
      >
        {isLoading ? (
          <span className="m-2 flex items-center gap-2">
            <Spinner size="sm" className="text-current" />
            Loading...
          </span>
        ) : (
          props.children
        )}
      </button>
    );
  },
);

Button.displayName = 'Button';
