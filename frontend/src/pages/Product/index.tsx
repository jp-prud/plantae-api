import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GenericForm from '../../components/GenericForm';
import api from '../../utils/api';

export default function ProductPage() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | boolean>(false);
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    try {
      await api.post('/product', {
        name,
        description,
        price,
      });

      navigate('/infos');
    } catch (err: any) {
      setError(String(err.response.data?.error));

      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <GenericForm
      // eslint-disable-next-line react/jsx-no-bind
      handleSubmit={handleSubmit}
      fields={[
        {
          label: 'Nome',
          type: 'text',
          hasError: false,
          error: 'Nome é obrigatório',
          value: name,
          onChange: setName,
        },
        {
          label: 'Descrição',
          type: 'text',
          hasError: false,
          error: 'Descrição é obrigatório',
          value: description,
          onChange: setDescription,
        },
        {
          label: 'Preço',
          type: 'number',
          hasError: false,
          error: 'Preço é obrigatório',
          value: price,
          onChange: setPrice,
        },
      ]}
      submitButtonLabel="Cadastrar!"
      header={{
        title: 'Cadastre um novo Produto',
        subtitle: 'Insira as informações do produto',
      }}
      isLoading={isLoading}
      errorMessage={error}
    />
  );
}
