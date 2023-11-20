import { useEffect, useState } from "react";
import "./App.css";

// Imports img
import flag from "./img/flag.png";
import speaker from "./img/speaker.webp";
import mycomputer from "./img/mycomputer.png";
import recycle from "./img/recycle.png";
import newfolder from "./img/newfolder.png";
import internet from "./img/internet.png";
import usericon from "./img/usericon.jpeg";
import winamp from "./img/winamp.png";

import email from "./img/email.png";
import msn from "./img/msn.png";
import notepad from "./img/notepad.png";
import prompt from "./img/prompt.webp";
import wm from "./img/wm.png";
import wmp from "./img/wmp.png";

import mydocument from "./img/mydocument.png";
import recent from "./img/recent.png";
import picture from "./img/pictures.png";
import music from "./img/music.png";
import panel from "./img/panel.png";
import acces from "./img/acces.png";
import printer from "./img/printer.png";
import support from "./img/support.png";
import search from "./img/search.png";
import run from "./img/run.png";
import logoff from "./img/logof.png";
import turnoff from "./img/turnof.png";
import appf from "./img/appf.png";
import catalog from "./img/catalog.png";
import update from "./img/update.png";
import remote from "./img/remote.png";
import vm from "./img/vm.png";
import access from "./img/accsess.png";

const startIcons = [
  { description: "Command Prompt", img: prompt },
  { description: "Command Prompt", img: prompt },
  { description: "Command Prompt", img: prompt },
  { description: "Command Prompt", img: prompt },
];

const allIcons = [
  { name: "Command Prompt", img: prompt },
  { name: "Command Prompt", img: prompt },
  { name: "Command Prompt", img: prompt },
  { name: "Command Prompt", img: prompt, separator: true },
  { name: "Command Prompt", img: prompt },
];

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

function Loader({ clearLoader }) {
  return (
    <div class="window" onAnimationStart={clearLoader}>
      <div class="logo">
        <p class="top">Microsoft</p>
        <p class="mid">
          Windows<span>XP</span>
        </p>
        <p class="bottom">Professional</p>
      </div>
      <div class="container">
        <div class="box"></div>
        <div class="box"></div>
        <div class="box"></div>
      </div>
    </div>
  );
}

