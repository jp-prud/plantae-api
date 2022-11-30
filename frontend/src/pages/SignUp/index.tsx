import { useState } from 'react';
import GenericForm from '../../components/GenericForm';
import api from '../../utils/api';
import { Container } from './styles';

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | boolean>(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    try {
      await api.post('/register', {
        email,
        password,
      });
    } catch (err: any) {
      setError(String(err.response.data?.error));
    } finally {
      setIsLoading(false);
    }
  }

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
        // eslint-disable-next-line react/jsx-no-bind
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        errorMessage={error}
        suggestionPage={{
          link: '/sign-in',
          label: 'Já possui o cadastro ? Clique aqui e acesse a plataforma.',
        }}
      />
    </Container>
  );
}
