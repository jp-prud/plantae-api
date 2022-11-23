import { useState } from 'react';
import GenericForm from '../../components/GenericForm';

export default function ProductPage() {
  const [name, setName] = useState();

  return (
    <GenericForm
      fields={[
        {
          label: 'Nome',
          type: 'text',
          hasError: false,
          error: 'Nome é obrigatório',
          value: '',
          onChange: () => alert(''),
        },
        {
          label: 'Descrição',
          type: 'text',
          hasError: false,
          error: 'Descrição é obrigatório',
          value: '',
          onChange: () => alert(''),
        },
        {
          label: 'Preço',
          type: 'number',
          hasError: false,
          error: 'Preço é obrigatório',
          value: '',
          onChange: () => alert(''),
        },
      ]}
      submitButtonLabel="Cadastrar!"
      header={{
        title: 'Cadastre um novo Produto',
        subtitle: 'Insira as informações do produto',
      }}
    />
  );
}
