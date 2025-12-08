import React, { createContext, useContext, useState, ReactNode, useMemo } from "react";
import { ColorTheme, colorThemes } from "@/lib/colors";

interface ColorContextType {
  color: ColorTheme;
  setColor: (color: ColorTheme) => void;
  colors: typeof colorThemes["orange"];
}

const ColorContext = createContext<ColorContextType | undefined>(undefined);

export function ColorProvider({ children }: { children: ReactNode }) {
  const [color, setColor] = useState<ColorTheme>("orange");

  const colors = useMemo(() => colorThemes[color], [color]);

  const value = useMemo(
    () => ({ color, setColor, colors }),
    [color, colors]
  );

  return (
    <ColorContext.Provider value={value}>
      {children}
    </ColorContext.Provider>
  );
}

export function useColor() {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error("useColor must be used within ColorProvider");
  }
  return context;
}
