import { UseControllerProps, FieldValues } from 'react-hook-form';
import { Props as $Props } from '@/shared/components/Elements/Textarea/Textarea.types';

export type Props<TFieldValues extends FieldValues> = IProps & UseControllerProps<TFieldValues>;

export interface IProps extends $Props {}
