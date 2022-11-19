import GenericTable from '../../components/GenericTable';

export default function ConsumerPage() {
  return (
    <GenericTable
      header={{
        title: 'Consumidores',
        subtitle: 'Conheça os consumidores',
        buttonLabel: 'Adicionar um novo Consumidor',
      }}
      data={[
        { id: '1', name: 'Consumidor 1' },
        { id: '2', name: 'Consumidor 2' },
      ]}
      renderItem={({ name }) => <div>{name}</div>}
    />
  );
}
