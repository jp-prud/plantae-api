import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GenericForm from '../../components/GenericForm';
import api from '../../utils/api';

export default function ProductiveLocale() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [qualitySeal, setQualitySeal] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | boolean>(false);
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    try {
      await api.post('/quality-seal', {
        name,
        address,
        qualitySeal,
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
          label: 'Endereço',
          type: 'text',
          hasError: false,
          error: 'Endereço é obrigatório',
          value: address,
          onChange: setAddress,
        },
        {
          label: 'ID do Selo de Qualidade',
          type: 'text',
          hasError: false,
          error: 'ID do Selo de Qualidade é obrigatório',
          value: qualitySeal,
          onChange: setQualitySeal,
        },
      ]}
      submitButtonLabel="Cadastrar!"
      header={{
        title: 'Cadastre um novo Local Produtivo',
        subtitle: 'Insira as informações do local produtivo',
      }}
      isLoading={isLoading}
      errorMessage={error}
    />
  );
}
