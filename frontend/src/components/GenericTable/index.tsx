import { Table, TableHeader } from './styles';
import { IGenericTable } from './types';

export default function GenericTable({ header }: IGenericTable) {
  return (
    <Table>
      <TableHeader>
        <h1>{header.title}</h1>
        <p>{header.subtitle}</p>
      </TableHeader>
    </Table>
  );
}
