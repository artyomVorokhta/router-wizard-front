import { FormProvider, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import { HFTextField } from 'components/hook-form/HFTextField';
import { Button } from 'components/ui/button/Button';
import { Paper } from 'components/ui/paper/Paper';

import { AppealCreateDto } from 'types/dto/appeal/create.dto';
import { AppealUpdateDto } from 'types/dto/appeal/update.dto';

import { getValidationSchema } from './validation';

import sx from './BasicForm.styles';

export type AppealBasicFormDto =
  | ({
      status: AppealCreateDto['status'];
    } & AppealCreateDto['client'])
  | ({
      status: AppealUpdateDto['status'];
    } & AppealUpdateDto['client']);

export type AppealBasicFormProps = {
  defaultValues?: AppealBasicFormDto;
  onSubmit: (data: AppealBasicFormDto) => void;
};

export function AppealBasicForm({ defaultValues, onSubmit }: AppealBasicFormProps) {
  const schema = getValidationSchema();

  const values = useForm<AppealBasicFormDto>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  return (
    <FormProvider {...values}>
      <form id='createAppealForm' onSubmit={values.handleSubmit(onSubmit)}>
        <Paper sx={sx.wrapper}>
          <HFTextField name='name' label='Ф. И. О.' />

          <HFTextField name='email' label='Email' />

          <HFTextField name='phone' label='Телефон' />

          <HFTextField name='router' label='Модель роутера' />

          <Button type='submit'>Сохранить</Button>
        </Paper>
      </form>
    </FormProvider>
  );
}
