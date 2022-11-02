
# Plantae API

## Stack utilizada

**Back-end:** Node, Express, Postgress.

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/jp-prud/plantae-api.git
```

Entre no diretório do projeto

```bash
  cd plantae-api
```

Instale e Rode os schemas do BD - Schema dentro do repositório
```bash
docker run --name pg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres

docker exec -it pg bash

psql -U root root
```

Instale as dependências

```bash
  yarn start
```

Importar as requisições para o Postman de dentro do repositório - Arquivo: API-Plantae

Para acessar a documentação é só adicionar `/api-docs` na url do localhost.

## Autores

- [@jpprud_](https://github.com/jp-prud/)

