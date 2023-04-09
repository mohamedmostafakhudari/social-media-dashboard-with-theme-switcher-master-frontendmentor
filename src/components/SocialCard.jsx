import React from "react";
import classNames from "classnames";
export default function SocialCard({
  platform,
  username,
  numOfFollowers,
  change,
}) {
  let socialImageSrc, changeIconSrc, followers;
  if (platform == "facebook") {
    socialImageSrc = "./assets/images/icon-facebook.svg";
  } else if (platform == "twitter") {
    socialImageSrc = "./assets/images/icon-twitter.svg";
  } else if (platform == "instagram") {
    socialImageSrc = "./assets/images/icon-instagram.svg";
  } else if (platform == "youtube") {
    socialImageSrc = "./assets/images/icon-youtube.svg";
  }
  if (change >= 0) {
    changeIconSrc = "./assets/images/icon-up.svg";
  } else {
    changeIconSrc = "./assets/images/icon-down.svg";
  }
  const changeClass = classNames(
    {
      "text-green-lime": change >= 0,
      "text-red-bright": change < 0,
    },
    "font-bold text-sm flex items-center"
  );
  const cardBackClass = classNames(
    "absolute w-[98%] inset-y-0 -z-10 rounded-lg -top-[5px]",
    {
      "bg-socials-facebook": platform === "facebook",
      "bg-socials-twitter": platform === "twitter",
      "bg-gradient-to-r from-socials-instagramGrad1 to-socials-instagramGrad2":
        platform === "instagram",
      "bg-socials-youtube": platform === "youtube",
    }
  );
  if (
    numOfFollowers.toString().length >= 10 &&
    numOfFollowers.toString().length <= 12
  ) {
    followers = `${numOfFollowers.toString().replace(/\d{9}$/, "")}b`;
  } else if (
    numOfFollowers.toString().length >= 7 &&
    numOfFollowers.toString().length <= 9
  ) {
    followers = `${numOfFollowers.toString().replace(/\d{6}$/, "")}m`;
  } else if (
    numOfFollowers.toString().length >= 5 &&
    numOfFollowers.toString().length <= 6
  ) {
    followers = `${numOfFollowers.toString().replace(/\d{3}$/, "")}k`;
  } else {
    followers = numOfFollowers;
  }
  return (
    <div className="bg-blue-veryPale py-5 pt-2 rounded-lg flex flex-col items-center space-y-6 relative md:flex-1 dark:bg-blue-darkDesaturated group cursor-pointer">
      <div className={cardBackClass}></div>
      <div className="absolute inset-0 -top-6 bg-blue-veryDark rounded-lg opacity-0 pointer-events-none dark:bg-white group-hover:opacity-10 duration-200 ease-in-out"></div>
      <div>
        <img src={socialImageSrc} alt={platform} className="inline" />{" "}
        <span className="ml-1 text-blue-darkGrayish font-bold text-sm dark:text-blue-desaturated">
          {username}
        </span>
      </div>
      <div className="text-center">
        <div className="text-6xl font-bold dark:text-white">{followers}</div>
        <div className="uppercase text-blue-darkGrayish tracking-[5px] mt-1 text-sm dark:text-blue-desaturated">
          {platform === "youtube" ? "subscribers" : "followers"}
        </div>
      </div>
      <div className={changeClass}>
        <img src={changeIconSrc} alt="change" className="mr-1" />
        {Math.abs(change)} Today
      </div>
    </div>
  );
}
