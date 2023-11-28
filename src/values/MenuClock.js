import { useEffect, useState } from "react";
import speaker from "../img/speaker.webp"

export default function MenuClock() {
    const [clockMenu, setClockMenu] = useState(new Date());
  
    useEffect(() => {
      const intervalClock = setInterval(() => {
        setClockMenu(new Date());
      }, 2000);
  
      return () => clearInterval(intervalClock);
    }, []);
  
    const createHourMin = (time) => {
      let hour = time.getHours();
      let min = time.getMinutes();
      hour = hour < 10 ? "0" + hour : hour;
      min = min < 10 ? "0" + min : min;
      const createdTime = `${hour}:${min}`;
      return createdTime;
    };
  
    return (
      <div className="menuClock">
        <img src={speaker} className="menuClockImg" />
        <p>{createHourMin(clockMenu)}</p>
      </div>
    );
  }