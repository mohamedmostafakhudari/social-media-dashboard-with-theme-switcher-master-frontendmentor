import React from "react";
import OverViewCard from "../components/OverViewCard";
const overViewCards = [
  {
    platform: "facebook",
    title: "Page Views",
    value: 87,
    change: 3,
  },
  {
    platform: "facebook",
    title: "Likes",
    value: 52,
    change: -2,
  },
  {
    platform: "instagram",
    title: "Likes",
    value: 5462,
    change: 2257,
  },
  {
    platform: "instagram",
    title: "Profile Views",
    value: 52000,
    change: 1375,
  },
  {
    platform: "twitter",
    title: "Retweets",
    value: 117,
    change: 303,
  },
  {
    platform: "twitter",
    title: "Likes",
    value: 507,
    change: 553,
  },
  {
    platform: "youtube",
    title: "Likes",
    value: 107,
    change: -19,
  },
  {
    platform: "youtube",
    title: "Total Views",
    value: 1407,
    change: -12,
  },
];
export default function OverView() {
  return (
    <section className="pb-10">
      <div className="container mx-auto px-4 md:p-0">
        <h2 className="text-blue-darkGrayish font-bold text-2xl dark:text-white">
          Overview - Today
        </h2>
        <div
          className="grid gap-5 mt-8 md:mt-6"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          }}
        >
          {overViewCards.map(({ platform, title, value, change }, i) => (
            <OverViewCard
              key={i}
              platform={platform}
              title={title}
              value={value}
              change={change}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
