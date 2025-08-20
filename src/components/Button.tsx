interface ButtonProps {
  backgroundColor?: string;
  textColor?: string;
  text?: string;
  hover?: string;
  extraClasses?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({
  backgroundColor,
  textColor,
  text,
  hover,
  extraClasses,
  onClick,
}: ButtonProps) => {
  return (
    <button
      disabled={!Boolean(text)}
      type="submit"
      onClick={onClick}
      className={`${backgroundColor} ${textColor} py-2 px-4 rounded-md w-full transition-colors duration-300 cursor-pointer ${hover} ${extraClasses}`}
    >
      {text}
    </button>
  );
};

export default Button;
