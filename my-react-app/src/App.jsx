import { Routes, Route } from 'react-router';
import Home from './home';
import About from './about';
import Projects from './projects';
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
