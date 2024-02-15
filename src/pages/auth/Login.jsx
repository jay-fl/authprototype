import React, { useState } from "react";
import { Link } from "react-router-dom";
/** Icons */
import {
  RiMailLine,
  RiLockLine,
  RiEyeLine,
  RiEyeOffLine,
} from "react-icons/ri";
/** Toastify */
import { toast } from "react-toastify";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if([email, password].includes("")) {
        toast.error("🙁 Todos los campos son obligatorios", {
          theme: "dark"
        });
        return;
    }
    if(password.length < 6){
      toast.error("El password debe contener al menos 6 caracteres", {
        theme: "dark"
      });
    }
    console.log("🙁 Toda la funcionalidad del login");
  };

  return (
    <div className="bg-white p-8 rounded-lg w-full md:w-96">
      <div className="mb-10">
        <h1 className="text-3xl uppercase font-bold text-center">
          Iniciar sesión
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-6">
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
            type={showPassword ? 'text' : 'password'}
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
        <div className="text-right ">
          <Link to="olvide-password" className="text-gray-400 hover:text-sky-600 hover:underline transition-colors">¿Olvidaste tu password</Link>
        </div>
        <div>
          <button className="bg-sky-600 text-white w-full py-2 px-6 rounded-lg mt-6 hover:scale-105 transition-all">
            Ingresar
          </button>
        </div>
      </form>
      <div className="text-gray-500 text-center">
         ¿No tienes cuenta?{" "}
         <Link to="/registro" className="text-sky-600 font-medium hover:text-sky-500 transition-colors">
           Registrate
        </Link>
      </div>
    </div>
  );
};

export default Login;
