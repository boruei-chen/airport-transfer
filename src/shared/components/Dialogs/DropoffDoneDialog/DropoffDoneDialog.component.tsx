import React from 'react';
import Image from 'next/image';
import CheckIconSVG from '@/assets/images/check-icon.svg';
import Dialog from '@/shared/components/Dialogs/Dialog';
import { Props } from './DropoffDoneDialog.types';
import * as S from './DropoffDoneDialog.styles';

const DropoffDoneDialog: React.FC<Props> = (props) => (
  <Dialog {...props}>
    <S.DropoffDoneDialog>
      <S.DropoffDoneDialog.Icon>
        <Image src={CheckIconSVG} alt="check-icon" />
      </S.DropoffDoneDialog.Icon>
      <S.DropoffDoneDialog.Text>完成送機行程</S.DropoffDoneDialog.Text>
    </S.DropoffDoneDialog>
  </Dialog>
);

export default DropoffDoneDialog;
