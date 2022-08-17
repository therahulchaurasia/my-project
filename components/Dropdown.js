import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
// import { IoMdCheckmark, TbSelector } from "@heroicons/react/solid";
import { IoMdCheckmark } from "react-icons/io";
import { TbSelector } from "react-icons/tb";

export default function Dropdown({ options, selected, onChange, target }) {
  return (
    <div className="w-full h-full mb-6">
      <Listbox value={selected} onChange={(val) => onChange(target, val)}>
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-checking p-4 pr-10 text-left  outline-none border-2 border-checking focus:border-inputCol text-inputCol font-bold">
            <span className="block truncate">{selected.designation}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <TbSelector
                className="absolute right-[100%] text-2xl mr-2"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-checking py-1 text-base border-2 border-checking focus:border-inputCol text-inputCol">
              {options.map((val, index) => (
                <Listbox.Option
                  key={index}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "text-inputCol" : "text-gray-900"
                    }`
                  }
                  value={val}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {val.designation}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
