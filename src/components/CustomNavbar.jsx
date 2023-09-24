"use client";

import UserContext from "@/context/userContext";
import { logout } from "@/services/userService";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { toast } from "react-toastify";



const CustomNavbar = () => {
  return (
    <nav className="bg-blue-600 h-16 py-2 px-36 flex justify-between items-center">
      <div className="brand">
        <h1 className="text-2xl font-semibold hover:underline" >
          <a href="/home">Work Manager</a>
        </h1>
      </div>
      <div>
        <ul className="flex space-x-5">
         
           
              <li>
                <Link href={"/"} className="hover:text-blue-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href={"/add-task"} className="hover:text-blue-200">
                  Add Task
                </Link>
              </li>
              <li>
                <Link href={"/show-tasks"} className="hover:text-blue-200">
                  Show Tasks
                </Link>
              </li>
          
        </ul>
      </div>
      <div>
        <ul className="flex space-x-3">
         
              <li>
                <Link href={"#!"}></Link>
              </li>
              <li>
                <button onClick="">Logout</button>
              </li>
           

              <li>
                <Link href="/login">Login</Link>
              </li>
              <li>
                <Link href="/signup">Signup</Link>
              </li>
            
        </ul>
      </div>
    </nav>
  );
};

export default CustomNavbar;
