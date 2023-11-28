export default function SmallIcon({ name, img, description, handleHover, handleLeave }) {
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