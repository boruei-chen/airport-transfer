import React from 'react';
import { Props } from './Textarea.types';
import * as S from './Textarea.styles';

const Textarea = React.forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
  const {
    label,
    className,
    cols = 30,
    rows = 5,
    errorMessage,
    disabled,
    ...restProps
  } = props;

  return (
    <S.Textarea className={className} $invalid={!!(errorMessage && !disabled)}>
      <S.Textarea.Wrapper>
        {label && <S.Textarea.Label>{label}</S.Textarea.Label>}
        <S.Textarea.Input {...restProps} cols={cols} rows={rows} disabled={disabled} ref={ref} />
      </S.Textarea.Wrapper>
      {(errorMessage && !disabled) && <S.Textarea.ErrorMessage>{errorMessage}</S.Textarea.ErrorMessage>}
    </S.Textarea>
  );
});

Textarea.displayName = 'Textarea';

export default Textarea;
