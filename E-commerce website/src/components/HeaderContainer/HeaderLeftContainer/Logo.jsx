import { Logo_url } from "../../constants";

const Logo = () => {
  return (
    <>
      <div className="">
        <img className="w-32" src={Logo_url} alt="Logo" />
      </div>
    </>
  );
};

export default Logo;
