import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import First from './pages/First'
import SignIn from './pages/Account/SignIn'
import SignUp from './pages/Account/SignUp'
import ForgotPassword from './pages/Account/ForgotPassword'
import ChangePassword from './pages/Account/ChangePassword'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EditProfile from './pages/Account/EditProfile'
import { Provider } from 'react-redux'
import store from './store'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
const root = ReactDOM.createRoot(document.getElementById('root'))
let persistor = persistStore(store)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<First />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/forgotpassword' element={<ForgotPassword />} />
            <Route path='/changepassword' element={<ChangePassword />} />
            <Route path='/editprofile' element={<EditProfile />} />
            <Route path='/app' element={<App />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
