import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, login } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="flex h-screen">
      <div className="w-96 m-auto">
        <h2 className="flex justify-center underline">Log In</h2>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label>
            <span>Email:</span>
            <input
              className=" min-w-full"
              required
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
          <label>
            <span>Password:</span>
            <input
              className=" min-w-full"
              required
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </label>
          <button>Log In</button>
          {error && <p>{error}</p>}
        </form>
      </div>
    </div>
  );
}
