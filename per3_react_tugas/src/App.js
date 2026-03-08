import './App.css';
import { useState } from 'react';
import Button from './components/Button';
import Card from './components/Card';
import Header from './components/Header';

function App() {
  const [tampilkan, setTampilkan] = useState(true);

  const handleToggle = () => {
    setTampilkan(!tampilkan);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Header tampilkan={tampilkan} />
      <Button tampilkan={tampilkan} onToggle={handleToggle} />
      {tampilkan && <Card judul="Moving (2023)" deskripsi="A supernatural people fighting together to save the world" />}
      {tampilkan && <Card judul="Can This Love Be Translated (2025)" deskripsi="A story about a man who can translate any language" />}
      {tampilkan && <Card judul="All of us are dead (2024)" deskripsi="Zombie in school" />}
    </div>
  );
}

export default App;
