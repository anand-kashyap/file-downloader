import './App.css';
import { FileDownload } from './components/FileDownload/FileDownload';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>File Downloader via streaming</h1>
      </header>
        <FileDownload />
    </div>
  );
}

export default App;
