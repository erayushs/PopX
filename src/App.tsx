import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AccountSettings from "./AccountSettings";
import CreateAccount from "./CreateAccount";
import HomeScreen from "./HomeScreen";
import SignIn from "./SignIn";

function App() {
  return (
    <Router>
      <div className="flex h-screen w-screen items-center justify-center font-rubik">
        <div className="lg:w-[375px] w-full h-full bg-[#F7F8F9]">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/account-settings" element={<AccountSettings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
