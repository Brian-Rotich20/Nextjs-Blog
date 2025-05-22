import React from 'react';
import { SearchIcon } from 'lucide-react';
interface SearchBarProps {
  onSearch: (query: string) => void;
}
const SearchBar: React.FC<SearchBarProps> = ({
  onSearch
}) => {
  return <div className="relative">
      <input type="text" placeholder="Search posts..." onChange={e => onSearch(e.target.value)} className="w-full pl-12 pr-4 py-3 bg-light-300 dark:bg-dark-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold" />
      <SearchIcon size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
    </div>;
};
export default SearchBar;