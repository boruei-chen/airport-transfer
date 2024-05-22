import React from 'react';
import { Props } from './Button.types';
import * as S from './Button.styles';

const Button = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const {
    variant,
    ...restProps
  } = props;

  return (
    <S.Button {...restProps} $variant={variant} ref={ref}>
      {props.children}
    </S.Button>
  );
});

Button.displayName = 'Button';

export default Button;
