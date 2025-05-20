
import { useState } from 'react';
import { ClothingItem as ClothingItemType, ClothingType } from '@/types/character';
import ClothingItem from './ClothingItem';
import { cn } from '@/lib/utils';

interface ClothingSelectorProps {
  clothingItems: ClothingItemType[];
  onSelectItem: (item: ClothingItemType) => void;
  isItemSelected: (id: string) => boolean;
}

const ClothingSelector = ({
  clothingItems,
  onSelectItem,
  isItemSelected
}: ClothingSelectorProps) => {
  const [selectedCategory, setSelectedCategory] = useState<ClothingType | 'all'>('all');
  
  const categories: Array<{ value: ClothingType | 'all', label: string }> = [
    { value: 'all', label: 'All' },
    { value: 'hat', label: 'Hats' },
    { value: 'shirt', label: 'Shirts' },
    { value: 'pants', label: 'Pants' },
    { value: 'shoes', label: 'Shoes' },
    { value: 'accessory', label: 'Accessories' }
  ];
  
  const filteredItems = selectedCategory === 'all' 
    ? clothingItems 
    : clothingItems.filter(item => item.type === selectedCategory);

  return (
    <div className="animate-fade-in">
      <h3 className="panel-title">Clothing Items</h3>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {categories.map((category) => (
          <button
            key={category.value}
            className={cn(
              "px-3 py-1 text-xs rounded-full transition-all duration-200",
              selectedCategory === category.value 
                ? "bg-primary text-white" 
                : "bg-secondary text-primary hover:bg-secondary/80"
            )}
            onClick={() => setSelectedCategory(category.value)}
          >
            {category.label}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-2 gap-3 mt-2 overflow-y-auto max-h-[400px] pr-2">
        {filteredItems.map((item) => (
          <ClothingItem
            key={item.id}
            item={item}
            isSelected={isItemSelected(item.id)}
            onClick={onSelectItem}
          />
        ))}
      </div>
    </div>
  );
};

export default ClothingSelector;
