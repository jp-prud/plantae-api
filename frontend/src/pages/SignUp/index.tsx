import { useState } from 'react';
import GenericForm from '../../components/GenericForm';
import { Container } from './styles';

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <GenericForm
        header={{
          title: 'Cadastre-se',
          subtitle: 'Insira suas informações e acesse a plataforma',
        }}
        fields={[
          {
            label: 'Insira o seu email',
            type: 'email',
            error: 'Email é obrigatório',
            hasError: false,
            value: email,
            onChange: setEmail,
          },
          {
            label: 'Insira sua senha',
            type: 'password',
            error: 'Senha é obrigatória',
            hasError: false,
            value: password,
            onChange: setPassword,
          },
        ]}
        submitButtonLabel="Cadastrar"
      />
    </Container>
  );
}
