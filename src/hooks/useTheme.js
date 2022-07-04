import { useLayoutEffect, useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem("app-theme") || "dark");

  useLayoutEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("app-theme", theme);
  }, [theme]);
  
  return { theme, setTheme };
};

/*
В компоненте
import { useTheme } from "../../core/hooks/useTheme";
import { useEffect, useState } from "react";

const Header = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      {theme !== "dark" ? (
        <BsFillMoonStarsFill
          onClick={() => setTheme("dark")}
        />
      ) : (
        <BsFillSunFill
          onClick={() => setTheme("light")}
        />
      )}
    </div>
  );
};
export { Header };*/

