import { recentVideosData } from "@/utils/data";
import Link from "next/link";
import React from "react";

const Recent = () => {
  return (
    <section className="padding">
      <h1 className="text-center lg:text-[80px] sm:text-[50px] xs:text-[30px] text-[23px] italic font-bold mb-[1rem]">
        Recent Videos
      </h1>

      <div className="flex justify-center flex-wrap gap-[2rem]">
        {recentVideosData.map((video) => (
          <Link
            target="_blank"
            key={video.id}
            href={video.href}
            className="w-[300px] hover:scale-[1.05] transition"
          >
            <img
              src={video.image}
              alt=""
              className="w-[300px] rounded-[1rem] mb-[0.5rem]"
            />
            <p className="italic font-semibold sm:text-[20px] text-[18px]">
              {video.name}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Recent;
