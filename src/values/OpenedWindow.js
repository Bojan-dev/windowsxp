import newfolder from '../img/newfolder.png';
import mycomputer from '../img/mycomputer.png';
import flag from '../img/flag.png';
import forward from '../img/forward.png';
import back from '../img/back.png';
import up from '../img/up.png';
import search from '../img/searchnew.png';
import appf from '../img/appf.png';
import dropdown from '../img/dropdown.png';
import runright from '../img/runright.png';
import twoarrow from '../img/twoarrow.png';
import viewinfo from '../img/view-info.ico';
import addremove from '../img/addremove.png';
import panel from '../img/panelsmall.png';
import mydocuments from '../img/mydocumentSmall.png';
import mynetworkplace from '../img/networkplace.png';
import folder from '../img/folder.png';
import harddisk from '../img/harddisk.png';
import localdisk from '../img/localdisk.png';


export function OpenedWindow({img=mycomputer, text='My Computer', windowOpened, closeWindow}){
    return (
        <div className="openedWindow">
              <div className="windowHeader">
                <div className="leftSideOpen">
                    <img src={img} />
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
                        <div className='activeIcon'><img src={up} /></div>
                    </div>
                    <div className='arrowNav'>
                        <div className='activeIcon'><img src={search} /> Search</div>
                        <div className='activeIcon'><img src={newfolder} /> New Folder</div>
                    </div>
                    <div className='arrowNavEnd'>
                        <div className='activeIcon'><img src={appf} /> &#9660;</div>
                    </div>
                </div>

                <div className='footerNavBar'>
                    <p className='greyFont'>Address</p>
                    <div className='currentFolder'>
                        <span>
                            <img src={img} alt={text} />
                            <p>{text}</p>
                        </span>
                        <img src={dropdown} />
                    </div>
                    <div className='runBtn'>
                        <img src={runright} />
                        <p>Go</p>
                    </div>
                </div>
              </div>

              <div className="windowMainContent">
                <div className='leftMainContent'>

                    <div className='systemTask'>
                        <div className='taskWindow'>
                            <p>System Task</p>
                            <img src={twoarrow}/>
                        </div>
                        <IconTask img={viewinfo} name='View System Information' />
                        <IconTask img={addremove} name='Add or remove programs' />
                        <IconTask img={panel} name='Change a setting' />
                    </div>

                    <div className='systemTask'>
                        <div className='taskWindow'>
                                <p>Other Places</p>
                                <img src={twoarrow}/>
                            </div>
                            <IconTask img={mynetworkplace} name='My Network Places' />
                            <IconTask img={mydocuments} name='My Documents' />
                            <IconTask img={folder} name='Shared Documents' />
                            <IconTask img={panel} name='Control Panel' />
                        </div>
                    <div className='details'>
                    <div className='systemTask'>
                        <div className='taskWindow'>
                                <p>Details</p>
                                <img src={twoarrow}/>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className='rightMainContent'>
                    <div className='filesStored'>
                        <p className='titleOfGroup'>Files Stored on This Computer</p>
                        <p className='borderBotOfGroup'></p>
                        <div className='filesOfGroup'>
                            <FilesIcon name='Shared Documents' img={newfolder} />
                            <FilesIcon name="User's Documents" img={newfolder} />
                        </div>

                        <p className='titleOfGroup'>Hard Disk Drivers</p>
                        <p className='borderBotOfGroup'></p>
                        <FilesIcon name="Local Disk (C:)" img={harddisk} />

                        <p className='titleOfGroup'>Devices with Removable Storage</p>
                        <p className='borderBotOfGroup'></p>
                        <FilesIcon name="CD Drive (D:)" img={localdisk} />
                    </div>
                </div>

              </div>
        </div>
    )
}

export function FunctionBtn({symbol='', className, defaultCss='functionBtn', color='#rgb(0, 88, 238)', windowOpened, closeWindow}){
    return (
        <button className={className + ' ' + defaultCss} style={{background:color}}  onClick={()=>symbol === 'X' ? closeWindow() : null}>{symbol}</button>
    )
}

function IconTask({ name, img }) {
    return (
      <div className="iconTask">
        <img src={img} />
        <div className="nameIconTask">
          <p>{name}</p>
        </div>
      </div>
    );
  }

  function FilesIcon({ name, img }) {
    return (
      <div
        className="filesIcon">
        <img src={img} />
        <div>
          <p>{name}</p>
        </div>
      </div>
    );
  }