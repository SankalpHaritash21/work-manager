"use client";

import React from "react";
import Image from "next/image";
import git from "@/assets/github.svg"
import facebook from "@/assets/facebook.svg"
import Link from "next/link";

const Footer = () => {
  const url=String(process.env.GIT_HUB_URL);
  return (
    <footer className="h-30 bg-blue-600 ">
      <div className="flex p-5 justify-around">
        <div className="text-center flex flex-col justify-center">
          <h1 className="text-3xl">Welcome to Work Manager</h1>
          <p>
            Hey, This is Work Manager<br/>
            Here You Can Store Your Important Work
          </p>
        </div>
        <div className="text-center flex flex-col items-center justify-center ">
          <h1>Important Links</h1>
          <ul className="flex gap-x-8">
            <li>
              <Link href={"#!"}><Image width="48" height="48" src={facebook} alt="facebook-circled"/></Link>
            </li>
            <li>
              <Link href={"#!"}><img width="48" height="48" src="https://img.icons8.com/fluency/48/youtube-play.png" alt="youtube-play"/></Link>
            </li>
            <li>
              <Link href={"#!"}><img width="48" height="48" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new"/></Link>
            </li>

            <li>
              <Link href={url} target="_blank"><Image width="48" height="48" src={git} alt="github"/></Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
