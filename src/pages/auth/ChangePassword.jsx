import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
/** Icons */
import {
  RiMailLine,
  RiLockLine,
  RiEyeLine,
  RiEyeOffLine,
} from "react-icons/ri";
/** Toastify */
import { toast } from "react-toastify";

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const { token } = useParams();

  //Funcionalidad para validar token
  if (token !== "123456789") {
    navigate("/");
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([password, confirmPassword].includes("")) {
      toast.error("🙁 Todos los campos son obligatorios", {
        theme: "dark",
      });
      return;
    }
    if (password.length < 6) {
      toast.error("El password debe contener al menos 6 caracteres", {
        theme: "dark",
      });
      return;
    }

    if(password !== confirmPassword) {
      toast.error("Las contraseñas no coinciden", {
        theme: "dark",
      });
      return;
    }

    toast.success("Tu contraseña se cambio correctamente", {
      theme: "dark"
    });

  };

  return (
    <div className="bg-white p-8 rounded-lg w-full md:w-96">
      <div className="mb-10">
        <h1 className="text-3xl uppercase font-bold text-center">
          Actualizar contraseña
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-6">
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
            Restablecer contraseña
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
