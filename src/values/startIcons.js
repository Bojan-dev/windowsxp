import prompt from "../img/prompt.webp";
import msn from "../img/msn.png";
import notepad from "../img/notepad.png";
import wm from "../img/wm.png";
import wmp from "../img/wmp.png";
import newfolder from "../img/newfolder.png";
import mycomputer from "../img/mycomputer.png";
import mydocument from "../img/mydocument.png";
import recent from "../img/recent.png";
import picture from "../img/pictures.png";
import music from "../img/music.png";
import panel from "../img/panel.png";
import access from "../img/accsess.png";
import printer from "../img/printer.png";
import support from "../img/support.png";
import search from "../img/search.png";
import run from "../img/run.png";

export const leftSideStartIcons = [
  { description: "Command Prompt", img: prompt },
  { description: "MSN", img: msn },
  { description: "Windows Media Player", img: wmp },
  { description: "Windows Messenger", img: wm },
  { description: "Notepad", img: notepad },
  { description: "Default Folder", img: newfolder },
];

export const rightSideStartIcons = [
  {name: 'My Documents', img: mydocument},
  {name: 'My Recent Documents ▶', img: recent, hoverNum:1},
  {name: 'My Pictures', img: picture},
  {name: 'My Music', img: music},
  {name: 'My Computer', img: mycomputer},
  {separator:true},
  {name: 'Control Panel', img: panel},
  {name: 'Set Program Access and Defaults', img: access},
  {name: 'Printers and Faxes', img: printer},
  {separator:true},
  {name: 'Help and Support', img: support},
  {name: 'Search', img: search},
  {name: 'Run', img: run},
];