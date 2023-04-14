import React from 'react';

const Avatar = ({avatar, size}) => {
  return (
    <img
      src={avatar}
      alt=""
      className="photo"
      style={{
        border: "1px #333 solid",
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
        objectFit: "cover",
      }}
    />
  );
}

export default Avatar;
