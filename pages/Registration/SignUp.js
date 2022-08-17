import Link from "next/link";
import { MdMail } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { MdOutlineSmartphone } from "react-icons/md";
import { MdArrowDropDown } from "react-icons/md";

import Dropdown from "../../components/Dropdown";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Router from "next/dist/server/router";

export default function FirstPost() {
  const roles = [
    { designation: "Owner" },
    { designation: "Manager" },
    { designation: "Developer" },
  ];
  const emptyValues = {
    name: "",
    phone: "",
    email: "",
    role: roles[0],
    password: "",
    confirmPass: "",
  };

  const getLocalStorage = () => {
    const ISSERVER = typeof window === "undefined";
    // console.log(1);
    if (!ISSERVER) {
      // console.log(2);
      let list = JSON.parse(localStorage.getItem("list"));
      console.log(list);
      if (list) {
        // console.log(3);
        return JSON.parse(localStorage.getItem("list"));
      } else {
        // console.log(4);
        return [];
      }
    } else {
      // console.log(5);
      return [];
    }
  };
  const [values, setValues] = useState(emptyValues);
  const [list, setList] = useState(getLocalStorage());
  const [togglepage, setTogglePage] = useState(false);
  const router = useRouter();
  const handleChange = (target, value) => {
    // console.log(target, value);
    setValues((ps) => ({
      ...ps,
      [target]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.password !== values.confirmPass) {
      alert("Passwords do not match");
    } else {
      let counter = 0;
      list.forEach((user) => {
        if (user.email == values.email && user.password == values.password) {
          counter += 1;
        }
      });
      if (counter) {
        alert("User already exists. Go back to Login");
      } else {
        const newItem = values;
        setList([...list, newItem]);
        setTogglePage(true);
        alert("Registration Successful");
        setTimeout(() => {
          router.push("/");
        }, 5000);
      }
    }
  };
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  // console.log(holder);

  return (
    <div className="w-full min-h-full bg-[url(./pilati.png)] absolute bg-fill">
      <div className="w-full min-h-full font-DMSans ">
        <div className="bg-mainbg w-10/12 h-4/5 mx-auto my-6 mt-8 px-10 py-5 rounded-3xl max-w-md">
          <h1 className="text-center text-4xl font-bold text-white mb-10">
            Sign Up
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col w-full relative">
              <input
                type="text"
                placeholder="Name*"
                className="inputField"
                value={values.name}
                required
                onChange={(e) => handleChange("name", e.target.value)}
              />
              <BsFillPersonFill className="absolute right-[5%] fill-inputCol top-[3%]  text-2xl" />
              <input
                type="text"
                placeholder="Phone Number"
                className="inputField"
                value={values.phone}
                minLength="10"
                maxLength="10"
                onChange={(e) => handleChange("phone", e.target.value)}
              />
              <MdOutlineSmartphone className="absolute right-[5%] fill-inputCol top-[18%] text-2xl" />
              <input
                type="Email"
                placeholder="Email*"
                required
                value={values.email}
                className="inputField"
                onChange={(e) => handleChange("email", e.target.value)}
              />
              <MdMail className="absolute right-[5%] fill-inputCol top-[32%] text-2xl " />
              <input
                type="Password"
                placeholder="Create Password*"
                className="inputField"
                required
                value={values.password}
                minLength="6"
                onChange={(e) => handleChange("password", e.target.value)}
              />
              <FaKey className="absolute right-[5%] fill-inputCol top-[47%] text-2xl" />
              <input
                type="Password"
                placeholder="Re-enter Password*"
                className="inputField"
                required
                minLength="6"
                value={values.confirmPass}
                onChange={(e) => handleChange("confirmPass", e.target.value)}
              />
              <FaKey className="absolute right-[5%] fill-inputCol top-[62%] text-2xl" />
              <Dropdown
                options={roles}
                selected={values.role}
                onChange={handleChange}
                required
                target="role"
              />

              {!togglepage ? (
                <button className="px-[63px] py-[10px] bg-inputCol mx-auto rounded-xl text-2xl font-bold text-white mb-3 tracking-widest">
                  Next
                </button>
              ) : (
                <p className="text-inputCol font-DMSans text-center my-5 underline font-bold">
                  Redirecting you back to Login in 5s..
                </p>
              )}
            </div>
          </form>
          {/* <div className="border border-inputCol mx-auto w-8/12 mb-6"></div> */}
          <div className="text-center">
            <h2 className="text-[15px] font-bold text-white tracking-widest">
              Already have an account?
            </h2>
            <h2 className="text-[15px] font-bold text-inputCol inline-block tracking-widest">
              <Link href="/">LogIn</Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
