import { useEffect, useState } from "react";
import "./App.css";

import { leftSideStartIcons,rightSideStartIcons } from "./values/startIcons";
import { smallIconsStart, smallIconsStartAccess, smallIconsStartGames } from "./values/smallStartIcons";
import { windowsIcons } from "./values/Icon";
// import SquareDrawer from "./values/SquareDrawer";
import Icon from './values/IconComponent';
import SmallIcon from "./values/SmallIcon";
import MenuClock from './values/MenuClock';
import Loader from "./values/Loader";
import { Navbar } from "./values/Navbar";
import { AllProgramsIcons } from "./values/AllProgramsIcons";

import usericon from "./img/usericon.jpeg";
import email from "./img/email.png";
import internet from "./img/internet.png";
import logoff from "./img/logof.png";
import turnoff from "./img/turnof.png";
import restart from "./img/restart.ico";
import flag from "./img/flag.png";

function App() {
  //POSTAVICU TRUE, DA NE BI UCITAVAO <LOADER />
  const [isLoaded, setIsLoaded] = useState(true);

  const clearLoader = () => {
    setTimeout(() => setIsLoaded(true), 4500);

    const timeCookie = new Date();
    timeCookie.setTime(timeCookie.getTime() + 2 * 60 * 60 * 1000);
    const expireTime = "expires=" + timeCookie.toUTCString();
    document.cookie = "powerON" + "=" + expireTime + ";";
  };

  // When isLoaded is false, only loader will be display, if true, then windows and navbar
  const [openedStartMenu, setOpenedStartMenu] = useState(false);
  const handleStartMenu = (e) => {
    setOpenedStartMenu((e) => !e);
  };

  return (
    <>
      {isLoaded || <Loader clearLoader={clearLoader} />}
      {isLoaded && (
        <Windows
          loaded={isLoaded}
          openedStartMenu={openedStartMenu}
          setOpenedStartMenu={setOpenedStartMenu}
          setIsLoaded={setIsLoaded}
        />
      )}
      {isLoaded && (
        <Navbar loaded={isLoaded} handleStartMenu={handleStartMenu} />
      )}
    </>
  );
}








function StartMenu({ setOpenedStartMenu, setIsLoaded, turnOff }) {
  //FOR HOVER START MENU
  const [hovered, setHovered] = useState(false);
  const [numberHovered, setNumberHovered] = useState(null);
  //FOF HOVER ALLPROGRAMS ICON

  const [hoverLittleIcon, setHoverLittleIcon] = useState(false);
  const [hoverLittleNum, setHoverLittleNum] = useState(null);

  //FOR HOVER START MENU
  function handleHoverOn(num) {
    setHovered(true);
    setNumberHovered(num);
  }
  function handleMouseLeave() {
    setHovered(false);
    setNumberHovered(null);
  }
  //---------------------------------
  //For little icon in start menu
  function handleHoverOnSmall(num){
    setHoverLittleNum(num);
    setHoverLittleIcon(true);
  }
  function handleHoverLeaveSmall(){
    setHoverLittleNum(null);
    setHoverLittleIcon(false);
  }
  //---------------------------------
  function handleStartMenu(e) {
    e.stopPropagation();
    setOpenedStartMenu(true);
  }
//FUNCTION FOR TURN OFF, OR UP AGAIN
  function handleTurnOff() {
    turnOff(true);
    // e.stopPropagation();
    setOpenedStartMenu(false);
    // setIsLoaded(false);
  }
  function turnOnLoad(e){
    e.stopPropagation();
    setOpenedStartMenu(false);
    setIsLoaded(false);
  }

  return (
    <div className="openedStartMenu" onClick={handleStartMenu}>
      <div className="headerStart">
        <div className="userIcon">
          <img src={usericon} />
          <p>UserName</p>
        </div>
      </div>

      <div className="iconsStart">
        <div className="leftSide">
          <div className="firstOnSide">
            <SmallIcon
              key='1'
              name="Internet"
              description="Internet Explorer"
              img={internet}
            />
            <SmallIcon
              key='2'
              name="E-mail"
              description="Outlook Express"
              img={email}
            />
            <p className="bottomLine"></p>
          </div>

          <div className="secondOnSide">
            {leftSideStartIcons.map((icon) => (
              <SmallIcon
                key={icon.name}
                description={icon.description}
                img={icon.img}
              />
            ))}
          </div>
          <div className="thirdOnLine">
            <p className="bottomLine"></p>
            <p
              className="allPrograms"
              onMouseEnter={() => handleHoverOn(2)}
              onMouseLeave={handleMouseLeave}
            >
              All Programs <b>▶</b>
            </p>
          </div>
        </div>

        <div className="rightSide">
          {rightSideStartIcons.map((icon) => (
            icon.separator ? <p className="bottomLine"></p> :
            <SmallIcon key={icon.name} name={icon.name} img={icon.img} handleHover={()=>handleHoverOn(icon.hoverNum)} />
          ))}
        </div>
      </div>
      <div className="footerStart">
        <div className="bottomStartBtn">
          <img src={logoff} />
          <div>
            <p className="smallIconName">
              <b>Log Off</b>
            </p>
          </div>
        </div>

        <div className="bottomStartBtn" onClick={()=>{
          turnOff()
          setOpenedStartMenu(false)
        }
        }>
          <img src={turnoff} />
          <div>
            <p className="smallIconName">
              <b>Turn Off Computer</b>
            </p>
          </div>
        </div>
      </div>

      {hovered && numberHovered === 1 && (
        <p className="emptyWindow">
          (Empty)
        </p>
      )}

      {hovered && numberHovered === 2 && (
        <div className="allProgramsOpened" onMouseEnter={() => handleHoverOn(2)}>
          {smallIconsStart.map((small) => (
            small.separator ? <p className="bottomLine"></p> :
            <AllProgramsIcons 
            key={small.name}
            name={small.name} 
            img={small.img} 
            arrow={small.arrow}
            handleHoverOn={()=>handleHoverOnSmall(small.hoverNum)} 
            handleHoverLeave ={()=>handleHoverLeaveSmall(small.hoverNum)} />
          ))}
        </div>
      )}

      {hoverLittleIcon && hoverLittleNum === 1 && 
      <div className="accesPrograms" onMouseEnter={()=>handleHoverOnSmall(1)} onMouseLeave={()=>handleHoverLeaveSmall()}>
        {smallIconsStartAccess.map((acces)=>(
          <AllProgramsIcons 
            key={acces.name}
            name={acces.name} 
            img={acces.img} 
            arrow={acces.arrow} />
        ))}
      </div>}

      {hoverLittleIcon && hoverLittleNum===2 && 
      <div className="gamesPrograms" onMouseEnter={()=>handleHoverOnSmall(2)} onMouseLeave={()=>handleHoverLeaveSmall()}>
        {smallIconsStartGames.map((game) => (
          <AllProgramsIcons key={game.name} name={game.name} img={game.img} />
        ))}
      </div>}

      {hoverLittleIcon && hoverLittleNum===3 && 
      <p className="setupEmpty" onMouseEnter={()=>handleHoverOnSmall(3)} onMouseLeave={()=>handleHoverLeaveSmall()}>
          (Empty)
      </p>}

    </div>
  );
}








