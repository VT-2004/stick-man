
import { ClothingItem as ClothingItemType } from '@/types/character';
import { cn } from '@/lib/utils';

interface ClothingItemProps {
  item: ClothingItemType;
  isSelected: boolean;
  onClick: (item: ClothingItemType) => void;
}

const ClothingItem = ({ item, isSelected, onClick }: ClothingItemProps) => {
  return (
    <div 
      className={cn(
        "clothing-item animate-scale-in hover-scale",
        isSelected && "active"
      )}
      onClick={() => onClick(item)}
    >
      <div className="flex flex-col items-center space-y-2">
        <svg 
          width="40" 
          height="40" 
          viewBox="0 0 20 20" 
          xmlns="http://www.w3.org/2000/svg"
          className="transition-all duration-300"
        >
          <path d={item.svgPath} fill={item.color} />
        </svg>
        <span className="text-xs font-medium">{item.name}</span>
      </div>
    </div>
  );
};

export default ClothingItem;
