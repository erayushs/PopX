import InputBox from "./components/InputBox";
import Button from "./components/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CreateAccount = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [isAgency, setIsAgency] = useState<string>("");

  const isValidEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const isValidPhoneNumber = (phone: string): boolean => {
    const regex = /^\d{10}$/; // Simple check for a 10-digit phone number
    return regex.test(phone);
  };

  const isFormValid: boolean =
    fullName.trim() !== "" &&
    isValidPhoneNumber(phoneNumber) &&
    isValidEmail(email) &&
    password.trim() !== "" &&
    companyName.trim() !== "" &&
    isAgency !== "";

  const handleCreateAccount = () => {
    if (isFormValid) {
      console.log("Creating account with:", {
        fullName,
        phoneNumber,
        email,
        password,
        companyName,
        isAgency,
      });
      navigate("/account-settings");
    } else {
      console.error("Form is incomplete or invalid");
    }
  };

  return (
    <div className="flex flex-col p-[20px] pt-8 h-full justify-between">
      <div>
        <h1 className="text-[28px] font-medium">
          Create your <br /> PopX account
        </h1>
        <InputBox
          placeholder="Enter full name"
          label="Full Name"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <InputBox
          placeholder="Enter Phone Number"
          label="Phone number"
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
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
        <InputBox
          placeholder="Enter Company Name"
          label="Company Name"
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <p className="mt-4">
          Are you an agency?<span className="text-red-500">*</span>
        </p>
        <div className="flex items-center mt-2 gap-6">
          <div>
            <input
              type="radio"
              id="agencyYes"
              name="agency"
              value="Yes"
              className="mr-2 w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
              onChange={(e) => setIsAgency(e.target.value)}
            />
            <label htmlFor="agencyYes" className="text-[16px] cursor-pointer">
              Yes
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="agencyNo"
              name="agency"
              value="No"
              className="mr-2 h-4 w-4"
              onChange={(e) => setIsAgency(e.target.value)}
            />
            <label htmlFor="agencyNo" className="text-[16px] cursor-pointer">
              No
            </label>
          </div>
        </div>
      </div>

      <Button
        text="Create Account"
        textColor="text-white"
        disabled={!isFormValid}
        extraClasses="mb-4 bg-[#6C25FF] text-white cursor-pointer"
        onClick={handleCreateAccount}
      />
    </div>
  );
};

export default CreateAccount;
