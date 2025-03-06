import React, { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setProfile((prevprofile) => ({
      ...prevprofile,
      [name]: value,
    }));
  };
  return (
    <div>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handlechange}
          />
        </label>
      </div>

      <div>
        <label>
          Age:
          <input type="text" name="age" value={profile.age} onChange={handlechange} />
        </label>
      </div>

      <h3>Profile Information</h3>
      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
    </div>
  );
};

export default Profile;
