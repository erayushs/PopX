import Button from "./components/Button";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col p-[20px] pb-12 h-full justify-end">
      <h1 className="text-[28px] font-medium">Welcome to PopX</h1>
      <p className="text-[18px] text-[#1D2226] opacity-[0.6]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div className="buttons-div flex flex-col w-full gap-[10px] mt-[20px]">
        <Button
          text="Create Account"
          backgroundColor="bg-[#6C25FF]"
          textColor="text-white"
          hover="hover:bg-[#5a1fdb] transition-colors duration-300"
          onClick={() => navigate("/create-account")}
        />

        <Button
          text="Already Registered? Login"
          backgroundColor="bg-[#6C25FF4B]"
          textColor="text-black"
          onClick={() => navigate("/signin")}
        />
      </div>
    </div>
  );
};

export default HomeScreen;
