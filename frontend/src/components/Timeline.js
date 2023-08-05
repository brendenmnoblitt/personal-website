import React from "react";
import "../static/css/App.css";

const JobTimeline = () => {
  return (
    <div className="justify-center pb-4">
      <h2 className="text-2xl text-center font-medium mb-4">Timeline</h2>
      <div className="m-8 flex items-center justify-center">
        <ol class="relative border-l border-gray-200 dark:border-gray-700">
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none ">
              December 2022
            </time>
            <h3 class="text-lg font-semibold">
              Business Intelligence Developer II
            </h3>
            <p class="text-base font-normal ">Mouser Electronics</p>
            <p class="text-base font-normal">Python • SQL • Linux</p>
          </li>
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none ">
              February 2022
            </time>
            <h3 class="text-lg font-semibold">
              Business Intelligence Developer I
            </h3>
            <p class="text-base font-normal ">Mouser Electronics</p>
            <p class="text-base font-normal">Tableau • Alteryx • SQL • Linux</p>
          </li>
          <li class="mb-10 ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none ">
              June 2021
            </time>
            <h3 class="text-lg font-semibold">Marketing Analyst</h3>
            <p class="text-base font-normal ">Mouser Electronics</p>
            <p class="text-base font-normal">Tableau • Alteryx • SQL</p>
          </li>
          <li class="ml-4">
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time class="mb-1 text-sm font-normal leading-none ">
              August 2017 - May 2021
            </time>
            <h3 class="text-lg font-semibold">Student</h3>
            <p class="text-base font-normal ">Oklahoma State University</p>
            <p class="text-base font-normal">
              B.S in Business Administration - Marketing Analytics
            </p>
            <p class="text-base font-normal">Minor in Data Science</p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default JobTimeline;
