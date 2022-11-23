import GenericForm from '../../components/GenericForm';

export default function QualitySeal() {
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
          label: 'Image Link',
          type: 'text',
          hasError: false,
          error: 'Imagem é obrigatório',
          value: '',
          onChange: () => alert(''),
        },
      ]}
      submitButtonLabel="Cadastrar!"
      header={{
        title: 'Cadastre um novo Selo de Qualidade',
        subtitle: 'Insira as informações do selo de qualidade',
      }}
    />
  );
}
