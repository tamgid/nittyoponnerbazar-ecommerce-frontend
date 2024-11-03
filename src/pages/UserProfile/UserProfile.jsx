import { Link } from "react-router-dom";

const UserProfile = () => {
  return (
    <div className="flex items-center max-w-6xl mx-auto my-8 px-2">
      <div className="card bg-base-100 w-full shadow-xl border-t-2 border-teal-600">
        <div className="card-body">
          <div className="flex flex-row gap-5 items-left text-left">
            <figure className="px-4">
              <img
                src="/user.png"
                alt="User"
                className="rounded-xl w-16 h-16 md:w-24 md:h-24 text-left"
              />
            </figure>
            <h2 className="card-title">Hi Mahfuja Yesmin!</h2>
          </div>
          <div className="overflow-x-auto my-12">
            <table className="table">
              <tbody>
                {/* row 1 */}
                <tr>
                  <td className="text-slate-800 font-semibold text-lg">
                    Full Name:{" "}
                  </td>
                  <td className="text-neutral-800 text-lg">Mahfuja Yesmin</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <td className="text-slate-800 font-semibold text-lg">
                    Email Address:{" "}
                  </td>
                  <td className="text-neutral-800 text-lg">
                    mahfujasolaiman772gmail.com
                  </td>
                </tr>
                {/* row 3 */}
                <tr>
                  <td className="text-slate-800 font-semibold text-lg">
                    Contact Number:{" "}
                  </td>
                  <td className="text-neutral-800 text-lg">+8801777118790</td>
                </tr>
                {/* row 4 */}
                <tr>
                  <td className="text-slate-800 font-semibold text-lg">
                    Registered At:{" "}
                  </td>
                  <td className="text-neutral-800 text-lg">3 November, 2024</td>
                </tr>
                {/* row 5 */}
                <tr>
                  <td className="text-slate-800 font-semibold text-lg">
                    Address{" "}
                  </td>
                  <td className="text-neutral-800 text-lg max-w-2xl">
                    Holding No-1264, Haji Mohammad Amir Hossain Bhaban, Middle
                    Rampur, Eidgha, Chittagong.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="card-actions">
            <button className="btn btn-xs sm:btn-sm md:btn-md bg-teal-500 text-white border-0">
             <Link to="/update-profile">Update Info</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
