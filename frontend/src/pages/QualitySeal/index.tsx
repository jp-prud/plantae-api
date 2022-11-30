import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GenericForm from '../../components/GenericForm';
import api from '../../utils/api';

export default function QualitySeal() {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | boolean>(false);
  const navigate = useNavigate()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    try {
      await api.post('/quality-seal', {
        name,
        image,
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
          label: 'Imagem',
          type: 'text',
          hasError: false,
          error: 'Imagem é obrigatório',
          value: image,
          onChange: setImage,
        },
      ]}
      submitButtonLabel="Cadastrar!"
      header={{
        title: 'Cadastre um novo Selo de Qualidade',
        subtitle: 'Insira as informações do selo de qualidade',
      }}
      isLoading={isLoading}
      errorMessage={error}
    />
  );
}
