import newfolder from "../img/newfolder.png";
export default function Icon({
    grid = "1/1",
    width = "60px",
    height = "60px",
    padding = "1px",
    text = "New Folder",
    img = newfolder,
    focused,
    handleClick,
    windowOpen,
    windowNum,
    addNumber
  }) {
    //STOP REACTING PARENT COMPONENT WHEN CLICKED ON CHILD COMPONENT
    function handleFocused(e) {
      e.stopPropagation();
      handleClick();
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
        onDoubleClick={()=>{
          windowOpen(true)
          // windowNum()
          addNumber()
        }}
      >
        <img
          src={img}
          alt={text}
          style={iconStyle}
          className={focused ? "focusedIcon" : ""}
        />
        <p className={focused ? "setBlue" : ""}>{text}</p>
      </div>
    );
  }