function StartMenu({ setOpenedStartMenu, setIsLoaded }) {
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

    //For little icon in start menu
    setHoverLittleNum(num);
    setHoverLittleIcon(true);
  }
  function handleMouseLeave() {
    setHovered(false);
    setNumberHovered(null);

    //For little icon in start menu
    setHoverLittleNum(null);
    setHoverLittleIcon(false);
  }

  //===================

  //FOR HOVER ON ALL PROGRAMS-------------
  // const [hoverAllPrograms, setHoverAllPrograms] = useState(false);
  // function handleHoverAllPrograms(){
  //   setHoverAllPrograms(true);
  // }
  // function handleMouseLeaveAllPrograms(){
  //   setHoverAllPrograms(false);
  // }
  //--------------------------------------

  function handleStartMenu(e) {
    e.stopPropagation();
    setOpenedStartMenu(true);
  }

  function handleTurnOff(e) {
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
              name="Internet"
              description="Internet Explorer"
              img={internet}
            />
            <SmallIcon
              name="E-mail"
              description="Outlook Express"
              img={email}
            />
            <p className="bottomLine"></p>
          </div>
          <div className="secondOnSide">
            {startIcons.map((icon) => (
              <SmallIcon description={icon.description} img={icon.img} />
            ))}
            <SmallIcon description="Command Prompt" img={prompt} />
            <SmallIcon description="MSN" img={msn} />
            <SmallIcon description="Windows Media Player" img={wmp} />
            <SmallIcon description="Windows Messenger" img={wm} />
            <SmallIcon description="Notepad" img={notepad} />
            <SmallIcon description="Default Folder" img={newfolder} />
          </div>

          <div className="thirdOnLine">
            <p className="bottomLine"></p>
            <p
              className="allPrograms"
              onMouseEnter={() => handleHoverOn(2)}
              onMouseLeave={handleMouseLeave}
            >
              All Programs <b>▶</b>{" "}
            </p>
          </div>
        </div>

        <div className="rightSide">
          {allIcons.map((icon) =>
            icon.separator ? (
              <>
                <p className="bottomLine"></p>
                <SmallIcon name="My Documents" img={mydocument} />
              </>
            ) : (
              <SmallIcon name="My Documents" img={mydocument} />
            )
          )}
          <SmallIcon name="My Documents" img={mydocument} />
          <SmallIcon
            name="My Recent Documents ▶"
            img={recent}
            handleHover={() => handleHoverOn(1)}
            handleLeave={handleMouseLeave}
          />
          <SmallIcon name="My Pictures" img={picture} />
          <SmallIcon name="My Music" img={music} />
          <SmallIcon name="My Computer" img={mycomputer} />
          <p className="bottomLine"></p>
          <SmallIcon name="Control Panel" img={panel} />
          <SmallIcon name="Set Program Access and Defaults" img={acces} />
          <SmallIcon name="Printers and Faxes" img={printer} />
          <p className="bottomLine"></p>
          <SmallIcon name="Help and Support" img={support} />
          <SmallIcon name="Search" img={search} />
          <SmallIcon name="Run" img={run} />
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

        <div className="bottomStartBtn" onClick={handleTurnOff}>
          <img src={turnoff} />
          <div>
            <p className="smallIconName">
              <b>Turn Off Computer</b>
            </p>
          </div>
        </div>
      </div>

      {hovered && numberHovered === 1 && (
        <p className="emptyWindow" onMouseEnter={() => handleHoverOn(1)}>
          (Empty)
        </p>
      )}

      {hovered && numberHovered === 2 && (
        <div
          className="allProgramsOpened"
          onMouseEnter={() => handleHoverOn(2)}
        >
          <AllProgramsIcons
            name="Set Program Access and Defaults"
            img={access}
          />
          <AllProgramsIcons name="Windows Catalog" img={catalog} />
          <AllProgramsIcons name="Windows Update" img={update} />
          <p className="bottomLine"></p>
          <AllProgramsIcons name="Accessories" arrow="▶" img={appf} />
          <AllProgramsIcons name="Games" arrow="▶" img={appf} />
          <AllProgramsIcons name="Startup" arrow="▶" img={appf} />
          <AllProgramsIcons name="Internet Explorer" img={internet} />
          <AllProgramsIcons name="Outlook Express" img={email} />
          <AllProgramsIcons name="Remote Assistance" img={remote} />
          <AllProgramsIcons name="Windows Media Player" img={wmp} />
          <AllProgramsIcons name="Windows Messenger" img={wm} />
          <AllProgramsIcons name="Windows Movie Maker" img={vm} />
        </div>
      )}

      <div className="accesPrograms">
        <AllProgramsIcons name="Accessibility" arrow="▶" img={appf} />
        <AllProgramsIcons name="Communications" arrow="▶" img={appf} />
        <AllProgramsIcons name="Entertaiment" arrow="▶" img={appf} />
        <AllProgramsIcons name="System Tools" arrow="▶" img={appf} />
        <AllProgramsIcons name="Address Book" img={appf} />
        <AllProgramsIcons name="Command Prompt" img={appf} />
        <AllProgramsIcons name="Notepad" img={appf} />
        <AllProgramsIcons name="Paint" img={appf} />
        <AllProgramsIcons name="Calculator" img={appf} />
      </div>
    </div>
  );
}

function AllProgramsIcons({ name, img, arrow }) {
  return (
    <div className="littleIconApp">
      <img src={img} />
      <div className="nameIconAll">
        <p>{name}</p>
        <p>{arrow}</p>
      </div>
    </div>
  );
}

function SmallIcon({ name, img, description, handleHover, handleLeave }) {
  return (
    <div
      className="smallIcon"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <img src={img} />
      <div>
        <p className="smallIconName">
          <b>{name}</b>
        </p>
        <p className="smallIconDescription">{description}</p>
      </div>
    </div>
  );
}

