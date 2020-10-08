import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Apollo
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createUploadLink } from 'apollo-upload-client';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

import App from './App';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
const link = createUploadLink({ uri: '/graphql' });

store.subscribe(() => console.log(store.getState()))

const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });

ReactDOM.render(
    <ApolloProvider client={client}>
        <Provider store={store}>
            <App />
        </Provider>
    </ApolloProvider>,
    document.getElementById('root')
);
