import React from 'react';
import { useController, FieldValues } from 'react-hook-form';
import $Textarea from '@/shared/components/Elements/Textarea';
import { Props } from './Textarea.types';

const Textarea = <TFieldValues extends FieldValues>(props: Props<TFieldValues>) => {
  const { name, rules, shouldUnregister, defaultValue, control, errorMessage, ...restProps } = props;
  const { field, fieldState } = useController({ name, rules, shouldUnregister, defaultValue, control });

  return (
    <$Textarea
      {...restProps}
      {...field}
      errorMessage={fieldState.error?.message ?? errorMessage}
    />
  );
};

export default Textarea;
