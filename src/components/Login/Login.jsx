import { useState } from 'react';
import { useAuthContext } from "../../context/AuthContext/useAuthContext";
import { useNavigate, Navigate } from "react-router-dom";

export const Login = () => {
    const [useForm, setUseForm] = useState({name: '', password: ''});
    const {user, login} = useAuthContext();

    const navigate = useNavigate();

    if (user) {
        return <Navigate to="/admin/alta-productos" />;
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUseForm({...useForm, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const success = login(useForm.name, useForm.password);

        if (success) {
            navigate("/admin/alta-productos");
        } else {
            alert("Credenciales incorrectas");
            setUseForm({name: '', password: ''});
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Iniciar Sesión</h2>
            <div>
                <label>Usuario:</label>
                <input type="text" value={useForm.name} onChange={handleChange} name="name" />
            </div>
            <div>
                <label>Contraseña:</label>
                <input type="password" value={useForm.password} onChange={handleChange} name="password" /> 
            </div>
            <button type="submit">Iniciar Sesión</button>
        </form>
    );
};
