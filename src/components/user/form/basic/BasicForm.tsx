import { FormProvider, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';

import { HFSelect } from 'components/hook-form/HFSelect';
import { HFTextField } from 'components/hook-form/HFTextField';
import { Button } from 'components/ui/button/Button';
import { Paper } from 'components/ui/paper/Paper';

import { UserCreateDto } from 'types/dto/user/create.dto';
import { UserUpdateDto } from 'types/dto/user/update.dto';

import { roleOptions } from 'constants/role';

import { getValidationSchema } from './validation';

import sx from './BasicForm.styles';

export type UserBasicFormDto = UserCreateDto | Omit<UserUpdateDto, 'uuid'>;

export type UserBasicFormProps = {
  defaultValues?: UserBasicFormDto;
  onSubmit: (data: UserBasicFormDto) => void;
};

export function UserBasicForm({ defaultValues, onSubmit }: UserBasicFormProps) {
  const schema = getValidationSchema();

  const values = useForm<UserBasicFormDto>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  return (
    <FormProvider {...values}>
      <form id='createUserForm' onSubmit={values.handleSubmit(onSubmit)}>
        <Paper sx={sx.wrapper}>
          <HFTextField name='name' label='Ф. И. О. пользователя' />

          <HFTextField name='email' label='Email' />

          <HFTextField name='phone' label='Телефон' />

          <HFSelect options={roleOptions} name='role' label='Роль' />

          <Button type='submit'>Сохранить</Button>
        </Paper>
      </form>
    </FormProvider>
  );
}
