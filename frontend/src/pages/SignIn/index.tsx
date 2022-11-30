import { useState } from 'react';
import { useCookies } from 'react-cookie';
import GenericForm from '../../components/GenericForm';
import api from '../../utils/api';
import { Container } from './styles';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | boolean>(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const {
        data: { token },
      } = await api.post('/authenticate', {
        email,
        password,
      });

      localStorage.setItem('token', JSON.stringify(token));
      api.defaults.headers.Authorization = `Bearer ${token}`;
    } catch (err: any) {
      // setError(String(err.response.data?.error));

      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <GenericForm
        // eslint-disable-next-line react/jsx-no-bind
        handleSubmit={handleSubmit}
        fields={[
          {
            label: 'Nome',
            type: 'text',
            hasError: false,
            error: 'Nome é obrigatório',
            value: email,
            onChange: setEmail,
          },
          {
            label: 'Senha',
            type: 'password',
            hasError: false,
            error: 'Senha é obrigatório',
            value: password,
            onChange: setPassword,
          },
        ]}
        submitButtonLabel="Entrar!"
        header={{
          title: 'Plantae',
          subtitle: 'Insira as informações e acesse a plataforma',
        }}
        isLoading={isLoading}
        errorMessage={error}
        suggestionPage={{
          link: '/sign-up',
          label: 'Não possui cadastro ? Crie a sua conta agora mesmo',
        }}
      />
    </Container>
  );
}
