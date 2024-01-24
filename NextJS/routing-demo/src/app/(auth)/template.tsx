"use client";

import React, { useState } from "react";
import Link from "next/link";
import "./styles.css";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Register",
    href: "/register",
  },
  {
    name: "Login",
    href: "/login",
  },
  {
    name: "Forget Password",
    href: "/forget-password",
  },
];

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [input, setInput] = useState<string>("");
  return (
    <div>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      {navLinks.map((item) => {
        const isActive = pathname.startsWith(item.href);
        return (
          <Link
            className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
            key={item.name}
            href={item.href}
          >
            {item.name}
          </Link>
        );
      })}
      <br />
      {children}
    </div>
  );
};

export default AuthLayout;
