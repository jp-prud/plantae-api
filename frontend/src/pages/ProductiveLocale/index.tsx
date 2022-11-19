import GenericTable from '../../components/GenericTable';

export default function ProductiveLocalePage() {
  return (
    <GenericTable
      header={{
        title: 'Locais Produtivos',
        subtitle: 'Conheça os Locais Produtivos',
        buttonLabel: 'Adicionar um novo Local Produtivo',
      }}
      data={[
        { id: '1', name: 'Local Produtivo 1' },
        { id: '2', name: 'Local Produtivo 2' },
      ]}
      renderItem={({ name }) => <div>{name}</div>}
    />
  );
}
