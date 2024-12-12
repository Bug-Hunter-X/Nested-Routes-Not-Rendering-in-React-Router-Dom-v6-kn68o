import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="about" element={<About />} />
        </Route> 
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  let location = useLocation();
  return (
    <div>
      Home {location.pathname}
    </div>
  );
}

function About() {return <div>About</div>}
function NotFound() {return <div>Not Found</div>}

export default App;