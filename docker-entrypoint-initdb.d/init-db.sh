#!/bin/bash
set -e

# Espera o PostgreSQL iniciar
echo "Aguardando o PostgreSQL iniciar..."
until pg_isready; do
  sleep 1
done

# Conecta ao banco e cria o schema, caso não exista
echo "Criando schema..."
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE SCHEMA IF NOT EXISTS "$DB_SCHEMA";
    ALTER DATABASE "$POSTGRES_DB" SET search_path TO "$DB_SCHEMA", public;
EOSQL

echo "Schema '$DB_SCHEMA' verificado/criado com sucesso!"