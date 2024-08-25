import { UseFormRegisterReturn } from 'react-hook-form';

import { FieldWrapper, FieldWrapperPassThroughProps } from '@/app/components/form/FieldWrapper';
import { cn } from '@/lib/utils';

type TextAreaFieldProps = FieldWrapperPassThroughProps & {
  className?: string;
  registration: Partial<UseFormRegisterReturn>;
};

export const TextAreaField = (props: TextAreaFieldProps) => {
  const { id, label, className, registration, error } = props;
  return (
    <FieldWrapper id={id} label={label} error={error}>
      <textarea
        name={id}
        className={cn(
          'block w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm',
          className
        )}
        {...registration}
      />
    </FieldWrapper>
  );
};
