import {
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
} from "@heroicons/react/solid";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";
export default function Footer() {
  return (
    <div className="px-24 py-2">
      <Image src="/logo.png" alt="logo" width={70} height={40} />
      <div className="flex justify-between py-3">
        <ul className="space-y-2 no-underline">
          <li>{}</li>
          <li className="flex space-x-2">
            <LocationMarkerIcon className="h-5 text-gray-500" />{" "}
            <span className="text-gray-500 font-semibold">Adama,Bole</span>
          </li>
          <li className="flex space-x-2">
            {" "}
            <PhoneIcon className="h-5 text-gray-500" />{" "}
            <span className="text-gray-500 font-semibold">+251942104459</span>
          </li>
          <li className="flex space-x-2">
            {" "}
            <MailIcon className="h-5 text-gray-500" />{" "}
            <span className="text-gray-500 font-semibold">
              nahom.projectmanagement@gmail.com
            </span>
          </li>
        </ul>
        <ul className="space-y-2 no-underline">
          <li className="text-gray-800 font-bold text-lg">Company</li>
          <li className="flex space-x-2">
            <span className="text-gray-500 font-semibold">About</span>
          </li>
          <li className="flex space-x-2">
            {" "}
            <span className="text-gray-500 font-semibold">Career</span>
          </li>
          <li className="flex space-x-2">
            {" "}
            <span className="text-gray-500 font-semibold">Service</span>
          </li>
        </ul>
        <ul className="space-y-2 no-underline">
          <li className="text-gray-800 font-bold text-lg">Other Info</li>
          <li className="flex space-x-2">
            <span className="text-gray-500 font-semibold">
              Terms & Conditions
            </span>
          </li>
          <li className="flex space-x-2">
            {" "}
            <span className="text-gray-500 font-semibold">Privacy Policy</span>
          </li>
          <li className="flex space-x-2">
            {" "}
            <span className="text-gray-500 font-semibold">License</span>
          </li>
        </ul>
        <div className="w-1/4">
          <ul>
            <li>
              <SocialIcon url="https://www.github.com/nahom-nah" />
              <SocialIcon url="https://www.facebook.com/nahom.balcha.3781/"/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
