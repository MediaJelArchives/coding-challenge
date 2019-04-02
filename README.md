# Installation

In both root and server folders:

```
yarn
```

# Configuration

Change your actual Ip in:

```
/graphqlconfig.yml

projects:
  database:
    schemaPath: src/generated/prisma.graphql
    extensions:
      endpoints: 
        dev: "http://${YOUR_IP}:4466/"
      prisma: database/prisma.yml

```


```
/prisma.yml

endpoint: http://{YOUR_IP}:4466

```


```
/index.js --> /server

const fetch = createApolloFetch({
  uri: 'http:/{YOUR_IP}:4466',
});

```

```
/index.js --> /src/components/App

const client = new ApolloClient({
  uri: "http://{YOUR_IP}:4466",
  clientState: {
    defaults: initialState,
    resolvers,
  },
});

```


# Run

In root folder:

```
docker-compose up -d
```

```
prisma deploy
```

```
yarn start
```

In /server folder:

```
 node index
```
