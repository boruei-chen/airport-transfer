import { Props as $Props } from '@/shared/components/Dialogs/Dialog/Dialog.types';

export interface Props extends Omit<$Props, 'children'> {
  data: PropsData;
  onConfirm: () => void;
}

export interface PropsData {
  flightNo?: string;
}
