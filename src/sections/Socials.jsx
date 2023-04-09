import React from "react";
import SocialCard from "../components/SocialCard";

export default function Socials({ socialCards }) {
  return (
    <section className="py-12 relative z-10">
      <div
        className="container mx-auto px-4 grid gap-10 md:p-0"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr)" }}
      >
        {socialCards.map(
          ({ platform, username, numOfFollowers, change }, i) => {
            return (
              <SocialCard
                key={i}
                platform={platform}
                username={username}
                numOfFollowers={numOfFollowers}
                change={change}
              />
            );
          }
        )}
      </div>
    </section>
  );
}
