import { useQueries } from '@tanstack/react-query';
import api from '../../utils/api';
import GenericTable from '../../components/GenericTable';

import {
  Wrapper,
  CenteredContainer,
  ProductItem,
  ProductDetails,
  Actions,
} from './styles';
import { Product } from '../../types/Product';
import { ProductiveLocale } from '../../types/ProductiveLocale';
import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';

import EditIcon from '../../assets/images/icons/Edit.svg';
import DeleteIcon from '../../assets/images/icons/Delete.svg';
import { QualitySeal } from '../../types/QualitySeal';

function useQueryData() {
  return useQueries({
    queries: [
      {
        queryKey: ['products'],
        queryFn: async () => {
          const { data } = await api.get('/product');

          return data;
        },
      },
      {
        queryKey: ['productive-locale'],
        queryFn: async () => {
          const { data } = await api.get('/productive-locale');

          return data;
        },
      },
      {
        queryKey: ['quality-seal'],
        queryFn: async () => {
          const { data } = await api.get('/quality-seal');

          return data;
        },
      },
    ],
  });
}

export default function InfoPage() {
  const [productsQuery, productiveLocalesQuery, qualitySealQuery] =
    useQueryData();

  function onRemove(baseUrl: string) {
    api.delete(baseUrl);
    useQueryData();
  }

  function renderContent() {
    return (
      <>
        {(productsQuery.error ||
          productiveLocalesQuery.error ||
          qualitySealQuery.error) && <h1>Erro na Requisição</h1>}

        {!productiveLocalesQuery.error &&
          productiveLocalesQuery.status === 'success' && (
            <GenericTable
              header={{
                title: 'Locais Produtivos',
                subtitle: 'Conheça os novos locais produtivos',
                buttonLabel: 'Adicionar um novo Local Produtivo',
                buttonLink: '/productive-locale',
              }}
              data={productiveLocalesQuery.data}
              renderItem={({
                id,
                name,
                address_info: addressInfo,
                quality_seal_id: qualitySealId,
              }: ProductiveLocale) => (
                <ProductItem key={id}>
                  <ProductDetails>
                    <span>{name}</span>
                    <span>{addressInfo}</span>
                    <span>{qualitySealId}</span>
                  </ProductDetails>

                  <Actions>
                    <a href={`/productive-locale/${id}`}>
                      <img src={EditIcon} alt="Icon" />
                    </a>

                    <button
                      onClick={() => onRemove(`/productive-locale/${id}`)}
                      type="button"
                    >
                      <img src={DeleteIcon} alt="Icon" />
                    </button>
                  </Actions>
                </ProductItem>
              )}
            />
          )}

        {!qualitySealQuery.error && qualitySealQuery.status === 'success' && (
          <GenericTable
            header={{
              title: 'Selos de Qualidade',
              subtitle: 'Conheça os novos selo de qualidade',
              buttonLabel: 'Adicionar um novo Selo de Qualidade',
              buttonLink: '/quality-seal',
            }}
            data={qualitySealQuery.data}
            renderItem={({ id, name, created_at: createdAt }: QualitySeal) => (
              <ProductItem key={id}>
                <ProductDetails>
                  <span>{name}</span>
                  <span>{formatDate(createdAt)}</span>
                </ProductDetails>

                <Actions>
                  <a href={`/quality-seal/${id}`}>
                    <img src={EditIcon} alt="Icon" />
                  </a>

                  <button
                    onClick={() => onRemove(`/quality-seal/${id}`)}
                    type="button"
                  >
                    <img src={DeleteIcon} alt="Icon" />
                  </button>
                </Actions>
              </ProductItem>
            )}
          />
        )}

        {!productsQuery.error && productsQuery.status === 'success' && (
          <GenericTable
            header={{
              title: 'Produtos',
              subtitle: 'Conheça os novos produtos',
              buttonLabel: 'Adicionar um novo Produto',
              buttonLink: '/product',
            }}
            data={productsQuery.data}
            renderItem={({
              id,
              name,
              description,
              price,
              created_at: createdAt,
            }: Product) => (
              <ProductItem key={id}>
                <ProductDetails>
                  <span>{name}</span>
                  <span>{description}</span>
                  <span>{formatCurrency(price)}</span>
                  <span>{formatDate(createdAt)}</span>
                </ProductDetails>

                <Actions>
                  <a href={`/products/${id}`}>
                    <img src={EditIcon} alt="Icon" />
                  </a>

                  <button
                    onClick={() => onRemove(`/product/${id}`)}
                    type="button"
                  >
                    <img src={DeleteIcon} alt="Icon" />
                  </button>
                </Actions>
              </ProductItem>
            )}
          />
        )}
      </>
    );
  }

  function renderLoadingMessage() {
    return <h1>Carregando informações...</h1>;
  }

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {productsQuery.isLoading ||
      productiveLocalesQuery.isLoading ||
      qualitySealQuery.isLoading ? (
        <CenteredContainer>{renderLoadingMessage()}</CenteredContainer>
      ) : (
        <Wrapper>{renderContent()}</Wrapper>
      )}
    </>
  );
}
