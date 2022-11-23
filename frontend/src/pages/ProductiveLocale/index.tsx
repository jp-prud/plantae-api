import GenericForm from '../../components/GenericForm';

export default function ProductiveLocale() {
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
          label: 'Endereço',
          type: 'text',
          hasError: false,
          error: 'Endereço é obrigatório',
          value: '',
          onChange: () => alert(''),
        },
        {
          label: 'ID do Selo de Qualidade',
          type: 'text',
          hasError: false,
          error: 'ID do Selo de Qualidade é obrigatório',
          value: '',
          onChange: () => alert(''),
        },
      ]}
      submitButtonLabel="Cadastrar!"
      header={{
        title: 'Cadastre um novo Selo Produtivo',
        subtitle: 'Insira as informações do Selo Produtivo',
      }}
    />
  );
}
