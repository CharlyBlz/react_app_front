import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation' 
import NotesList from './components/NotesList' 
import CreateNote from './components/CreateNote' 

function App(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/"  exact element={<NotesList/>} />
      <Route path="/edit/:id" element={<CreateNote/>} />
      <Route path="/create" element={<CreateNote/>} />
    </Routes>
    </BrowserRouter>
  );
}
export default App;