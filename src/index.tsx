import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter, Link, Outlet } from 'react-router-dom';
import { Register } from './page/register/Register';
import { Login } from './page/login/Login';
import { UpdatePassword } from './page/update_password/UpdatePassword';
import { ErrorPage } from './page/error/ErrorPage';
import { Index } from './page/index/index';
import { UpdateInfo } from './page/update_info/UpdateInfo';
import { ModifyMenu } from './page/ModifyMenu/ModifyMenu';
import { InfoModify } from './page/InfoModify/InfoModify';
import { PasswordModify } from './page/PasswordModify/PasswordModify';

const routes = [
  {
    path: "/",
    element: <Index></Index>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'update_info',
        element: <UpdateInfo/>
      },
      {
        path: "/user",
        element: <ModifyMenu></ModifyMenu>,
        children: [
          {
            path: 'info_modify',
            element: <InfoModify/>
          },
          {
            path: 'password_modify',
            element: <PasswordModify/>
          },
        ]
    },
    
    ]
},
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "update_password",
    element: <UpdatePassword />,
  }
];
export const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<RouterProvider router={router}/>);

