import { Link } from 'react-router-dom';
import Button from '../Button';
import Spinner from '../Spinner';
import { Container, Header, Form, FormGroup, Input } from './styles';

interface GenericForm {
  fields: {
    label: string;
    type: string;
    error: string;
    hasError: boolean;
    value: string | number;
    onChange: (value: string) => void;
  }[];
  submitButtonLabel: string;
  header: {
    title: string;
    subtitle: string;
  };
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
  errorMessage: string | boolean;
  // eslint-disable-next-line react/require-default-props
  suggestionPage?: {
    link: string;
    label: string;
  };
}

export default function GenericForm({
  header,
  fields,
  submitButtonLabel,
  handleSubmit,
  isLoading,
  errorMessage,
  suggestionPage,
}: GenericForm) {
  return (
    <Container>
      <Header>
        <h1>{header.title}</h1>
        <span>{header.subtitle}</span>
      </Header>

      {!isLoading && (
        <Form onSubmit={e => handleSubmit(e)}>
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
            <Button type="submit">
              <span>{submitButtonLabel}</span>
            </Button>
          </FormGroup>
        </Form>
      )}

      {isLoading && <Spinner size={56} />}

      {errorMessage && <span className="error-message">{errorMessage}</span>}

      {suggestionPage?.link && (
        <Link to={suggestionPage.link}>{suggestionPage.label}</Link>
      )}
    </Container>
  );
}
