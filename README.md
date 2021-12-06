# Eatit-api

## Project setup

## Enviromental Variables

```
PORT=""
DB_CONN_STRING=""
DB_NAME=""
DB_COLLECTION_NAME=""
```


### Using Docker

```bash
# clone repo
git clone https://github.com/Eyoatam/Eatit-api.git

# build image
docker build -t eatit-api .

# create and start the container
docker compose up
```

### Or

```bash
# clone repo
git clone https://github.com/Eyoatam/Eatit-api.git

# install dependencies
yarn

# start dev server
yarn dev

# compile ts 
yarn build 

# build and start the server
yarn start

```