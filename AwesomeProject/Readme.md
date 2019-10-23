# Whatsapp Workshop

## If cloning from step3 branch

- npm install
- react-native link

## Now it's time to create our backend with Hasura

[Start by deploying Hasura to heroku or starting from scratch](https://docs.hasura.io/1.0/graphql/manual/deployment/heroku/using-existing-heroku-database.html)

Recreate data structure similar to the one we used for mockMessages and chats with one key difference. Instead of incoming, use userId and compare with existing userId (you can put it in the const)

### Install GraphQL client

[https://www.apollographql.com/docs/react/get-started/](https://www.apollographql.com/docs/react/get-started/)

```
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>My first Apollo app 🚀</h2>
    </div>
  </ApolloProvider>
);

```

- Add data through Hasura console using insert mutations
- Query conversations and chats data in the app






