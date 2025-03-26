import { Routes, Route } from 'react-router';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import NotFound from './NotFound';
import Layout from './Layout';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
