import React from 'react';
import {
  Heading2,
  Paragraph,
  Content,
  TextField,
  PrimaryButton,
  BaseView,
} from '../../components';
import { HeaderView } from './styles';

export default function ForgotPassword(props) {
  return (
    <BaseView {...props} navigationHideBorderBottom={true}>
      <Content>
        <HeaderView>
          <Heading2>Esqueceu sua senha?</Heading2>
          <Paragraph>
            Não precisa se preocupar, digite o email que você utiliza para
            acessar o Questione, se o seu email exisitir na nossa base de dados
            estaremos enviando um link para que você possa redefinir a sua
            senha.
          </Paragraph>
        </HeaderView>
        <TextField label="Seu email" marginBottom={16} />
        <PrimaryButton>Enviar</PrimaryButton>
      </Content>
    </BaseView>
  );
}
