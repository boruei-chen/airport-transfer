'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import apiService from '@/bff/services/api';
import { IATACodesEnum } from '@/bff/enums/codes';
import validationService from '@/core/services/validation';
import Textbox from '@/shared/components/Form/Textbox';
import Textarea from '@/shared/components/Form/Textarea';
import Button from '@/shared/components/Elements/Button';
import DropoffDoneDialog from '@/shared/components/Dialogs/DropoffDoneDialog';
import DropoffNotFoundDialog from '@/shared/components/Dialogs/DropoffNotFoundDialog';
import { DropoffDoneDialogState, DropoffNotFoundDialogState } from './types';
import * as S from './styles';

const Page: React.FC = () => {
  const [dropoffDoneDialogState, setDropoffDoneDialogState] = useState<DropoffDoneDialogState>({
    visible: false
  });
  const [dropoffNotFoundDialogState, setDropoffNotFoundDialogState] = useState<DropoffNotFoundDialogState>({
    visible: false,
    data: {}
  });

  const form = useForm({
    defaultValues: {
      destination: '桃園國際機場 第一航廈',
      flightNo: '',
      name: '',
      tel: '',
      idOrPassportNo: '',
      remark: ''
    },
    resolver: yupResolver(Yup.object().shape({
      destination: Yup.string(),
      flightNo: Yup.string().concat(validationService.flightNoSchema),
      name: Yup.string().concat(validationService.nameSchema),
      tel: Yup.string().concat(validationService.telNoSchema),
      idOrPassportNo: Yup.string().concat(validationService.idOrPassportNoSchema),
      remark: Yup.string()
    }))
  });

  const handleOpenDropoffDoneDialog = () => {
    setDropoffDoneDialogState((prevState) => ({ ...prevState, visible: true }));
  };

  const handleCloseDropoffDoneDialog = () => {
    setDropoffDoneDialogState((prevState) => ({ ...prevState, visible: false }));
    form.reset();
  };

  const handleOpenDropoffNotFoundDialog = (data: DropoffNotFoundDialogState['data']) => {
    setDropoffNotFoundDialogState((prevState) => ({ ...prevState, visible: true, data }));
  };

  const handleConfirmDropoffNotFoundDialog = () => {
    handleOpenDropoffDoneDialog();
    handleCloseDropoffNotFoundDialog();
  };

  const handleCloseDropoffNotFoundDialog = () => {
    setDropoffNotFoundDialogState((prevState) => ({ ...prevState, visible: false, data: {} }));
  };

  const handleFormSubmit = form.handleSubmit(async (formValues) => {
    const airportDepartureData = await apiService.getAirFidsAirportDepartureIata(IATACodesEnum.TPE);
    const isExisted = airportDepartureData.some((data) => formValues.flightNo === `${data.AirlineID}${data.FlightNumber}`);
    if (isExisted) {
      handleOpenDropoffDoneDialog();
    } else {
      handleOpenDropoffNotFoundDialog({ flightNo: formValues.flightNo });
    }
  });

  return (
    <>
      <S.Page>
        <S.Page.Title>送機行程</S.Page.Title>
        <S.Page.Form onSubmit={handleFormSubmit}>
          <S.Page.Section>
            <S.Page.SectionTitle>送機計畫</S.Page.SectionTitle>
            <S.Page.SectionContent>
              <Textbox label="下車機場" name="destination" control={form.control} disabled />
              <Textbox label="航班編號" name="flightNo" control={form.control} />
            </S.Page.SectionContent>
          </S.Page.Section>
          <S.Page.Section>
            <S.Page.SectionTitle>旅客資訊</S.Page.SectionTitle>
            <S.Page.SectionContent>
              <Textbox label="姓名" name="name" control={form.control} />
              <Textbox label="電話" name="tel" control={form.control} />
              <Textbox label="身分證字號 / 護照編號" name="idOrPassportNo" control={form.control} />
              <Textarea label="乘車備註" name="remark" control={form.control} />
            </S.Page.SectionContent>
          </S.Page.Section>
          <Button type="submit" variant="filled">下一步</Button>
        </S.Page.Form>
      </S.Page>
      <DropoffDoneDialog
        {...dropoffDoneDialogState}
        onClose={handleCloseDropoffDoneDialog}
      />
      <DropoffNotFoundDialog
        {...dropoffNotFoundDialogState}
        onConfirm={handleConfirmDropoffNotFoundDialog}
        onClose={handleCloseDropoffNotFoundDialog}
      />
    </>
  );
};

export default Page;