function Windows({ loaded, openedStartMenu, setOpenedStartMenu, setIsLoaded }) {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [powerON, setPowerON] = useState(false);

  useEffect(() => (loaded === true ? setPowerON(true) : setPowerON(false)), []);

  const handleClick = (e) => {
    setSelectedComponent(e);
    setOpenedStartMenu(false);
  };

  return (
    <div
      className="desktop"
      onClick={(e) => handleClick(null)}
      style={{ opacity: powerON ? 1 : 0 }}
    >
      <Icon
        key={1}
        onClick={() => handleClick(1)}
        focused={selectedComponent === 1}
      />
      <Icon
        grid="11 / 1"
        text="My Computer"
        img={mycomputer}
        key={2}
        onClick={() => handleClick(2)}
        focused={selectedComponent === 2}
      />
      <Icon
        grid="11 / 11"
        text="Recycle Bin"
        img={recycle}
        key={3}
        onClick={() => handleClick(3)}
        focused={selectedComponent === 3}
      />
      <Icon
        grid="11 / 6"
        text="Internet Explorer"
        img={internet}
        key={4}
        onClick={() => handleClick(4)}
        focused={selectedComponent === 4}
      />
      <Icon
        grid="5 / 1"
        text="Winamp"
        img={winamp}
        key={5}
        onClick={() => handleClick(5)}
        focused={selectedComponent === 5}
      />
      {openedStartMenu && (
        <StartMenu
          setOpenedStartMenu={setOpenedStartMenu}
          setIsLoaded={setIsLoaded}
        />
      )}
    </div>
  );
}

function Icon({
  grid = "1/1",
  width = "60px",
  height = "60px",
  padding = "1px",
  text = "New Folder",
  img = newfolder,
  focused,
  onClick,
}) {
  //STOP REACTING PARENT COMPONENT WHEN CLICKED ON CHILD COMPONENT
  function handleFocused(e) {
    e.stopPropagation();
    onClick();
  }

  const iconStyle = {
    width: width,
    height: height,
    padding: padding,
  };

  return (
    <div
      className="defaultIcon"
      style={{ gridArea: grid }}
      onClick={handleFocused}
    >
      <img
        src={img}
        style={iconStyle}
        className={focused ? "focusedIcon" : ""}
      />
      <p className={focused ? "setBlue" : ""}>{text}</p>
    </div>
  );
}

function MenuClock() {
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
//OVDE JE DUGME START MENU ZA OTVARANJE PROZORA
function Navbar({ handleStartMenu }) {
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

export default App;

// SIFRA ZA CROSSOVER SAJT: 19saobracajcume93M@
/*
import React, { Component } from 'react';

class RectangleDrag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDragging: false,
      startX: 0,
      startY: 0,
      endX: 0,
      endY: 0,
    };
  }

  handleMouseDown = (e) => {
    this.setState({
      isDragging: true,
      startX: e.clientX,
      startY: e.clientY,
      endX: e.clientX,
      endY: e.clientY,
    });
  };

  handleMouseMove = (e) => {
    if (this.state.isDragging) {
      this.setState({
        endX: e.clientX,
        endY: e.clientY,
      });
    }
  };

  handleMouseUp = () => {
    this.setState({
      isDragging: false,
    });
  };

  render() {
    const { startX, startY, endX, endY } = this.state;
    const width = Math.abs(endX - startX);
    const height = Math.abs(endY - startY);

    return (
      <div
        onMouseDown={this.handleMouseDown}
        onMouseMove={this.handleMouseMove}
        onMouseUp={this.handleMouseUp}
        style={{
          position: 'absolute',
          border: '1px solid #000',
          background: 'rgba(0, 0, 0, 0.2)',
          left: Math.min(startX, endX),
          top: Math.min(startY, endY),
          width: width,
          height: height,
        }}
      >
        Drag me
      </div>
    );
  }
}

export default RectangleDrag;

*/
