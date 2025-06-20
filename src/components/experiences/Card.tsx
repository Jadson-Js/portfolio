"use client";

import { IExperience } from "@/types/IExperience";

export function Card({
  company,
  startDate,
  endData,
  role,
  description,
}: IExperience) {
  return (
    <article className="bg-bg3 rounded p-4 border border-white gap-4 flex flex-col flex-1">
      <span className="text-gray-400 text-xs border-b-2 w-fit h-fit pb-1 border-primary   ">
        {startDate} - {endData}
      </span>

      <div className="flex flex-col gap-8 md:flex-1">
        <h3 className="text-lg">
          {company} - {role}
        </h3>

        <ul className="list-disc list-inside text-gray-200 flex flex-col gap-2">
          {description.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </article>
  );
}
