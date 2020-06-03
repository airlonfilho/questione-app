import React, { useState } from 'react';
import * as yup from 'yup';
import {
  Heading2,
  Content,
  TextField,
  PrimaryButton,
  BaseView,
} from '../../components';
import { HeaderView } from './styles';
import { useFormErrors } from '../../utils/useFormErrors';

export default function SignUp(props) {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const formValidationSchema = yup.object().shape({
    name: yup
      .string()
      .required('Por favor informe seu nome')
      .min(8, 'O nome deve ser ter pelo menos 8 letras')
      .max(50, 'O nome deve ser ter menos de 50 letras'),
    cpf: yup.string().required('Por favor informe seu CPF'),
    email: yup
      .string()
      .required('Por favor informe seu CPF')
      .email('O seu email deve estar no formato seuemail@exemplo.com'),
    password: yup
      .string()
      .required('Por favor informe sua senha')
      .min(6, 'A senha deve ter pelo menos 6 letras')
      .max(10, 'A senha deve ter até 10 letras'),
  });

  const {
    formErrors,
    validate,
    checkErrorsForField,
    clearErrorsForField,
  } = useFormErrors(formValidationSchema);

  const onPressSignUp = () => {
    const signUpPayload = { name, cpf, email, password };
    validate(signUpPayload).then(() => {});
  };

  return (
    <BaseView {...props} title="Criar conta">
      <Content>
        <HeaderView>
          <Heading2>Crie uma nova conta</Heading2>
        </HeaderView>
        <TextField
          label="Nome completo"
          marginBottom={16}
          error={formErrors.name}
          onBlur={() => {
            checkErrorsForField('name', name);
          }}
          onChangeText={(text) => {
            setName(text);
            clearErrorsForField('name');
          }}
        />
        <TextField label="CPF" marginBottom={16} />
        <TextField label="Email" marginBottom={16} />
        <TextField label="Senha" marginBottom={16} secureTextEntry={true} />
        <PrimaryButton onPress={onPressSignUp}>Criar conta</PrimaryButton>
      </Content>
    </BaseView>
  );
}
