import React, { useState } from "react";
import { Link } from "react-router-dom";
/** Icons */
import {
  RiMailLine,
  RiLockLine,
  RiEyeLine,
  RiEyeOffLine,
  RiUserLine,
} from "react-icons/ri";
/** Toastify */
import { toast } from "react-toastify";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([name, lastName, email, password, confirmPassword].includes("")) {
      toast.error("🙁 Todos los campos son obligatorios", {
        theme: "dark",
      });
      return;
    }
    if (password.length < 6) {
      toast.error("El password debe contener al menos 6 caracteres", {
        theme: "dark",
      });
      return
    }

    if (password !== confirmPassword) {
      toast.error("Las contraseñas no coinciden", {
        theme: "dark",
      });
      return;
    }

    //Validar que el email exista en la base de datos

    //Enviar email de verificacion
    console.log("🙁 Toda la funcionalidad de registro");
  };

  return (
    <div className="bg-white p-8 rounded-lg w-full md:w-[500px]">
      <div className="mb-10">
        <h1 className="text-3xl uppercase font-bold text-center">
          Registrarse
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-6">
        <div className="relative">
          <RiUserLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 " />
          <input
            type="text"
            className="w-full border border-gray-200 outline-none py-2 px-8 rounded-lg"
            placeholder="Nombre(s)"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="relative">
          <RiUserLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 " />
          <input
            type="text"
            className="w-full border border-gray-200 outline-none py-2 px-8 rounded-lg"
            placeholder="Apellido(s)"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="relative">
          <RiMailLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 " />
          <input
            type="email"
            className="w-full border border-gray-200 outline-none py-2 px-8 rounded-lg"
            placeholder="Correo electronico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="relative">
          <RiLockLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 " />
          <input
            type={showPassword ? "text" : "password"}
            className="w-full border border-gray-200 outline-none py-2 px-8 rounded-lg"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {showPassword ? (
            <RiEyeOffLine
              onClick={handleClickShowPassword}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer"
            />
          ) : (
            <RiEyeLine
              onClick={handleClickShowPassword}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer"
            />
          )}
        </div>
        <div className="relative">
          <RiLockLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 " />
          <input
            type={showPassword ? "text" : "password"}
            className="w-full border border-gray-200 outline-none py-2 px-8 rounded-lg"
            placeholder="Confirmar contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {showPassword ? (
            <RiEyeOffLine
              onClick={handleClickShowPassword}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer"
            />
          ) : (
            <RiEyeLine
              onClick={handleClickShowPassword}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer"
            />
          )}
        </div>
        <div>
          <button className="bg-sky-600 text-white w-full py-2 px-6 rounded-lg mt-6 hover:scale-105 transition-all">
            Crear cuenta
          </button>
        </div>
      </form>
      <div className="text-gray-500 flex justify-between">
        <div>
          ¿Ya tienes cuenta?{" "}
          <Link
            to="/"
            className="text-sky-500 font-medium hover:text-sky-600 transition-colors"
          >
            Ingresa
          </Link>
        </div>
        <div className="text-right">
          <Link
            to="/olvide-password"
            className="text-sky-500 font-medium hover:text-sky-600 transition-colors"
          >
            ¿Olvidaste tu password?{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
