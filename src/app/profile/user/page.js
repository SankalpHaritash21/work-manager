"use client"

import UserContext from "@/context/userContext";
import React, { useContext } from "react";

const page = () => {
  const { user } = useContext(UserContext);
  console.log(user)
 
  return (
    
    <div
      
    >
      <div className="p-5">
        <div className="flex justify-between">
         
      <div className="flex justify-between mt-3">
          <p className="text-right">
            Name: <span className="font-bold">{user?.name}</span>
          </p>
        </div>
      </div>
    </div>

    </div>
  )
}

export default page