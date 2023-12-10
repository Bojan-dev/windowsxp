import flag from '../img/flag.png';
import forward from '../img/forward.png';
import back from '../img/back.png';
import dropdown from '../img/dropdown.png';
import runright from '../img/runright.png';
import search from '../img/searchnew.png';
import home from '../img/home.png';
import refresh from '../img/refresh.png';
import stop from '../img/stop.png';
import favorites from '../img/favorites.png';
import history from '../img/history.png';
import edit from '../img/edit.png';
import mail from '../img/mail.png';
import msn2 from '../img/msn2.png';
import miniPrint from '../img/miniPrint.png';
import explorer from '../img/explorerIcon.png';
import google from '../img/google.png';
import googleMic from '../img/googleMic.png';

import { FunctionBtn } from "./OpenedWindow";

export function OpenedExplorer({text='Internet Explorer', windowOpened, closeWindow}){
    return (
        <div className="openedExplorer">
              <div className="windowHeader">
                <div className="leftSideOpen">
                    <img src={explorer} />
                    <p>{text}</p>
                </div>

                <div className="rightSideOpen">
                    <FunctionBtn symbol='_' className='minimize'/>
                    <FunctionBtn symbol='&#128470;' className='maximaze' />
                    <FunctionBtn symbol='X' className='closeWindow' color='rgb(218, 70, 0)' windowOpened={windowOpened} closeWindow={closeWindow}/>
                </div>
              </div>
              <div className="windowContent">
                <div className='navBarMain'>
                    <div>
                        <p>File</p>
                        <p>Edit</p>
                        <p>View</p>
                        <p>Favorites</p>
                        <p>Tools</p>
                        <p>Help</p>
                    </div>
                    <div className='navBarFlag'>
                        <img src={flag} />
                    </div>
                </div>
                
                <div className='navBarIcon'>
                    <div className='arrowNav'>
                        <div className='grayScale'><img src={back} /> Back &#9660;</div>
                        <div className='grayScale'><img src={forward} /> &#9660;</div>
                        <div className='activeIcon'><img src={stop} /></div>
                        <div className='activeIcon'><img src={refresh} /></div>
                        <div className='activeIcon'><img src={home} /></div>
                    </div>
                    <div className='arrowNav'>
                        <div className='activeIcon'><img src={search} />Search</div>
                        <div className='activeIcon'><img src={favorites} />Favorites</div>
                        <div className='activeIcon'><img src={history} /></div>
                    </div>
                    <div className='arrowNavEnd'>
                        <div className='activeIcon'><img src={mail} /> &#9660;</div>
                        <div className='activeIcon'><img src={miniPrint} /></div>
                        <div className='grayScale'><img src={edit} /></div>
                        <div className='activeIcon'><img src={msn2} /></div>
                    </div>
                </div>

                <div className='footerNavBar'>
                    <p className='greyFont'>Address</p>
                    <div className='currentFolder'>
                        <span>
                            <img src={explorer} alt={text} />
                            <p>https://www.google.com/</p>
                        </span>
                        <img src={dropdown} />
                    </div>
                    <div className='runBtn'>
                        <img src={runright} />
                        <p>Go</p>
                    </div>
                    <div className='explorerLink'>
                        <p>Links &#187;</p>
                    </div>
                </div>
              </div>

              <div className="googleContent">
                <img src={google} className='googleTitle' />
                <div className='googleSearch'>
                    <input />
                    <img src={googleMic} />
                </div>
                <div className='googleBtns'>
                    <p>Google Search</p>
                    <p>I'm Feeling Lucky</p>
                </div>
              </div>
        </div>
    )
}