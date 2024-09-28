"use client";
import { HomePageFilters } from "@/constants/filters";
import { Button } from "../ui/button";

const HomePageFilter = () => {
 const active =''
  return (
    <div className="hidden md:flex mt-10 gap-3 flex-wrap">
      {HomePageFilters.map((item) => (
        <Button
          key={item.value}
          onClick={() => {}}
          className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none ${active === item.value 
            ? 'dark:hover:bg-dark-400 bg-primary-100 text-primary-500 hover:bg-primary-100 dark:bg-dark-400 dark:text-primary-500' 
            : 'bg-light-800 text-light-500 hover:bg-light-900 dark:bg-dark-300 dark:text-light-500 dark:hover:bg-dark-400'
          }`}
        >
          {item.name}
        </Button>
      ))}
    </div>
  );
};

export default HomePageFilter;
