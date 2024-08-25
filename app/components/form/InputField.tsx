import { UseFormRegisterReturn } from 'react-hook-form';

import { FieldWrapper, FieldWrapperPassThroughProps } from '@/app/components/form/FieldWrapper'
import { cn } from '@/lib/utils';

type InputFieldProps = FieldWrapperPassThroughProps & {
  id: string
  type?: 'text' | 'email' | 'password';
  className?: string;
  registration: Partial<UseFormRegisterReturn>;
};

export const InputField = (props: InputFieldProps) => {
  const { id, type = 'text', label, className, registration, error } = props;
  return (
    <FieldWrapper id={id} label={label} error={error}>
      <input
        name={id}
        type={type}
        className={cn(
          'block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 shadow-sm placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm',
          className
        )}
        {...registration}
      />
    </FieldWrapper>
  );
};
