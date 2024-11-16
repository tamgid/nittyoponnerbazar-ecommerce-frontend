import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
  return (
      <div className="mb-5">
        <Helmet>
        <title>Nittyoponner Bazar|Update Profile</title>
      </Helmet>
        <h1 className="text-center text-3xl font-medium mt-8 mb-5 text-slate-800">
          Update Your Information
        </h1>
        <form className="mx-auto">
          <div className="flex flex-col items-center justify-center ">
            <div className="w-96">
              <label className="label">
                <span className="label-text">Enter Your Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={"Mahfuja Yesmin"}
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="w-96">
              <label className="label">
                <span className="label-text">Enter Your Email</span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={"mahfujasolaiman77@gmail.com"}
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="w-96">
              <label className="label">
                <span className="label-text">Enter Your Phone Number</span>
              </label>
              <input
                type="text"
                name="phoneNumber"
                defaultValue={"01777118790"}
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="w-96 my-5">
              <label className="label">
                <span className="label-text">Enter Your Address</span>
              </label>
              <textarea
                name="address"
                defaultValue={"Middle Rampur, Eidgha, Chittagong."}
                className="textarea textarea-bordered textarea-md w-full "
              ></textarea>
            </div>
            <div className="flex flex-row items-center justify-center mx-auto">
              <button className="btn btn-xs sm:btn-sm md:btn-md bg-teal-500 text-white border-0">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
  );
};

export default UpdateProfile;
