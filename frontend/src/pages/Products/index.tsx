import GenericTable from '../../components/GenericTable';

export default function ProductsPage() {
  return (
    <GenericTable
      header={{
        title: 'Produtos',
        subtitle: 'Conheça os novos produtos',
        buttonLabel: 'Adicionar um novo Produto',
      }}
      data={[
        { id: '1', name: 'Product 1' },
        { id: '2', name: 'Product 2' },
      ]}
      renderItem={({ name }) => <div>{name}</div>}
    />
  );
}
