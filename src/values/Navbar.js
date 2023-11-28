import MenuClock from "./MenuClock";
import flag from '../img/flag.png';

//OVDE JE DUGME START MENU ZA OTVARANJE PROZORA
export function Navbar({ handleStartMenu }) {
    return (
      <div className="startMenu">
        <button className="startBtn" onClick={handleStartMenu}>
          <img src={flag} alt="WFlag" className="flagStart" />
          <span className="flagText">start</span>
        </button>
  
        <MenuClock />
      </div>
    );
  }