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
    <article className="bg-bg3 rounded p-4 border border-white gap-4 flex flex-col md:flex-row">
      <span className="text-gray-400 text-sm border-b-2 h-fit pb-4 border-primary md:border-b-0 md:border-r-2  md:pb-0 md:pr-4">
        {startDate} - {endData}
      </span>

      <div className="flex flex-col gap-8 md:flex-1">
        <h3 className="text-lg">
          {company} - {role}
        </h3>

        <ul className="list-disc list-inside text-gray-200 flex flex-col gap-2 text-sm">
          {description.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
    </article>
  );
}
