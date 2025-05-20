
import { useState } from 'react';
import { Character, ClothingItem, ClothingType, defaultCharacter } from '@/types/character';
import { toast } from 'sonner';

export const useCharacter = () => {
  const [character, setCharacter] = useState<Character>(defaultCharacter);

  const updateSkinColor = (color: string) => {
    setCharacter((prev) => ({
      ...prev,
      skinColor: color
    }));
    toast.success('Skin color updated');
  };

  const addClothingItem = (item: ClothingItem) => {
    setCharacter((prev) => ({
      ...prev,
      clothing: {
        ...prev.clothing,
        [item.type]: item
      }
    }));
    toast.success(`${item.name} added`);
  };

  const removeClothingItem = (type: ClothingType) => {
    if (!character.clothing[type]) return;
    
    const newClothing = { ...character.clothing };
    delete newClothing[type];
    
    setCharacter((prev) => ({
      ...prev,
      clothing: newClothing
    }));
    toast.success(`${type} removed`);
  };

  const isItemSelected = (itemId: string): boolean => {
    return Object.values(character.clothing).some(item => item?.id === itemId);
  };

  return {
    character,
    updateSkinColor,
    addClothingItem,
    removeClothingItem,
    isItemSelected
  };
};
