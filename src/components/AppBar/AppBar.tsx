import React from 'react';

function AppBar() {
  return (
    <>
      <div className="flex justify-center p-10">
        <p className="underline text-lg text-violet-300">MOVEA</p>
      </div>
      <ul>
        <li>Home</li>
        <li>Favorites</li>
      </ul>
    </>
  );
}

export default AppBar;