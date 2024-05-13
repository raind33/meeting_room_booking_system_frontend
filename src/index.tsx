import ReactDOM from "react-dom/client";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  Link,
  Outlet,
} from "react-router-dom";
import { Register } from "./page/register/Register";
import { Login } from "./page/login/Login";
import { UpdatePassword } from "./page/update_password/UpdatePassword";
import { ErrorPage } from "./page/error/ErrorPage";
import { Index } from "./page/index/index";
import { UpdateInfo } from "./page/update_info/UpdateInfo";
import { Menu } from './page/menu/Menu';
import { UserManage } from './page/userManage/UserManage';
import { MeetingRoomManage} from './page/meetingRoomManage/MeetingRoomManage';
import { BookingManage } from './page/bookingManage/BookingManage';
import { Statistics } from './page/statistics/Statistics';
import { MeetingRoomList } from './page/meeting_room_list/MeetingRoomList';
import { BookingHistory } from './page/booking_history/BookingHistory';
import { CompressionImg } from './page/compressionImg/CompressionImg';

const routes = [
  {
    path: "/",
    element: <Index></Index>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "update_info",
        element: <UpdateInfo />,
      },
      {
        path: "/",
        element: <Menu></Menu>,
        children: [
          {
            path: '/',
            element: <MeetingRoomManage/>
        },
          {
            path: 'user_manage',
            element: <UserManage/>
          },
          {
            path: 'meeting_room_manage',
            element: <MeetingRoomManage/>
        },
        {
            path: 'booking_manage',
            element: <BookingManage/>
        },
        {
            path: 'statistics',
            element: <Statistics/>
        },
        {
          path: 'meeting_room_list',
          element: <MeetingRoomList/>
        },
        {
          path: 'booking_history',
          element: <BookingHistory/>
        }
        ]
      }
    ],
  },
  {
    path: "compression",
    element: <CompressionImg/>
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
  },
];
const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<RouterProvider router={router} />);
