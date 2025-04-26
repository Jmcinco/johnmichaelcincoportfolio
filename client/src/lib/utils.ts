import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToId(id: string, offset = 80) {
  const element = document.getElementById(id);
  if (!element) return;
  
  const yCoordinate = element.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -offset; 
  window.scrollTo({ 
    top: yCoordinate + yOffset, 
    behavior: 'smooth' 
  });
}
