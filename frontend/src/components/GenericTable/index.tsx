import { Table, TableHeader, TableMain } from './styles';
import { IGenericTable } from './types';

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
function GenericTable<T extends unknown>({
  header,
  data,
  renderItem,
}: IGenericTable<T>) {
  return (
    <Table>
      <TableHeader>
        <div>
          <h1>{header.title}</h1>
          <p>{header.subtitle}</p>
        </div>

        <a href="/new-product">{header.buttonLabel}</a>
      </TableHeader>

      <TableMain>{data.map(item => renderItem(item))}</TableMain>
    </Table>
  );
}

export default GenericTable;
