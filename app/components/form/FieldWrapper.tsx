import { FieldError } from 'react-hook-form';

import { cn } from '@/lib/utils';

type FieldWrapperProps = {
  id: string;
  label?: string;
  className?: string;
  children: React.ReactNode;
  error?: FieldError | undefined;
};

export type FieldWrapperPassThroughProps = Omit<
  FieldWrapperProps,
  'className' | 'children'
>;

export const FieldWrapper = (props: FieldWrapperProps) => {
  const { id, label, className, error, children } = props;
  return (
    <div>
      <label
        htmlFor={id}
        className={cn('block text-sm font-medium', className)}
      >
        {label}
        <div className="mt-1">{children}</div>
      </label>
      {error?.message && (
        <div
          role="alert"
          aria-label={error.message}
          className="text-sm font-semibold text-red-500"
        >
          {error.message}
        </div>
      )}
    </div>
  );
};
