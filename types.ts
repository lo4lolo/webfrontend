
export enum CategoryType {
  INPUT = 'INPUT',
  INTERACTION = 'INTERACTION',
  GAMIFICATION = 'GAMIFICATION',
  DATA_MGMT = 'DATA_MGMT'
}

export interface ComponentExample {
  id: string;
  title: string;
  category: CategoryType;
  description: string;
  educational: string; // Why use this in class?
  vibePrompt: string; // The prompt to give the AI to build this
}

export interface FlashcardData {
  id: string;
  front: string;
  back: string;
}

export interface DragItem {
  id: string;
  text: string;
  category: 'mammal' | 'bird';
}
