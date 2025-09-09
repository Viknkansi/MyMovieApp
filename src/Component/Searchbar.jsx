import { Search } from "lucide-react";

export default function Searchbar() {
  return (
    <div className="flex p-4 gap-2 ">
      <input type="text" className="w-full border"  />
      <button>
        <Search />
      </button>
    </div>
  );
}
