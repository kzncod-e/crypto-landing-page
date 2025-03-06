"use client";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !(menuRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="fixed  w-full px-5 xl:px-3 bg-[#04070d] py-6 text-white">
      <nav className="container z-40 flex items-center mx-auto justify-between">
        <div className="flex z-50 items-center space-x-4">
          <div className="h-14">
            <img src="./logo.png" className="h-14 w-14" alt="Logo" />
          </div>
          <ul className="hidden md:flex items-center space-x-10">
            <li>
              <a href="#">Pasar</a>
            </li>
            <li>
              <a href="#">Tentang Kami</a>
            </li>
            <li>
              <a href="#">Kontak Kami</a>
            </li>
          </ul>
        </div>

        {/* Menu untuk layar besar */}
        <div className="hidden md:flex space-x-4">
          <Button className="border-[#f5af19] rounded-4xl px-6 border-[1px]">
            SIGN IN
          </Button>
          <Button className="border-[#f5af19] rounded-4xl px-6 border-[1px]">
            SIGN UP
          </Button>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden gap-3 flex items-center" ref={menuRef}>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Dropdown Menu */}
      {isOpen && (
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-[#04070d] py-4"
          ref={menuRef}>
          <ul className="flex flex-col gap-3 items-center space-y-4">
            <li>
              <a href="#">Pasar</a>
            </li>
            <li>
              <a href="#">Tentang Kami</a>
            </li>
            <li>
              <a href="#">Kontak Kami</a>
            </li>
            <li>
              <Button className="border-[#f5af19] rounded-4xl px-6 border-[1px]">
                SIGN IN
              </Button>
            </li>
            <li>
              <Button className="border-[#f5af19] rounded-4xl px-6 border-[1px]">
                SIGN UP
              </Button>
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
