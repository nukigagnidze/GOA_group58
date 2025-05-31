import React from 'react';

function Authorization() {
  return (
    <form>
      <h2>Authorization</h2>
      <input type="text" placeholder="Username" /><br />
      <input type="password" placeholder="Password" /><br />
      <button type="submit">Login</button>
    </form>
  );
}

export default Authorization;
