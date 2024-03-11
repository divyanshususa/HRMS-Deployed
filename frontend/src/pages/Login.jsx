import { useCallback } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

  //   const onIForgotMy1Click = useCallback(() => {
  //     navigate("/forget-password");
  //   }, [navigate]);

  return (
    <>
      <div className="w-full container mx-auto">
        <div className="grid md:grid-cols-2 items-center  grid-cols-1 mt-[5rem] ">
          <div className="p-5 ml-10">

            <div className=" flex gap-[15rem]">
              <div className="  flex flex-col items-center justify-start gap-[4px_0px]">
                <img
                  className="w-[35.5px] relative h-[35.5px]"
                  alt=""
                  src="/group-13.svg"
                />
                <div className="">
                  <p className="m-0">
                    <b className="[background:linear-gradient(135deg,_#14add5,_#384295)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      Susakgjyo
                    </b>
                  </p>
                  <p className="m-0">ERP System</p>
                </div>
              </div>

              <button className="border-[1px] h-[40px] rounded-3xs p-3 border-solid border-relia-energy-gradient  text-transparent !bg-clip-text [background:linear-gradient(135deg,_#14add5,_#384295)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"
              onClick={()=>navigate('/signup')}
              >
                Sign Up
              </button>


            </div>

            <div className="self-stretch flex flex-col items-start justify-center mt-12">
              <div className="">Welcome back!!</div>
              <div className="relative text-9xl font-extrabold text-relia-energy-black">
                Please Sign In
              </div>
            </div>


            <div>
              <div className="mt-3 flex flex-col items-start justify-start gap-[8px_0px]">
                <div className="">
                  Email address
                </div>

                <input
                  type="text"
                  className="w-[50%] mt-2 h-12 px-4 border border-gray-300 rounded focus:outline-none focus:border-relia-energy-primary-color"
                />

              </div>

              <div className="mt-3 flex flex-col items-start justify-start gap-[8px_0px]">
                <div className="">Password </div>
                <input
                  type="password"
                  className="w-[50%] mt-2 h-12 px-4 border border-gray-300 rounded focus:outline-none focus:border-relia-energy-primary-color"
                />
              </div>

              <div className=" mt-3 flex flex-row items-start justify-start gap-[0px_76px] text-grey-70">
                <div className="flex flex-row items-center justify-start gap-[0px_4px]">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    className="w-4 h-4 text-relia-energy-primary-color"
                  />
                  <div className="relative leading-[24px]">Remember me</div>
                </div>

                <NavLink to='/forget-password'>
                  <div
                    className="relative leading-[24px] text-transparent !bg-clip-text [background:linear-gradient(135deg,_#14add5,_#384295)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] cursor-pointer"
                  // onClick={onIForgotMy1Click}
                  >
                    I forgot my password
                  </div>
                </NavLink>
              </div>

              <button className="w-[50%] mt-4 rounded-3xs [background:linear-gradient(135deg,_#14add5,_#384295)] h-[50px] flex flex-row items-center justify-center p-2.5 box-border text-white">
                <div className="relative leading-[24px]">Sign In</div>
              </button>

            </div>


          </div>
          {/* image div  */}
          <div className="col-span-1">
            <img
              className=" hidden w-[80%] rounded-sm   object-cover md:block "
              alt=""
              src="/images/loginimg.png"
            />
          </div>
        </div>

      </div>



    </>

  );
};

export default Login;

