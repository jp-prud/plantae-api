import GenericTable from '../../components/GenericTable';

export default function HarvestPage() {
  return (
    <GenericTable
      header={{
        title: 'Colheitas',
        subtitle: 'Conheça os colheitas realizadas',
        buttonLabel: 'Adicionar um novo Colheita',
      }}
      data={[
        { id: '1', name: 'Colheita 1' },
        { id: '2', name: 'Colheita 2' },
      ]}
      renderItem={({ name }) => <div>{name}</div>}
    />
  );
}
