import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import Card from './components/Card';

function App() {
  return (
    <div>
      <h1>Selamat Datang</h1>
      <Button />
      <Counter />
      <Card title="Artikel 1" description="Ini adalah artikel pertama" />
      <Card title="Artikel 2" description="Ini adalah artikel kedua" />
      <Card title="Artikel 3" description="Ini adalah artikel ketiga" />
    </div>
  );
}

export default App;
