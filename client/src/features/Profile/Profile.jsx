/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';

function Profile({ profile, setProfile }) {
  return (
    <>
      <h1>Profile</h1>

      <div className="mb-3">
        <img src={`https://api.dicebear.com/7.x/${profile.avatar}/svg?seed=${profile.name}`} className="object-fit-cover border rounded" alt="avatar" />
        <input
          type="text"
          defaultValue={profile.name}
          onChange={({ target }) => setProfile((prevState) => ({ ...prevState, name: target.value }))}
          placeholder="Name"
          className="form-control mt-1"
        />
        <input type="text" onChange={({ target }) => setProfile((prevState) => ({ ...prevState, email: target.value }))} placeholder="Email" className="form-control mt-1" />
        <select className="form-select mt-1" onChange={({ target }) => setProfile((prevState) => ({ ...prevState, avatar: target.value }))}>
          <option value="bottts">Bottts</option>
          <option value="adventurer-neutral">Adventurer Neutral</option>
          <option value="identicon">Identicon</option>
        </select>

        <button type="submit" className="mt-3">Set profile</button>
      </div>
    </>
  );
}

export default Profile;
