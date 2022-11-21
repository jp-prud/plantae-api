import Button from '../Button';
import { Container, Header, Form, FormGroup, Input } from './styles';

interface GenericForm {
  fields: {
    label: string;
    type: string;
    error: string;
    hasError: boolean;
    value: string;
    onChange: (value: string) => void;
  }[];
  submitButtonLabel: string;
  header: {
    title: string;
    subtitle: string;
  };
}

export default function GenericForm({
  header,
  fields,
  submitButtonLabel,
}: GenericForm) {
  return (
    <Container>
      <Header>
        <h1>{header.title}</h1>
        <span>{header.subtitle}</span>
      </Header>

      <Form>
        {fields.map(field => (
          <FormGroup>
            <Input
              placeholder={field.label}
              type={field.type}
              value={field.value}
              onChange={e => field.onChange(e.target.value)}
            />

            {field.hasError && (
              <span className="error-message">{field.error}</span>
            )}
          </FormGroup>
        ))}

        <FormGroup>
          <Button type="submit">{submitButtonLabel}</Button>
        </FormGroup>
      </Form>
    </Container>
  );
}
