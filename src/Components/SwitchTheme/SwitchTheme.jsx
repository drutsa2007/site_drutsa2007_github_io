import style from './SwitchTheme.module.css';
import { useTheme } from "../../hooks/useTheme";
import { useState } from 'react';

const SwitchTheme = () => {
  const { theme, setTheme } = useTheme();
  const [style1, setStyle1] = useState((theme === "dark") ? style.btn : [style.btn, style.on].join(' '))
  
  const change = () => {
    if (theme === "dark") {
      setStyle1([style.btn, style.on].join(' '))
      setTheme("light") 
    }
    else {
      setStyle1(style.btn)
      setTheme("dark") 
    }
  }
  return (
    <div>
      <div 
        className={style1} 
        onClick={() => {change()}} 
      ></div>
    </div>
  );
}

export default SwitchTheme;