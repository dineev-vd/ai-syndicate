import React from "react";
import { useAppSelector } from "../../app/hooks";
import { useLoginMutation } from "./authAPI";
import { selectUser } from "./authSlice";
import { useAuth } from "./useAuth";

export const Auth = () => {
  const { user } = useAuth();
  const [login] = useLoginMutation();
  const handleLogin = () => {
    login({
      email: "lol",
      password: "wut",
    });
  };
  return (
    <div>
      {user && <p>welcome to the club {user?.email}</p>}
      <button onClick={handleLogin}>LogIn</button>
    </div>
  );
};
