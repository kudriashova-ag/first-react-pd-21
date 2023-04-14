import Avatar from "./Avatar";

export default function Profile({ person, size = 100 }) { 
  
  return (
    <>
      <Avatar avatar={person.avatar} size={size} />
      <h3>
        {person.name} {person.vip && "vip"}
      </h3>
    </>
  );
  
}

