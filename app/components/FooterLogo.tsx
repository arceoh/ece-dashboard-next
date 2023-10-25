"use client";
import Image from "next/image";
import { useThemeStore } from "../hooks/useThemeStore";

const FooterLogo = () => {
  const { theme } = useThemeStore();
  return (
    <>
      {theme === "dark" && (
        <Image
          src={`/images/${"ece_logo_white.svg"}`}
          width={150}
          height={150}
          alt="Early Childhood Education"
        />
      )}
      {theme === "light" && (
        <Image
          src={`/images/${"ece_logo_blue.svg"}`}
          width={150}
          height={150}
          alt="Early Childhood Education"
        />
      )}
    </>
  );
};

export default FooterLogo;
