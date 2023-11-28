export function AllProgramsIcons({ name, img, arrow, handleHoverOn, handleHoverLeave }) {
    return (
      <div className="littleIconApp" onMouseEnter={handleHoverOn} onMouseLeave={handleHoverLeave}>
        <img src={img} />
        <div className="nameIconAll">
          <p>{name}</p>
          <p>{arrow}</p>
        </div>
      </div>
    );
  }