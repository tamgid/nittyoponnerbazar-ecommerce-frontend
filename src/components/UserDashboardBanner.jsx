const UserDashboardBanner = () => {
  return (
    <div>
      <div
        className="hero object-cover h-[230px] "
        style={{
          backgroundImage:
            "url(/banner4.jpeg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl font-bold">Nittyoponner Bazar</h1>
            <p className="mb-5">
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardBanner;
