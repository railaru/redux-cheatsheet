import React from 'react';
import { Provider } from 'react-redux'
import './App.css';
import Posts from './components/Posts'
import PostForm from './components/Postform'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App container">
        <PostForm />
        <hr />
        <Posts />
      </div>
    </Provider>
  );
}

export default App;
