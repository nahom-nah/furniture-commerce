import { HeartIcon } from "@heroicons/react/solid";
import React, { useEffect } from "react";

const NotificationDropdown = () => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    console.log("hey");
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  return (
    <>
      <button
        className="text-blueGray-500 block py-1 px-3  "
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <button className="px-2 py-2 bg-gray-50 rounded-full">
          <HeartIcon className="h-5 text-red-600" />
        </button>
      </button>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-4 list-none text-left rounded shadow-lg mt-1 min-w-48 px-6 overflow-auto  "
        }
        style={{ height: "550px" }}
      >
        <div className="text-gray-900 text-2xl font-bold ">Notification</div>
      </div>
    </>
  );
};

export default NotificationDropdown;
