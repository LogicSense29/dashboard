import React from "react";
import { useLogout } from "../../hooks/useLogOut";

export default function Button({ title }) {
  const { logout } = useLogout();

  // function logUserOut() {
  //   logout();
  // }
  return (
    <button className="btn" onClick={logout}>
      {title}
    </button>
  );
}
