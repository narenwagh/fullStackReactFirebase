import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import Toggle from "../themeComponents/ThemeToggle";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className="flex justify-between items-center">
      <h1>My List</h1>
      <ul className="flex justify-between items-center">
        {!user && (
          <div className="flex justify-between items-center">
            <li>
              <Link to="/login">Log In</Link>
            </li>
            <li className=" ml-4">
              <Link to="/signup">Sign Up</Link>
            </li>
            <li className="ml-2">
              <Toggle />
            </li>
          </div>
        )}
        {user && (
          <div className="flex justify-between items-center">
            <li onClick={logout}>
              <button>Log Out</button>
            </li>
            <li className="ml-2">
              <Toggle />
            </li>
          </div>
        )}
      </ul>
    </nav>
  );
}
