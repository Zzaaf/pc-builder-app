import React, { useState } from 'react';

function Profile() {
  const [name, setName] = useState('No name');
  const [email, setEmail] = useState('None');
  const [avatar, setAvatar] = useState('');

  return (
    <>
      <h1>Profile</h1>

      <div className="mb-3">
        <img src="https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=Sam" className="object-fit-cover border rounded" alt="avatar" />
        <input type="text" onChange={({ target }) => setName(target.value)} placeholder="Name" className="form-control mt-1" />
        <input type="text" onChange={({ target }) => setEmail(target.value)} placeholder="Email" className="form-control mt-1" />
        <select className="form-select mt-1" onChange={({ target }) => setAvatar(target.value)}>
          <option value="adventurer-neutral">Adventurer Neutral</option>
          <option value="bottts">Bottts</option>
          <option value="identicon">Identicon</option>
        </select>

        <button type="submit" className="mt-3">Set profile</button>
      </div>
    </>
  );
}

export default Profile;
