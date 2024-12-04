
import { Route, Routes } from 'react-router-dom';
import SearchBar from './SearchBar'
import DetailPage from './DetailPage';

function App() {



  return (
    <>
      <Routes>
        <Route index element={<SearchBar />} />
        <Route path="/" element={<SearchBar />} />
        <Route path="/details" element={<SearchBar />} />
        <Route path="/details/:article" element={<DetailPage />} />

      </Routes>

    </>

  )
}

export default App
