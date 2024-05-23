import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer-max">
        <p className="text">
          Download our app now{" "}
          <span className="lg:hidden">
            <svg
              width="25"
              height="8"
              viewBox="0 0 25 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.3536 4.35355C24.5488 4.15829 24.5488 3.84171 24.3536 3.64645L21.1716 0.464466C20.9763 0.269204 20.6597 0.269204 20.4645 0.464466C20.2692 0.659728 20.2692 0.976311 20.4645 1.17157L23.2929 4L20.4645 6.82843C20.2692 7.02369 20.2692 7.34027 20.4645 7.53553C20.6597 7.7308 20.9763 7.7308 21.1716 7.53553L24.3536 4.35355ZM0 4.5H24V3.5H0V4.5Z"
                fill="#FFBB00"
              />
            </svg>
          </span>
        </p>
        <div className="lg:shadow rounded-[18px] shadow-lg lg:flex justify-between w-full lg:relative lg:pr-[40px] lg:h-auto h-full ">
          <div className="flex lg:block justify-center">
            <img
              className="max-w"
              src=".../../../../static_assets/Group 1000007102.png"
            />
          </div>
          <div className="lg:pb-[40px] lg:pt-0 pt-[12px] pb-[12px] ">
            <div className="para  lg:block hidden">
              <p className="lg:w-[518px] text-[20px] leading-[28px] font-medium">
                Boost your productivity with the BHIVE Workspace app. Elevate
                your workspace, collaborate efficiently, and unlock exclusive
                perks.
              </p>
            </div>

            <div className="flex-g">
              <img src="../../static_assets/image 1938.png" />
              <img src="../../static_assets/image 1939.png"></img>
            </div>
          </div>
        </div>
      </footer>
      <div className="foot">
        <p className="flex justify-center items-center pt-[12px]">
          © Copyright 2024. Bhive Private Limited
        </p>
      </div>
    </>
  );
}

export default Footer;
