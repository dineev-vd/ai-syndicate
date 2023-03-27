import { Link, Outlet, useLocation } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { logout } from "../auth/authSlice";
import { useAuth } from "../auth/useAuth";
import { appNavigation } from "../navigation";

export const Admin = () => {
  const { user } = useAuth();
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const lastPathComponent = pathname.substring(pathname.lastIndexOf("/") + 1);
  const header =
    lastPathComponent.length > 0
      ? lastPathComponent[0].toUpperCase() + lastPathComponent.substring(1)
      : lastPathComponent;

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 5fr",
        gridTemplateRows: "100px auto",
      }}
    >
      <div
        style={{
          backgroundColor: "yellow",
          gridRow: "1 / 3",
          height: "100vh",
        }}
      >
        <nav>
          {appNavigation[0].children?.map((nav) => (
            <div style={{ display: "block" }}>
              <Link to={nav.path ?? "/"}>
                <img src="https://picsum.photos/32/32"></img>
                {nav.header}
              </Link>
            </div>
          ))}
        </nav>
      </div>
      <div
        style={{
          backgroundColor: "red",
          position: "sticky",
          top: 0,
        }}
      >
        {header}
        {user?.email}
        <button onClick={handleLogout}>Log Out</button>
      </div>
      <div style={{}}>
        <Outlet />
      </div>
    </div>
  );
};
