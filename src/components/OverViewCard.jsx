import React from "react";
import classNames from "classnames";
export default function OverViewCard({ platform, title, value, change }) {
  let socialImageSrc, changeIconSrc, editedValue;
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
  if (value.toString().length >= 10 && value.toString().length <= 12) {
    editedValue = `${value.toString().replace(/\d{9}$/, "")}b`;
  } else if (value.toString().length >= 7 && value.toString().length <= 9) {
    editedValue = `${value.toString().replace(/\d{6}$/, "")}m`;
  } else if (value.toString().length >= 5 && value.toString().length <= 6) {
    editedValue = `${value.toString().replace(/\d{3}$/, "")}k`;
  } else {
    editedValue = value;
  }
  return (
    <div className="bg-blue-veryPale p-6 rounded-lg relative dark:bg-blue-darkDesaturated group cursor-pointer">
      <div className="absolute inset-0 bg-blue-veryDark dark:bg-white rounded-lg pointer-events-none opacity-0 group-hover:opacity-10 duration-200 ease-in-out"></div>
      <div className="flex items-center justify-between">
        <div className="text-sm font-bold text-blue-darkGrayish dark:text-blue-desaturated">
          {title}
        </div>
        <img src={socialImageSrc} alt={platform} />
      </div>
      <div className="flex items-center justify-between mt-6">
        <div className="font-bold text-blue-veryDark text-3xl dark:text-white">
          {editedValue}
        </div>
        <div className={changeClass}>
          <img src={changeIconSrc} alt="change" className="mr-1" />
          {Math.abs(change)}%
        </div>
      </div>
    </div>
  );
}
