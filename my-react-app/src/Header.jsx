import { Link } from 'react-router';

export default function Header() {
    return (
        <header style={{ background: '#f8f9fa', padding: '10px 20px' }}>
            <nav>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: '200px' }}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                </ul>
            </nav>
        </header>
    );
}
