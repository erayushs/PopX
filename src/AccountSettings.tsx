import profileImage from "./assets/ellipse.png";
import addImage from "./assets/addImage.svg";

const AccountSettings = () => {
  return (
    <div className="flex flex-col pb-12 h-full">
      <h1 className="text-[18px] font-normal bg-white p-4 pt-8">
        Account Settings
      </h1>

      <div className="flex gap-2 p-[18px] pt-6">
        <div className="relative w-[76px] h-[76px]">
          <img src={profileImage} alt="Profile" />
          <img
            src={addImage}
            alt="Add"
            className="absolute bottom-0 right-0 w-[24px] h-[24px] cursor-pointer"
          />
        </div>

        <div className="flex flex-col ml-4">
          <h2 className="text-[15px] font-medium">Marry Doe</h2>
          <p className="text-[14px] text-[#1D2226] opacity-[0.6]">
            Marry@Gmail.Com
          </p>
        </div>
      </div>

      <p className="p-[18px] text-[14px]">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>

      <div className="border-t border-b h-[80%] border-dashed border-[#CBCBCB]"></div>
    </div>
  );
};

export default AccountSettings;
