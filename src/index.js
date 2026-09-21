import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import lazySizes from 'lazysizes'
import { configureStore } from '@reduxjs/toolkit'
import reducers from 'store/reducers'
import Root from 'containers/Root'
import 'lazysizes/plugins/attrchange/ls.attrchange'
import '@fullcalendar/react/skeleton.css'
import '@fullcalendar/react/themes/classic/theme.css'
import '@fullcalendar/react/themes/classic/palette.css'
import '../styles/app.global.scss'
import '../styles/tailwind.css'
lazySizes.cfg.lazyClass = 'lazy'

const MOUNT_NODE = document.getElementById('root')
const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
})
const root = ReactDOMClient.createRoot(MOUNT_NODE)
root.render(<Root store={store} />)
