import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate(); // Hook điều hướng
  // Xử lý Đăng ký
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Đăng ký thành công! Vui lòng đăng nhập.");
      setIsRegister(false);
    } catch (error) {
      setError(error.message);
    }
  };

  // Xử lý Đăng nhập
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Đăng nhập thành công!");
      navigate("/"); // Điều hướng đến Trang chủ
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="cailon">
      <div className={`konkec content justify-content-center align-items-center d-flex shadow-lg ${isRegister ? "active" : ""}`} id="content">
        {/*------ Đăng Ký ------*/}
        <div className="col-md-6 d-flex justify-content-center">
          <form onSubmit={handleRegister} style={{ display: isRegister ? "block" : "none" }}>
            <div className="header-text mb-4">
              <h1>Create Account</h1>
            </div>
            <div className="input-group mb-3">
              <input
                type="text"
                placeholder="Name"
                className="form-control form-control-lg bg-light fs-6"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="email"
                placeholder="Email"
                className="form-control form-control-lg bg-light fs-6"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="password"
                placeholder="Password"
                className="form-control form-control-lg bg-light fs-6"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-danger">{error}</p>}
            <div className="input-group mb-3 justify-content-center">
              <button type="submit" className="btn border-black text-black w-50 fs-6">
                Register
              </button>
            </div>
          </form>
        </div>

        {/*------ Đăng Nhập ------*/}
        <div className="col-md-6 right-box">
          <form onSubmit={handleLogin} style={{ display: !isRegister ? "block" : "none" }}>
            <div className="header-text mb-4">
              <h1>Sign In</h1>
            </div>
            <div className="input-group mb-3">
              <input
                type="email"
                placeholder="Email"
                className="form-control form-control-lg bg-light fs-6"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-group mb-3">
              <input
                type="password"
                placeholder="Password"
                className="form-control form-control-lg bg-light fs-6"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-danger">{error}</p>}
            <div className="input-group mb-3 justify-content-center">
              <button type="submit" className="btn border-black text-black w-50 fs-6">
                Login
              </button>
            </div>
          </form>

          {/*------ Chuyển Đổi Giao Diện ------*/}
          <div className="switch-content">
            <div className="switch">
              <div className="switch-panel switch-left">
                <h1>Heloo, Again</h1>
                <p>We are happy to see you back</p>
                <button className="hidden btn border-white text-white w-50 fs-6" onClick={() => setIsRegister(false)}>
                  Login
                </button>
              </div>
              <div className="switch-panel switch-right">
                <h1>Welcome</h1>
                <p>Join Our Unique Platform, Explore a New Experience</p>
                <button className="hidden btn border-white text-white w-50 fs-6" onClick={() => setIsRegister(true)}>
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};