function Windows({ loaded, openedStartMenu, setOpenedStartMenu, setIsLoaded }) {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [powerON, setPowerON] = useState(false);
  const [windowForTurnOff, setWindowForTurnOff] = useState(false);

  const [isDrawingRec, setIsDrawingRec] = useState(false);
  
  useEffect(() => (loaded === true ? setPowerON(true) : setPowerON(false)), []);

  const handleClick = (e) => {
    setSelectedComponent(e);
    setOpenedStartMenu(false);
  };
  return (
    <>
    <div
      className="desktop"
      onClick={(e) => {
        e.stopPropagation();
        handleClick(null);
      }}
      onMouseDown={(e) => {setIsDrawingRec(true)}}
      onMouseUp={() => {setIsDrawingRec(false)}}
      onMouseLeave={() => {setIsDrawingRec(false)}}
      style={{ opacity: powerON ? 1 : 0 }}
    >
      {windowsIcons.map((icon) => (
        <Icon  grid={icon.grid} text={icon.text} img={icon.img} key={icon.key} handleClick={()=> handleClick(icon.handle)} focused={selectedComponent === icon.focused} />
      ))}

      {/* {isDrawingRec && <SquareDrawer />} */}

      {openedStartMenu && (
        <StartMenu
          setOpenedStartMenu={setOpenedStartMenu}
          setIsLoaded={setIsLoaded}
          turnOff={()=>setWindowForTurnOff(true)}
        />
      )}
    </div>

    {windowForTurnOff && 
      <div className="turnOffWindow">

        <div className="turnOffHeader">
          <p>Log Off Windows</p>
          <img src={flag}/>
        </div>

        <div className="turnOffBorder"></div>
        <div className="turnOffBtn">
          <div>
            <img src={turnoff} alt='Stand By'/>
            <p>Stand By</p>
          </div>
          <div onClick={()=>setIsLoaded(true)}>
            <img src={turnoff} alt='Turn Off'/>
            <p>Turn Off</p>
          </div>
          <div>
            <img src={restart} alt='Restart'/>
            <p>Restart</p>
          </div>
        </div>
        <div className="turnOffFooter">
          <button onClick={()=>setWindowForTurnOff(false)}>Cancel</button>
        </div>
      </div>}
  </>
  );
}




export default App;