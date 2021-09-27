import Image from "next/image";
export default function Register(props) {
  return (
    <div
      className={
        props.hide
          ? "hidden"
          : "block" +
            "h-96 bg-no-repeat bg-cover rounded-lg w-4/5 shadow-2xl bg-center fixed top-20 z-40 left-24 bg-gray-900"
        // "min-h-screen  bg-no-repeat bg-cover bg-gray-900 bg-center"
      }
      style={{
        backgroundImage: "url('/bg-l.jpg')",
      }}
    >
      <div className="flex justify-between">
        <div className=" w-3/12 rounded-lg opacity-70 bg-gray-800 flex justify-center items-center"></div>
        <div className=" w-9/12 bg-gray-100 rounded-lg flex justify-center items-center">
          <div>
            <form>
              <div className="py-6">
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={78}
                  height={50}
                  className="cursor-pointer"
                />
              </div>
              <div>
                <span className="text-sm text-gray-900 font-semibold">
                  Welcome back
                </span>
                <h1 className="text-2xl font-bold">Login to your account</h1>
              </div>
              <div className="mt-5">
                <label className="block text-md mb-2" for="password">
                  Password
                </label>
                <input
                  className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                  type="password"
                  name="password"
                  placeholder="password"
                />
              </div>
              <div className="my-3">
                <label className="block text-md mb-2" for="email">
                  Email
                </label>
                <input
                  className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
                  type="email"
                  name="password"
                  placeholder="email"
                />
              </div>
              <div className="flex justify-between">
                <div>
                  <input
                    className="cursor-pointer"
                    type="radio"
                    name="rememberme"
                  />
                  <span className="text-sm">Remember Me</span>
                </div>
                <span className="text-sm text-blue-700 hover:underline cursor-pointer">
                  Forgot password?
                </span>
              </div>
              <div className="">
                <button className="mt-4 mb-3 w-full bg-custom hover:bg-green-400 text-white py-2 rounded-md transition duration-100">
                  Login now
                </button>
              </div>
            </form>
            <p className="mt-8">
              {" "}
              Dont have an account?{" "}
              <span className="cursor-pointer text-sm text-blue-600">
                {" "}
                Join free today
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
