import React from 'react';
interface CategoryTagsProps {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}
const CategoryTags: React.FC<CategoryTagsProps> = ({
  categories,
  selectedCategory,
  onSelectCategory
}) => {
  return <div className="space-y-4">
      <h3 className="font-bold text-lg">Categories</h3>
      <div className="flex flex-wrap gap-2">
        <button onClick={() => onSelectCategory(null)} className={`px-4 py-2 rounded-full transition-colors ${selectedCategory === null ? 'bg-gold text-dark-100' : 'bg-light-300 dark:bg-dark-100 hover:text-gold'}`}>
          All
        </button>
        {categories.map(category => <button key={category} onClick={() => onSelectCategory(category)} className={`px-4 py-2 rounded-full transition-colors ${selectedCategory === category ? 'bg-gold text-dark-100' : 'bg-light-300 dark:bg-dark-100 hover:text-gold'}`}>
            {category}
          </button>)}
      </div>
    </div>;
};
export default CategoryTags;