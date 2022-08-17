import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
export default function Beneficiary() {
  const [inputField, setInputField] = useState([{ MembersName: "" }]);
  const [loadHolder, setLoadholder] = useState([]);
  const [toggle, setToggle] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoadholder(inputField);
    setToggle(true);
    setInputField([{ MembersName: "" }]);
  };
  const addInput = () => {
    setInputField([...inputField, { MembersName: "" }]);
  };
  const handleInputChange = (index, event) => {
    let values = [...inputField];
    values[index][event.target.name] = event.target.value;
    setInputField(values);
  };
  return (
    <div className="w-full min-h-full bg-[url(./pilati.png)] absolute bg-fill">
      <div className="w-full min-h-full font-DMSans">
        <div className="bg-mainbg w-10/12 h-4/5 mx-auto my-10 p-10 rounded-3xl max-w-md ">
          <h1 className="text-center text-4xl font-bold text-white mb-10">
            Beneficiary form
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col w-full relative">
              {inputField.map((inp, index) => (
                <div className="w-full flex flex-col" key={index}>
                  <input
                    name="MembersName"
                    type="text"
                    className="text-inputCol inputField"
                    placeholder="Add a member"
                    value={inp.MembersName}
                    onChange={(event) => handleInputChange(index, event)}
                  />
                </div>
              ))}
              <button
                type="button"
                className="px-9 py-[10px] bg-inputCol mx-auto rounded-xl text-2xl font-bold text-white mb-7 tracking-widest"
                onClick={addInput}
              >
                <AiOutlinePlus />
              </button>
              <button className="px-9 py-[10px] bg-inputCol mx-auto rounded-xl text-2xl font-bold text-white mb-7 tracking-widest">
                Submit
              </button>
            </div>
          </form>
          {toggle && (
            <div className="text-black w-full h-full">
              <ol className="flex flex-col items-center justify-center list-decimal">
                {loadHolder.map((val, index) => {
                  return (
                    <li key={index} className="text-2xl text-white p-2">
                      {val.MembersName ? val.MembersName : `""`}
                    </li>
                  );
                })}
              </ol>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
