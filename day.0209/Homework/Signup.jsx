import { useState } from "react";
import { useAuth } from "../context/auth.context";

export default function Signup() {
  const { signup } = useAuth();
  const [form, setForm] = useState({ fullname: "", email: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="fullname" placeholder="Fullname" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} />
      <button type="submit">Sign Up</button>
    </form>
  );
}
