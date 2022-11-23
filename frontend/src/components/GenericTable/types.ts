interface IGenericTableHeader {
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
}

export interface IGenericTable<T> {
  header: IGenericTableHeader;
  data: Array<T>;
  renderItem: (item: T) => React.ReactNode;
}
