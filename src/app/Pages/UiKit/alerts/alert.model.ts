// alert.model.ts
export interface Alert {
  id?: number;
  type: string;
  message: string;
  visible?: boolean;
  icon?: string;
  borderColor?: string;
  bgColor?: string;
  textColor?: string;
}
