import { useState } from "react";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../zustand/useAuthStore";

export default function LoginPage() {
  const navigate = useNavigate();
  const { loginUser, logoutUser, user } = useAuthStore();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    loginUser(formData);
    navigate("/dashboard");
  };

  return (
    <section className="login-layout">
      <form className="panel login-card" onSubmit={handleSubmit}>
        <h1>Login Page </h1>
        <p className="muted-text">Enter Your Email and Password Here</p>

        <label>
          Name
          <input
            type="text"
            name="name"
            placeholder="Teachers Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="teacher@gmail.com"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </form>
    </section>
  );
}
