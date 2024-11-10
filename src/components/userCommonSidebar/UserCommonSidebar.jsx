import logo from '../../assets/logo-home.jpg'
const UserCommonSidebar = () => {
  return (
    <div>
      <div className="md:min-h-screen">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
     
       <div className="absolute -top-60 drawer-content flex flex-col items-start justify-left">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn m-4 drawer-button lg:hidden text-left"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
              className="inline-block w-4 h-4 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
     
        <div className="drawer-side z-[20] ">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <ul className="menu py-8 px-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}

            {/* website name and logo */}
            <li className="text-center py-1 px-2">
              {" "}
              <a href="/" className="btn btn-ghost text-xl">
                <img
                  src={logo}
                  alt=""
                  className="w-10 h-10 rounded-full"
                />
                <span className="text-lg text-[#202124] font-semibold">
                  Nittyoponner<span className="text-[#1967D2] pl-1">Bazar</span>
                </span>
              </a>
            </li>
          
           
          </ul>
        </div>
      </div>
     
    </div>
    </div>
  );
};

export default UserCommonSidebar;
