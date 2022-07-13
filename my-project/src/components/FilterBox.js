import NotPublished from "./Filter/NotPublished";
import Published from "./Filter/Published";

const FilterBox = () => {
  return (
    <div className="flex justify-between my-8">
      <div className="px-4 py-2 bg-amber-300 border-2 flex justify-center items-center md:w-1/5 border-gray-700 text-gray-900 text-sm font-bold uppercase">
        <Published />
      </div>

      <div className="px-4 py-2 bg-amber-300 border-2 flex justify-center items-center md:w-1/5 border-gray-700 text-gray-900 text-base font-bold uppercase">
        <NotPublished />
      </div>

      <div className="px-4 py-2 bg-amber-300 border-2 flex justify-center items-center md:w-1/5 border-gray-700 text-gray-900 text-base font-bold uppercase">
        <span>filter</span>
      </div>

      <div className="px-4 py-2 bg-amber-300 border-2 flex justify-center items-center md:w-1/5 border-gray-700 text-gray-900 text-base font-bold uppercase">
        <span>filter</span>
      </div>
    </div>
  );
};

export default FilterBox;
