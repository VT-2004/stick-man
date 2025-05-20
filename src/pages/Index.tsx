
import { toast } from "sonner";
import { useState, useEffect } from "react";
import Stickman from "@/components/Stickman";
import ClothingSelector from "@/components/ClothingSelector";
import ColorSelector from "@/components/ColorSelector";
import { useCharacter } from "@/hooks/useCharacter";
import { clothingItems, skinColorOptions } from "@/types/character";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { 
    character, 
    updateSkinColor, 
    addClothingItem, 
    removeClothingItem,
    isItemSelected 
  } = useCharacter();

  // Simulate loading and show welcome toast
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
      toast.success("Welcome to Stickman Dress Up!");
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-lg font-medium animate-pulse">Loading Stickman...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container min-h-screen py-8 mx-auto">
      <div className="flex flex-col items-center mb-10 animate-fade-in">
        <h1 className="text-3xl font-semibold tracking-tight mb-2">Stickman Dress Up</h1>
        <p className="text-muted-foreground">Customize your stickman with different clothing options and skin colors</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* Left side - Stickman character */}
        <div className="flex flex-col gap-6 md:mb-0 mb-6">
          <Stickman character={character} onRemoveItem={removeClothingItem} />
        </div>
        
        {/* Right side - Clothing and color selection */}
        <div className="flex flex-col gap-6">
          <div className="selector-panel">
            <ColorSelector 
              colorOptions={skinColorOptions}
              selectedColor={character.skinColor}
              onColorSelect={updateSkinColor}
            />
          </div>
          
          <div className="selector-panel">
            <ClothingSelector 
              clothingItems={clothingItems} 
              onSelectItem={addClothingItem}
              isItemSelected={isItemSelected}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
