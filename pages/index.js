import Link from "next/link";
import Image from "next/image";
import Log from "./Amico.svg";
import { MdMail } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const emptyValues = {
    email: "",
    password: "",
  };
  const [users, setUsers] = useState(emptyValues);
  const [holder, setHolder] = useState([]);
  const router = useRouter();
  let value = [];
  useEffect(() => {
    setHolder(
      JSON.parse(localStorage.getItem("list"))
        ? JSON.parse(localStorage.getItem("list"))
        : []
    );
    // console.log(value);
  }, []);
  const handleChange = (target, value) => {
    setUsers((ps) => ({ ...ps, [target]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(holder, users);
    let value = holder;
    let counter = 0;
    let details = "";
    value.forEach((user) => {
      if (user.email === users.email && user.password === users.password) {
        // console.log("HElllo USer" + user.name);
        counter += 1;
        details = user.name;
      }
    });
    if (counter) {
      alert("Login Successful");
      router.push("/Registration/Beneficiary");
    } else {
      alert("User does not exist. You might want to register first.");
      // router.push("/Registration/SignUp");
    }
  };
  return (
    <div className="w-full min-h-full bg-[url(./pilati.png)] absolute bg-fill">
      <div className="w-full min-h-full font-DMSans">
        <div className="bg-mainbg w-10/12 h-4/5 mx-auto my-10  p-10 rounded-3xl max-w-md ">
          <h1 className="text-center text-4xl font-bold text-white mb-4">
            Login
          </h1>
          <div className="w-56 h-56 mx-auto mb-6">
            <Log />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col w-full relative">
              <input
                type="Email"
                placeholder="email@domain.com*"
                className="text-inputCol inputField"
                required
                onChange={(e) => {
                  handleChange("email", e.target.value);
                }}
                value={users.email}
              />
              <MdMail className="absolute text-2xl fill-inputCol right-[5%] top-[7%]" />
              <input
                type="Password"
                placeholder="Password*"
                required
                className="text-inputCol inputField"
                minLength="6"
                onChange={(e) => {
                  handleChange("password", e.target.value);
                }}
                value={users.password}
              />
              <FaKey className="absolute text-2xl fill-inputCol right-[5%] top-[40%]" />
              <button className="px-[63px] py-[10px] bg-inputCol mx-auto rounded-xl text-2xl font-bold text-white mb-7 tracking-widest">
                Next
              </button>
            </div>
          </form>
          <div className="border border-inputCol mx-auto w-7/12 mb-6"></div>
          <div className="text-center">
            <h2 className="text-[15px] font-bold text-white inline-block mr-2 tracking-widest">
              New Here?
            </h2>
            <h2 className="text-[15px] font-bold text-inputCol inline-block tracking-widest">
              <Link href="/Registration/SignUp">Sign Up</Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
