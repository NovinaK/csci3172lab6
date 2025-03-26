
import React from 'react';

const Projects = () => {
    return (
        <div
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: '100vh', padding: '1rem' }}
        >
            <div className="container p-5" style={{ maxWidth: '100%', width: '100%' }}>
                <h1>Projects</h1>
                <p>
                    Welcome to my projects page! Here, you’ll find a collection of my academic, personal, and collaborative projects that showcase my technical skills, problem-solving abilities, and passion for innovation.
                </p>
                <ol>
                    <li>
                        <h2>QuickCash – Local Job Finder App</h2>
                        <p><strong>Problem:</strong> Many students and freelancers struggle to find quick, small-paying jobs in their local area.</p>
                        <p><strong>Solution:</strong> QuickCash is an app that connects users with local job opportunities (e.g., pet walking, tutoring) while integrating an online payment system.</p>
                        <p><strong>Technologies Used:</strong> Python, Java, Firebase, PayPal API</p>
                        <p><strong>My Role:</strong> Led the backend development and integrated the payment system.</p>
                    </li>
                    <li>
                        <h2>Career Growth App</h2>
                        <p><strong>Problem:</strong> Job seekers often struggle with career planning, portfolio building, and networking.</p>
                        <p><strong>Solution:</strong> A structured app that enhances job searches with career roadmaps, skill-building tools, and job application tracking.</p>
                        <p><strong>Technologies Used:</strong> React, Node.js, MongoDB, AWS</p>
                        <p><strong>My Role:</strong> Designed and developed key features, focusing on user accessibility and UI/UX improvements.</p>
                    </li>
                    <li>
                        <h2>Online Food Ordering Website</h2>
                        <p><strong>Problem:</strong> Small restaurants need an efficient way to manage orders, reservations, and inventory.</p>
                        <p><strong>Solution:</strong> A responsive web app that streamlines customer orders, table reservations, and cart management.</p>
                        <p><strong>Technologies Used:</strong> HTML, CSS, JavaScript, PHP, MySQL</p>
                        <p><strong>My Role:</strong> Developed the order and cart system, ensuring smooth customer interactions.</p>
                    </li>
                    <li>
                        <h2>Automated Jukebox with Arduino</h2>
                        <p><strong>Problem:</strong> Manual music selection can be inefficient in public places.</p>
                        <p><strong>Solution:</strong> Built an automated jukebox using Arduino, allowing users to select songs via a digital interface.</p>
                        <p><strong>Technologies Used:</strong> Arduino, C++, Circuit Design</p>
                        <p><strong>My Role:</strong> Programmed the system and configured the hardware components.</p>
                    </li>
                    <li>
                        <h2>Community Interaction App (Figma Prototype)</h2>
                        <p><strong>Problem:</strong> Social media has reduced face-to-face interactions in communities.</p>
                        <p><strong>Solution:</strong> Designed a mobile app prototype to encourage local engagement, event sharing, and group discussions.</p>
                        <p><strong>Technologies Used:</strong> Figma, UX Research</p>
                        <p><strong>My Role:</strong> Led UI/UX design, conducted surveys, and presented findings.</p>
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default Projects;