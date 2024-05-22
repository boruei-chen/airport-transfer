import React from 'react';
import { Props } from './Textbox.types';
import * as S from './Textbox.styles';

const Textbox = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    label,
    className,
    errorMessage,
    disabled,
    ...restProps
  } = props;

  return (
    <S.Textbox className={className} $invalid={!!(errorMessage && !disabled)}>
      <S.Textbox.Wrapper>
        {label && <S.Textbox.Label>{label}</S.Textbox.Label>}
        <S.Textbox.Input {...restProps} type="text" disabled={disabled} ref={ref} />
      </S.Textbox.Wrapper>
      {(errorMessage && !disabled) && <S.Textbox.ErrorMessage>{errorMessage}</S.Textbox.ErrorMessage>}
    </S.Textbox>
  );
});

Textbox.displayName = 'Textbox';

export default Textbox;
