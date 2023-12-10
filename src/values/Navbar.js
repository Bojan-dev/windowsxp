import MenuClock from "./MenuClock";
import flag from '../img/flag.png';
import mycomputer from '../img/mycomputer.png';
import internetExplorer from '../img/explorerIcon.png';

//OVDE JE DUGME START MENU ZA OTVARANJE PROZORA
export function Navbar({ handleStartMenu, windowOpened, windowNum }) {
    return (
      <div className="startMenu">
        <div className="startMenuChild">
          <button className="startBtn" onClick={handleStartMenu}>
            <img src={flag} alt="WFlag" className="flagStart" />
            <span className="flagText">start</span>
          </button>

          {windowOpened && windowNum.includes(2) && <NavBarCard text='My Computer' img={mycomputer} />}
          {windowOpened && windowNum.includes(4) && <NavBarCard text='Internet Explorer' img={internetExplorer} />}

        </div>
        <MenuClock />
      </div>
    );
  }

function NavBarCard({text, img}){
  return(
    <span className="navbarCard">
      <div>
        <img src={img} />
        <p>{text}</p>
      </div>
    </span>
  )
}