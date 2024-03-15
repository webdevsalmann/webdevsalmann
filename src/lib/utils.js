import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function smoothScroll(event) {
  event.preventDefault();
  const aboutSection = document.getElementById('about');
  aboutSection.scrollIntoView({ behavior: 'smooth' });
}