import React from 'react';
import { Props } from './Dialog.types';
import * as S from './Dialog.styles';

const Dialog: React.FC<Props> = (props) => (
  <S.Dialog $visible={props.visible}>
    <S.Dialog.Container>
      {props.children}
    </S.Dialog.Container>
    <S.Dialog.Backdrop onClick={props.onClose} />
  </S.Dialog>
);

export default Dialog;
