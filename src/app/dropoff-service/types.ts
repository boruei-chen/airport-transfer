import { Props as DropoffDoneDialogProps } from '@/shared/components/Dialogs/DropoffDoneDialog/DropoffDoneDialog.types';
import { Props as DropoffNotFoundDialogProps } from '@/shared/components/Dialogs/DropoffNotFoundDialog/DropoffNotFoundDialog.types';

export type DropoffDoneDialogState = Pick<DropoffDoneDialogProps, 'visible'>;

export type DropoffNotFoundDialogState = Pick<DropoffNotFoundDialogProps, 'visible' | 'data'>;
