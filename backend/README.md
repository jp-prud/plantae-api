
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

Baixe o Docker e instale através deste link

```bash
https://docs.docker.com/desktop/install/windows-install/
```

Instale e Rode os schemas do BD - Schema dentro do repositório
```bash
docker run --name pg -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres
```

Após estes comandos, siga o processo abaixo para criar o Banco de Dados
```
docker exec -it pg bash

psql -U root root

CREATE DATABASE plantae;
```

Rode as criações de tabela presente dentro do arquivo de `Schema.sql` prasente dentro da pasta chamada `database`.

Instale as dependências e inicie o projeto.

```bash
  yarn start
```

Importar as requisições para o Postman de dentro do repositório - Arquivo: API-Plantae

Para acessar a documentação é só adicionar `/api-docs` na url do localhost.

## Autores

- [@jpprud_](https://github.com/jp-prud/)

