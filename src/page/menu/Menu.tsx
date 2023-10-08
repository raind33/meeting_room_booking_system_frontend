import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Menu as AntdMenu, MenuProps } from "antd";
import "./menu.css";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "会议室管理",
  },
  {
    key: "2",
    label: "预定管理",
  },
  {
    key: "3",
    label: "用户管理",
  },
  {
    key: "4",
    label: "统计",
  },
  {
    key: "5",
    label: "会议室列表",
  },
  {
    key: "6",
    label: "预定历史",
  },
];

export function Menu() {
  const location = useLocation();

  function getSelectedKeys() {
    if (location.pathname === "/user_manage") {
      return ["3"];
    } else if (location.pathname === "/booking_manage") {
      return ["2"];
    } else if (location.pathname === "/meeting_room_manage") {
      return ["1"];
    } else if (location.pathname === "/statistics") {
      return ["4"];
    } else if (location.pathname === "/meeting_room_list") {
      return ["5"];
    } else if (location.pathname === "/booking_history") {
      return ["6"];
    } else {
      return ["1"];
    }
  }

  const navigate = useNavigate();
  const handleMenuItemClick = (info: any) => {
    let path = "";
    switch (info.key) {
      case "1":
        path = "/meeting_room_manage";
        break;
      case "2":
        path = "/booking_manage";
        break;
      case "3":
        path = "/user_manage";
        break;
      case "4":
        path = "/statistics";
        break;
      case "5":
        path = "/meeting_room_list";
        break;
      case "6":
        path = "/booking_history";
        break;
    }
    navigate(path);
  };
  return (
    <div id="menu-container">
      <div className="menu-area">
        <AntdMenu
          defaultSelectedKeys={getSelectedKeys()}
          items={items}
          onClick={handleMenuItemClick}
        />
      </div>
      <div className="content-area">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
