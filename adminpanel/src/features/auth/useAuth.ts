import { useMemo } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectToken, selectUser } from "./authSlice";

export const useAuth = () => {
  const user = useAppSelector(selectUser);
  const token = useAppSelector(selectToken);
  const isLoggedIn = !!user && !!token;

  return useMemo(() => ({ user, token, isLoggedIn }), [user, token]);
};
