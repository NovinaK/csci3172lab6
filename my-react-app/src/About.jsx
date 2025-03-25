import React from 'react';

const About = () => {
    return (
        <div
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: '100vh', padding: '1rem' }}
        >
            <div className="container p-5" style={{ maxWidth: '100%', width: '100%' }}>
                <h1>About Me</h1>
                <p className="mb-4">
                    I am a dedicated and motivated student pursuing a Bachelor’s degree in Applied Computer Science at Dalhousie University, Canada. With a strong foundation in programming and problem-solving, I am eager to apply my knowledge to real-world challenges. 
                    My academic journey began with A-levels in Math, Physics, and Chemistry at Lyceum International School, followed by a Higher National Diploma in Mechatronics Engineering. My interest in technology led me to transition into Applied Computer Science, where I specialize in Python, Java, Web Development (HTML, CSS, JavaScript), and Microsoft Office tools. 
                    Beyond academics, I have experience in automation projects, including building an automated machine for color differentiation and an Arduino-powered jukebox. I excel in collaborative environments and value teamwork and innovation.
                    My career goal is to leverage technology to create meaningful solutions, particularly in fields like healthcare technology and automation. Passionate about continuous learning, I have also pursued Python programming certifications and a French language course to expand my skill set.
                    Outside of tech, I enjoy swimming, arts & crafts, and environmental volunteering, reflecting my enthusiasm for both creativity and community impact.
                </p>
                <h2>Education</h2>
                <ul className="mb-4">
                    <li>Bachelors Degree in Computer Science</li>
                    <li>Diploma in Mechatronics Engineering</li>
                    <li>Relevant Courses: Web Development, Software Engineering, Information Security</li>
                </ul>
                <h2>Skills</h2>
                <ul>
                    <li>JavaScript, React, HTML, CSS</li>
                    <li>Bootstrap, Tailwind CSS</li>
                    <li>Git, GitHub, Netlify Deployment</li>
                </ul>
            </div>
        </div>
    );
};

export default About;