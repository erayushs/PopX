import { useState } from "react";
import Button from "./components/Button";
import InputBox from "./components/InputBox";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const isValidEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const isFormValid: boolean = isValidEmail(email) && password.trim() !== "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // 🚀 prevent page reload

    if (isFormValid) {
      console.log("Logging in with:", { email, password });
      navigate("/account-settings");
    } else {
      console.error("Form is invalid");
    }
  };

  return (
    <div className="flex flex-col p-[20px] pt-8 h-full">
      <h1 className="text-[28px] font-medium">
        Signin to your <br /> PopX account
      </h1>
      <p className="text-[18px] mt-2 text-[#1D2226] opacity-[0.6]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      {/* ✅ use onSubmit instead of action */}
      <form onSubmit={handleSubmit}>
        <InputBox
          placeholder="Enter email address"
          label="Email Address"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <InputBox
          placeholder="Enter password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button
          text="Login"
          textColor="text-white"
          disabled={!isFormValid}
          extraClasses={`mt-4 ${
            isFormValid
              ? "bg-[#6C25FF] text-white cursor-pointer"
              : "bg-[#CBCBCB] cursor-not-allowed"
          }`}
        />
      </form>
    </div>
  );
};

export default SignIn;
