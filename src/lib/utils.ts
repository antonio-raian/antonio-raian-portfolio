import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Função para aplicar a máscara manualmente
export const applyPhoneMask = (value: string) => {
  value = value.replace(/\D/g, "");

  if (value.length > 11) value = value.slice(0, 11);

  value = value.replace(
    /^(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,3})$/,
    (_, p1, p2, p3, p4) =>
      `${p1 ? `(${p1}` : ""}${p2 ? `) ${p2}` : ""}${p3 ? ` ${p3}` : ""}${
        p4 ? ` ${p4}` : ""
      }`
  );

  return value;
};
