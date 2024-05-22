import React from 'react';
import Dialog from '@/shared/components/Dialogs/Dialog';
import Button from '@/shared/components/Elements/Button';
import { Props } from './DropoffNotFoundDialog.types';
import * as S from './DropoffNotFoundDialog.styles';

const DropoffNotFoundDialog: React.FC<Props> = (props) => {
  const {
    data,
    onConfirm,
    ...restProps
  } = props;

  const handleConfirm = () => {
    onConfirm();
  };

  const handleAgain = () => {
    restProps.onClose();
  };

  return (
    <Dialog {...restProps}>
      <S.DropoffNotFoundDialog>
        <S.DropoffNotFoundDialog.Title>查不到「{data.flightNo}」航班資訊</S.DropoffNotFoundDialog.Title>
        <S.DropoffNotFoundDialog.Desc>請確認航班資訊、起飛時間等。你也可以直接填寫此航班作為機場接送資訊</S.DropoffNotFoundDialog.Desc>
        <S.DropoffNotFoundDialog.Controls>
          <Button type="button" variant="filled" onClick={handleConfirm}>確認航班資訊，並送出</Button>
          <Button type="button" variant="outline" onClick={handleAgain}>重新填寫</Button>
        </S.DropoffNotFoundDialog.Controls>
      </S.DropoffNotFoundDialog>
    </Dialog>
  );
};

export default DropoffNotFoundDialog;
