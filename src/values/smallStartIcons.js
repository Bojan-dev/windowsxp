import email from "../img/email.png";
import internet from "../img/internet.png";
import paint from "../img/paint.png"
import notepad from "../img/notepad.png";
import prompt from "../img/prompt.webp";
import appf from "../img/appf.png";
import catalog from "../img/catalog.png";
import update from "../img/update.png";
import remote from "../img/remote.png";
import vm from "../img/vm.png";
import access from "../img/accsess.png";
import wm from "../img/wm.png";
import wmp from "../img/wmp.png";
import calc from "../img/calc.png";
import book from "../img/book.png";

import ispades from "../img/ispades.png";
import ireversi from "../img/ireversi.png";
import iheart from "../img/iheart.png";
import icheckers from "../img/icheckers.png";
import ibackgammon from "../img/ibackgammon.png";
import freecell from "../img/freecell.png";
import heart from "../img/heart.png";
import solitaire from "../img/solitaire.png";
import spider from "../img/spider.png";
import pinball from "../img/pinball.png";
import mine from "../img/mine.png";

export const smallIconsStart = [
    {name: 'Set Program Access and Defaults', img: access},
    {name: 'Windows Catalog', img: catalog},
    {name: 'Windows Update', img: update},
    {separator: true},
    {name: 'Accessories', img: appf, arrow: "▶", hoverNum:1},
    {name: 'Games', img: appf, arrow: "▶", hoverNum:2},
    {name: 'Startup', img: appf, arrow: "▶", hoverNum:3},
    {name: 'Internet Explorer', img: internet},
    {name: 'Outlook Express', img: email},
    {name: 'Remote Assistance', img: remote},
    {name: 'Windows Media Player', img: wmp},
    {name: 'Windows Messenger', img: wm},
    {name: 'Windows Movie Maker', img: vm},
]

export const smallIconsStartAccess = [
    {name: 'Accessibility', img: appf, arrow: "▶", hoverNum:4},
    {name: 'Communications', img: appf, arrow: "▶", hoverNum:5},
    {name: 'Entertaiment', img: appf, arrow: "▶", hoverNum:6},
    {name: 'System Tools', img: appf, arrow: "▶", hoverNum:7},
    {name: 'Address Book', img: book},
    {name: 'Command Prompt', img: prompt},
    {name: 'Notepad', img: notepad},
    {name: 'Paint', img: paint},
    {name: 'Calculator', img: calc},
]

export const smallIconsStartGames = [
    {name: "FreeCell", img: freecell},
    {name: "Hearts", img: heart},
    {name: "Internet Backgammon", img: ibackgammon},
    {name: "Internet Checkers", img: icheckers},
    {name: "Internet Hearts", img: iheart},
    {name: "Internet Reversi", img: ireversi},
    {name: "Internet Spades", img: ispades},
    {name: "Minesweeper", img: mine},
    {name: "Pinball", img: pinball},
    {name: "Solitaire", img: solitaire},
    {name: "Spider Solitare", img: spider},
]