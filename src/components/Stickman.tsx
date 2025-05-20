
import { Character, ClothingType } from '@/types/character';
import { cn } from '@/lib/utils';
import { useEffect, useRef } from 'react';

interface StickmanProps {
  character: Character;
  onRemoveItem?: (type: ClothingType) => void;
}

const Stickman = ({ character, onRemoveItem }: StickmanProps) => {
  const svgRef = useRef<SVGSVGElement>(null);
  
  // Apply animation when character changes
  useEffect(() => {
    if (svgRef.current) {
      svgRef.current.classList.add('animate-scale-in');
      const timer = setTimeout(() => {
        svgRef.current?.classList.remove('animate-scale-in');
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [character]);

  return (
    <div className="stickman-container animate-fade-in">
      <svg
        ref={svgRef}
        width="240"
        height="400"
        viewBox="0 0 240 400"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-all duration-300"
      >
        {/* Base stickman figure */}
        <g id="stickman" className="transition-all duration-300">
          {/* Head */}
          <circle cx="120" cy="80" r="40" fill={character.skinColor} />
          
          {/* Body */}
          <line x1="120" y1="120" x2="120" y2="240" stroke={character.skinColor} strokeWidth="10" strokeLinecap="round" />
          
          {/* Arms */}
          <line x1="120" y1="150" x2="70" y2="200" stroke={character.skinColor} strokeWidth="10" strokeLinecap="round" />
          <line x1="120" y1="150" x2="170" y2="200" stroke={character.skinColor} strokeWidth="10" strokeLinecap="round" />
          
          {/* Legs */}
          <line x1="120" y1="240" x2="90" y2="320" stroke={character.skinColor} strokeWidth="10" strokeLinecap="round" />
          <line x1="120" y1="240" x2="150" y2="320" stroke={character.skinColor} strokeWidth="10" strokeLinecap="round" />
          
          {/* Hat (positioned above head) */}
          {character.clothing.hat && (
            <g 
              transform="translate(95, 10) scale(2.5)" 
              className={cn(
                "cursor-pointer transition-all duration-200 hover:opacity-80",
                onRemoveItem && "hover:scale-110"
              )}
              onClick={() => onRemoveItem && onRemoveItem('hat')}
            >
              <path d={character.clothing.hat.svgPath} fill={character.clothing.hat.color} />
              {onRemoveItem && (
                <title>Click to remove {character.clothing.hat.name}</title>
              )}
            </g>
          )}
          
          {/* Shirt (positioned on body) */}
          {character.clothing.shirt && (
            <g 
              transform="translate(95, 120) scale(2.5)" 
              className={cn(
                "cursor-pointer transition-all duration-200 hover:opacity-80",
                onRemoveItem && "hover:scale-110"
              )}
              onClick={() => onRemoveItem && onRemoveItem('shirt')}
            >
              <path d={character.clothing.shirt.svgPath} fill={character.clothing.shirt.color} />
              {onRemoveItem && (
                <title>Click to remove {character.clothing.shirt.name}</title>
              )}
            </g>
          )}
          
          {/* Pants (positioned on legs) */}
          {character.clothing.pants && (
            <g 
              transform="translate(95, 220) scale(2.5)" 
              className={cn(
                "cursor-pointer transition-all duration-200 hover:opacity-80",
                onRemoveItem && "hover:scale-110"
              )}
              onClick={() => onRemoveItem && onRemoveItem('pants')}
            >
              <path d={character.clothing.pants.svgPath} fill={character.clothing.pants.color} />
              {onRemoveItem && (
                <title>Click to remove {character.clothing.pants.name}</title>
              )}
            </g>
          )}
          
          {/* Shoes (positioned at feet) */}
          {character.clothing.shoes && (
            <g 
              transform="translate(80, 300) scale(2)" 
              className={cn(
                "cursor-pointer transition-all duration-200 hover:opacity-80",
                onRemoveItem && "hover:scale-110"
              )}
              onClick={() => onRemoveItem && onRemoveItem('shoes')}
            >
              <path d={character.clothing.shoes.svgPath} fill={character.clothing.shoes.color} />
              {onRemoveItem && (
                <title>Click to remove {character.clothing.shoes.name}</title>
              )}
            </g>
          )}
          
          {/* Accessory (positioned on face/head) */}
          {character.clothing.accessory && (
            <g 
              transform="translate(100, 60) scale(2)" 
              className={cn(
                "cursor-pointer transition-all duration-200 hover:opacity-80",
                onRemoveItem && "hover:scale-110"
              )}
              onClick={() => onRemoveItem && onRemoveItem('accessory')}
            >
              <path d={character.clothing.accessory.svgPath} fill={character.clothing.accessory.color} />
              {onRemoveItem && (
                <title>Click to remove {character.clothing.accessory.name}</title>
              )}
            </g>
          )}
          
          {/* Face (simple) */}
          <circle cx="105" cy="70" r="5" fill="#000" />
          <circle cx="135" cy="70" r="5" fill="#000" />
          <path d="M110,90 Q120,100 130,90" stroke="#000" strokeWidth="2" fill="none" />
        </g>
        
        {/* Tooltip */}
        {onRemoveItem && (
          <text 
            x="120" 
            y="380" 
            textAnchor="middle" 
            className="text-xs fill-muted-foreground"
          >
            Click on clothing items to remove them
          </text>
        )}
      </svg>
    </div>
  );
};

export default Stickman;
