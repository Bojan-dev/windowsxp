import { useState } from "react";
import "./App.css";

import Loader from "./values/Loader";
import { Navbar } from "./values/Navbar";
import {Windows} from './values/Windows';

function App() {
  //POSTAVICU TRUE, DA NE BI UCITAVAO <LOADER />
  const [isLoaded, setIsLoaded] = useState(true);

  const [windowOpened, setWindowOpened] = useState(false);
  const [windowNum, setWindowNum] = useState([]);

  function addNumber(newElement){
    const newArr = [...windowNum,newElement];
    setWindowNum(newArr);
  }
  console.log(windowNum)
  function closeWindow(index){
    const newArr = windowNum.filter(num=>num !== index);
    setWindowNum(newArr)
  }

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
          windowOpened={windowOpened}
          setWindowOpened={setWindowOpened}
          windowNum={windowNum}
          setWindowNum={setWindowNum}
          addNumber={addNumber}
          closeWindow={closeWindow}
        />
      )}
      {isLoaded && (
        <Navbar loaded={isLoaded} handleStartMenu={handleStartMenu} windowOpened={windowOpened} windowNum={windowNum} />
      )}
    </>
  );
}

export default App;