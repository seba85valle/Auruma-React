import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext/useAuthContext";
import { useNavigate, Navigate } from "react-router-dom";
import "./Login.css";

export const Login = () => {
  const [form, setForm] = useState({ name: "", password: "" });
  const { user, login } = useAuthContext();

  const navigate = useNavigate();

  if (user) {
    return <Navigate to="/admin/alta-productos" />;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(form.name, form.password);

    if (success) {
      navigate("/admin/alta-productos");
    } else {
      alert("Credenciales incorrectas");
      setForm({ name: "", password: "" });
    }
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2>Iniciar Sesión</h2>

        <div className="login-field">
          <label htmlFor="login-name">Usuario:</label>
          <input
            id="login-name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <div className="login-field">
          <label htmlFor="login-password">Contraseña:</label>
          <input
            id="login-password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};
