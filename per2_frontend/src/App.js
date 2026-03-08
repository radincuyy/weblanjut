import React from 'react';
import UserList from './components/UserList.js';
import FilmList from './components/FilmList.js';
function App() {
  return (
    <div>
      <h1>Aplikasi Web Modular</h1>
      <UserList />
      <FilmList />
    </div>
  );
}
export default App;