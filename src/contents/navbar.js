import { useState } from "react";
import { TiHome } from "react-icons/ti";
import { MdInfo } from "react-icons/md";
import { SiHyperskill } from "react-icons/si";
import { MdWork } from "react-icons/md";
import { RiComputerFill } from "react-icons/ri";
import { PiPhoneCallFill } from "react-icons/pi";
import { IoMenu } from "react-icons/io5";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("#home");
  const [toggle, setToggle] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg">
      <nav className="flex justify-between items-center px-6 md:px-12 py-6 bg-white rounded-b-3xl">
        <div className="flex items-center justify-between w-full md:w-auto">
          <a href="" className="text-3xl font-semibold">
            Sakthivel
          </a>
          <button
            onClick={() => setToggle(!toggle)}
            className="md:hidden text-3xl focus:outline-none"
          >
            <IoMenu />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-10 text-lg">
          {[
            { id: "#home", label: "Home", icon: <TiHome /> },
            { id: "#about", label: "About", icon: <MdInfo /> },
            { id: "#skill", label: "Skills", icon: <SiHyperskill /> },
            { id: "#work", label: "Works", icon: <MdWork /> },
            { id: "#edu", label: "Education", icon: <RiComputerFill /> },
            { id: "#contact", label: "Contact", icon: <PiPhoneCallFill /> },
          ].map((item, i) => (
            <a
              key={i}
              href={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`flex items-center text-2xl gap-2 ${
                activeSection === item.id ? "font-bold text-cyan-500" : "text-gray-600"
              } transition duration-300`}
            >
              {item.icon} {item.label}
            </a>
          ))}
        </div>

        <div
          className={`${
            toggle ? "translate-x-0" : "-translate-x-full"
          } fixed top-20 left-0 w-full bg-black text-white py-8 transition-transform duration-300 ease-in-out md:hidden`}
        >
          <ul className="flex flex-col gap-6 text-xl items-center">
            {[
              { id: "#home", label: "Home", icon: <TiHome /> },
              { id: "#about", label: "About", icon: <MdInfo /> },
              { id: "#skill", label: "Skills", icon: <SiHyperskill /> },
              { id: "#work", label: "Works", icon: <MdWork /> },
              { id: "#edu", label: "Education", icon: <RiComputerFill /> },
              { id: "#contact", label: "Contact", icon: <PiPhoneCallFill /> },
            ].map((item, i) => (
              <li key={i}>
                <a
                  href={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setToggle(false); 
                  }}
                  className="flex items-center gap-2 transition duration-300 hover:text-cyan-400"
                >
                  {item.icon} {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

