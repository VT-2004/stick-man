
export interface ClothingItem {
  id: string;
  type: ClothingType;
  name: string;
  svgPath: string;
  color?: string;
}

export type ClothingType = 
  | 'hat' 
  | 'shirt' 
  | 'pants' 
  | 'shoes'
  | 'accessory';

export interface Character {
  skinColor: string;
  clothing: {
    hat?: ClothingItem;
    shirt?: ClothingItem;
    pants?: ClothingItem;
    shoes?: ClothingItem;
    accessory?: ClothingItem;
  };
}

export type SkinColorOption = {
  id: string;
  name: string;
  color: string;
};

export const skinColorOptions: SkinColorOption[] = [
  { id: 'light', name: 'Light', color: '#FDE1D3' },
  { id: 'medium', name: 'Medium', color: '#FEC6A1' },
  { id: 'dark', name: 'Dark', color: '#C99B7E' },
  { id: 'tan', name: 'Tan', color: '#F0D0A5' },
];

export const defaultCharacter: Character = {
  skinColor: skinColorOptions[0].color,
  clothing: {}
};

export const clothingItems: ClothingItem[] = [
  // Hats
  {
    id: 'hat-1',
    type: 'hat',
    name: 'Baseball Cap',
    svgPath: 'M10,0 C15.5228475,0 20,4.4771525 20,10 L20,10 L0,10 C0,4.4771525 4.4771525,0 10,0 Z',
    color: '#3B82F6',
  },
  {
    id: 'hat-2',
    type: 'hat',
    name: 'Top Hat',
    svgPath: 'M6,0 L14,0 L14,8 L16,8 L16,10 L4,10 L4,8 L6,8 L6,0 Z',
    color: '#000000',
  },
  
  // Shirts
  {
    id: 'shirt-1',
    type: 'shirt',
    name: 'T-Shirt',
    svgPath: 'M0,0 L20,0 L20,15 L12,20 L8,20 L0,15 L0,0 Z',
    color: '#F87171',
  },
  {
    id: 'shirt-2',
    type: 'shirt',
    name: 'Sweater',
    svgPath: 'M0,0 L20,0 L20,20 L0,20 L0,0 Z',
    color: '#60A5FA',
  },
  
  // Pants
  {
    id: 'pants-1',
    type: 'pants',
    name: 'Jeans',
    svgPath: 'M4,0 L16,0 L18,20 L14,20 L10,10 L6,20 L2,20 L4,0 Z',
    color: '#4B5563',
  },
  {
    id: 'pants-2',
    type: 'pants',
    name: 'Shorts',
    svgPath: 'M4,0 L16,0 L16,10 L4,10 L4,0 Z',
    color: '#FBBF24',
  },
  
  // Shoes
  {
    id: 'shoes-1',
    type: 'shoes',
    name: 'Sneakers',
    svgPath: 'M0,4 L10,4 L10,0 L20,0 L20,8 L0,8 L0,4 Z',
    color: '#1E3A8A',
  },
  {
    id: 'shoes-2',
    type: 'shoes',
    name: 'Boots',
    svgPath: 'M0,0 L20,0 L20,8 L0,8 L0,0 Z',
    color: '#7C2D12',
  },
  
  // Accessories
  {
    id: 'accessory-1',
    type: 'accessory',
    name: 'Glasses',
    svgPath: 'M5,5 C7.76142375,5 10,7.23857625 10,10 C10,12.7614237 7.76142375,15 5,15 C2.23857625,15 0,12.7614237 0,10 C0,7.23857625 2.23857625,5 5,5 Z M15,5 C17.7614237,5 20,7.23857625 20,10 C20,12.7614237 17.7614237,15 15,15 C12.2385763,15 10,12.7614237 10,10 C10,7.23857625 12.2385763,5 15,5 Z',
    color: '#000000',
  },
  {
    id: 'accessory-2',
    type: 'accessory',
    name: 'Tie',
    svgPath: 'M8,0 L12,0 L14,5 L10,10 L6,5 L8,0 Z',
    color: '#EF4444',
  },
];
