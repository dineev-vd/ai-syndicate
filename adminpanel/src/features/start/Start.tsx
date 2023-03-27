import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { Admin } from "../admin/Admin";
import { Auth } from "../auth/Auth";
import { logout } from "../auth/authSlice";
import { useAuth } from "../auth/useAuth";
import { Dashboard } from "../dasboard/Dashboard";

export const Start = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/", { replace: true });
    }
  }, [isLoggedIn]);

  if (isLoggedIn) {
    return <Admin />;
  } else {
    return <Auth />;
  }
};
