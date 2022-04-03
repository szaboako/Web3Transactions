import React from 'react'
import ReactDOMClient from 'react-dom/client'

import App from './App'
import './index.css'
import { TransactionsProvider } from './context/TransactionContext'

const container = document.getElementById('root')
const root = ReactDOMClient.createRoot(container)

root.render(
    <TransactionsProvider>
        <App />
    </TransactionsProvider>
)