import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './components/Redux/Store'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

const Cart = persistStore(store)

ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={Cart}>
      <App />
      </PersistGate>

       

    </BrowserRouter>
</Provider>


)
