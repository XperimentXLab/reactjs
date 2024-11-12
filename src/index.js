import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom"; 
import About from './components/About';
import Protected, { loader as ProtectedLoader } from './components/Protected';
import NestedProtected, { loader as NestedPLoader } from './components/NestedProtected';
import Layout from './components/Layout';
import Login, { action as LoginAction } from './components/Login';


const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}
      errorElement={<h2>Error</h2>}>
      <Route index element={<App />}/>
      <Route path='about' element={<About />} />
      <Route path='login' element={<Login />} 
        action={LoginAction}
      />

      {/*<Route element={Auth}>*/}
        <Route path='protected' element={<Protected />}
          loader={ProtectedLoader}
        >
          <Route path='nestedprotected' element={<NestedProtected />} 
            loader={NestedPLoader}
          />
        </Route>
      
    </Route>
  ))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

/*
1) Wrap <App> inside <BrowserRouter>
2) <Routes> = main page [example.com]
3) <Route> = sub pages [example.com/blog][example.com/blog/article-1]
    - take 2 props : path, element
4) <Link> = <a> 
    - takes 1 props: to
    - even navigate any link, useState does not change 
*/
