import { ImageSourcePropType } from "react-native";

// this has properties that a typical card will have
export interface CardProps {
  id: number;
  accountNo: string;
  balance: number;
  alias?: string;
  logo: ImageSourcePropType;
}

export interface CardSectionProps {
  data: Array<CardProps>;
  
}