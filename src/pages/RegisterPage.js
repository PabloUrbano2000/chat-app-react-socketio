import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../auth/AuthContext";

export const RegisterPage = () => {
  const { register } = useContext(AuthContext);

  const [form, setForm] = useState({
    email: "",
    password: "",
    nombre: "",
  });

  const onChange = ({ target }) => {
    const { name, value } = target || {};

    setForm({
      ...form,
      [name]: value,
    });
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();

    const { email, password, nombre } = form;

    // Llamar el backend
    const msg = await register({ email, password, nombre });
    if (msg) {
      Swal.fire("Error", msg, "error");
    } else {
      Swal.fire("Éxito", "Cuenta registrada exitosamente!", "success");
    }
  };

  const todoOk = () => {
    return form.email.length > 0 &&
      form.password.length >= 8 &&
      form.nombre.length > 0
      ? true
      : false;
  };
  return (
    <form
      className="login100-form validate-form flex-sb flex-w"
      onSubmit={onSubmit}
    >
      <span className="login100-form-title mb-3">Chat - Registro</span>

      <div className="wrap-input100 validate-input mb-3">
        <input
          className="input100"
          type="text"
          name="nombre"
          placeholder="Nombre"
          onChange={onChange}
        />
        <span className="focus-input100"></span>
      </div>

      <div className="wrap-input100 validate-input mb-3">
        <input
          className="input100"
          type="email"
          name="email"
          onChange={onChange}
          placeholder="Email"
        />
        <span className="focus-input100"></span>
      </div>

      <div className="wrap-input100 validate-input mb-3">
        <input
          className="input100"
          type="password"
          name="password"
          onChange={onChange}
          placeholder="Password"
        />
        <span className="focus-input100"></span>
      </div>

      <div className="row mb-3">
        <div className="col text-right">
          <Link to="/auth/login" className="txt1">
            Ya tienes cuenta?
          </Link>
        </div>
      </div>

      <div className="container-login100-form-btn m-t-17">
        <button
          className="login100-form-btn"
          disabled={!todoOk()}
          type="submit"
        >
          Crear cuenta
        </button>
      </div>
    </form>
  );
};
