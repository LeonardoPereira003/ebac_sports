import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Provider do React Redux
import { Provider } from 'react-redux'

// Importa a store
import { store } from './store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Provider deixa a store disponível para toda a aplicação */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
