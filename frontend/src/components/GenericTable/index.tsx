import { Table, TableHeader, TableMain, Separator, AddButton } from './styles';
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

        <AddButton>
          <a href={header.buttonLink}>{header.buttonLabel}</a>
        </AddButton>
      </TableHeader>

      <TableMain>
        {data.map(item => (
          <>
            {renderItem(item)}
            {data.length > 1 && <Separator />}
          </>
        ))}
      </TableMain>
    </Table>
  );
}

export default GenericTable;
