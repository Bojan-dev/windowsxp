import { useState } from "react";

import usericon from "../img/usericon.jpeg";
import email from "../img/email.png";
import internet from "../img/internet.png";
import logoff from "../img/logof.png";
import turnoff from "../img/turnof.png";

import {SmallIcon} from "./SmallIcon"
import { AllProgramsIcons } from "./AllProgramsIcons";
import { leftSideStartIcons,rightSideStartIcons } from "./startIcons";
import { smallIconsStart, smallIconsStartAccess, smallIconsStartGames } from './smallStartIcons';

export function StartMenu({ setOpenedStartMenu, setIsLoaded, turnOff, closeMenu }) {
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
            }}>
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