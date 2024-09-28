"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface filterProps {
  filters: {
    name: string;
    value: string;
  }[];
  otherClasses: string;
  containerClasses: string;
}

const Filters = ({ containerClasses, otherClasses, filters }: filterProps) => {
  return (
    <div className={`${containerClasses} relative`}>
      <Select>
        <SelectTrigger
          className={`${otherClasses} 
                                   light-border
                                   border
                                   body-regular
                                   px-5 py-2.5 
                                   text-dark500_light700 
                                   background-light800_dark300 
                                   no-focus
                                                                   `}
        >
          <div className="line-clamp-1 flex-1 text-left ">
            <SelectValue placeholder="Select a Filter" />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {filters.map((Item) => (
              <SelectItem value={Item.value} key={Item.value}>
                {Item.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default Filters;
