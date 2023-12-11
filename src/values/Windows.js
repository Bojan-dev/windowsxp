import { useEffect, useState } from "react";

import Icon from "./IconComponent";
import { StartMenu } from "./StartMenu";
import { windowsIcons } from "./Icon";
import { OpenedWindow } from "./OpenedWindow";
import { OpenedExplorer } from "./OpenedExplorer";
import SquareDrawer from "./SquareDrawer";

import turnoff from "../img/turnof.png";
import restart from "../img/restart.ico";
import flag from "../img/flag.png";

export function Windows({ loaded, openedStartMenu, setOpenedStartMenu, setIsLoaded, windowOpened, setWindowOpened, windowNum, setWindowNum, addNumber, closeWindow }) {
    const [selectedComponent, setSelectedComponent] = useState(null);
    const [powerON, setPowerON] = useState(false);
    const [windowForTurnOff, setWindowForTurnOff] = useState(false);
    const [zIndexNum, setZIndexNum] = useState();
  
    const [isDrawingRec, setIsDrawingRec] = useState(false);

    // const [windowOpened, setWindowOpened] = useState(false);
    // const [windowNum, setWindowNum] = useState(null);
    
    useEffect(() => (loaded === true ? setPowerON(true) : setPowerON(false)), []);
  
    const handleClick = (e) => {
      setSelectedComponent(e);
      setZIndexNum(e);
      setOpenedStartMenu(false);
    };

    const handleMouseDown = (e) =>{
      if(e.target === document.querySelector('.desktop')){
        e.preventDefault();
        setIsDrawingRec(true);
        setOpenedStartMenu(false);
        setSelectedComponent(null)
      }
    }
    // cursor:isDrawingRec ? 'crosshair' : 'default'

    return (
      <>
      <div
        className= 'desktop'
        onClick={(e) => {
          e.stopPropagation();
          handleClick(null);
        }}
        onMouseDown={(e)=>handleMouseDown(e)}
        onMouseUp={() => {setIsDrawingRec(false)}}
        onMouseLeave={() => {setIsDrawingRec(false)}}
        style={{ opacity: powerON ? 1 : 0, filter:windowForTurnOff ?  'grayscale(100%)' : null,}}
      >
        {windowsIcons.map((icon) => (
          <Icon  grid={icon.grid} text={icon.text} img={icon.img} key={icon.key} handleClick={()=> handleClick(icon.handle)} focused={selectedComponent === icon.focused} windowOpen={setWindowOpened} addNumber={()=>addNumber(icon.handle)} setZIndexNum={()=>setZIndexNum(icon.handle)} zIndexNum={zIndexNum} />
          // windowNum={()=>setWindowNum(icon.handle)} 
        ))}
  
        {isDrawingRec && <SquareDrawer />}
  
        {openedStartMenu && (
          windowForTurnOff ||
          <StartMenu
            setOpenedStartMenu={setOpenedStartMenu}
            setIsLoaded={setIsLoaded}
            turnOff={()=>setWindowForTurnOff(true)}
          />
        )}
      </div>

        {windowOpened && windowNum.includes(2) && <OpenedWindow windowOpened={setWindowOpened} closeWindow={()=>closeWindow(2)} zIndexNum />}
        {windowOpened && windowNum.includes(4) && <OpenedExplorer windowOpened={setWindowOpened} closeWindow={()=>closeWindow(4)} zIndexNum />}


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
            <div>
              <img src={turnoff} alt='Turn Off' onClick={()=>{
                setOpenedStartMenu(false);
                setIsLoaded(false);
                }}/>
              <p>Turn Off</p>
            </div>
            <div>
              <img src={restart} alt='Restart'/>
              <p>Restart</p>
            </div>
          </div>
          <div className="turnOffFooter">
            <button onClick={()=>{
              setWindowForTurnOff(false);
              setOpenedStartMenu(false);
              }}>Cancel</button>
          </div>
        </div>}
    </>
    );
  }