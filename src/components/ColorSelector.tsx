
import { SkinColorOption } from '@/types/character';
import { cn } from '@/lib/utils';

interface ColorSelectorProps {
  colorOptions: SkinColorOption[];
  selectedColor: string;
  onColorSelect: (color: string) => void;
}

const ColorSelector = ({ 
  colorOptions, 
  selectedColor, 
  onColorSelect 
}: ColorSelectorProps) => {
  return (
    <div className="animate-fade-in">
      <h3 className="panel-title">Skin Color</h3>
      <div className="flex flex-wrap gap-3">
        {colorOptions.map((option) => (
          <div 
            key={option.id} 
            className="flex flex-col items-center gap-1"
          >
            <div
              className={cn(
                "color-swatch", 
                selectedColor === option.color && "active"
              )}
              style={{ backgroundColor: option.color }}
              onClick={() => onColorSelect(option.color)}
              title={option.name}
            />
            <span className="text-xs">{option.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;
