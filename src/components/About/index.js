import './about.scss';
import { TfiBookmarkAlt } from 'react-icons/tfi';
export const About = () => {

    return (
        <div className='about-container'>
            <h2 className='title'>About Me</h2>
            <p className='about-name'>I'm Eduard Labzenko and <span>Web Developer</span></p>
            <p className='about-descr'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis ea at ad quas officiis, dolore minus vel culpa tempora non qui, beatae laudantium eveniet illum facere eligendi quae molestiae adipisci distinctio, aspernatur aut esse nulla molestias. Quibusdam quae porro labore nemo, hic ab illum magni.
            </p>
            <div className="infoAndSkillsWrapper">
                <div className="info">
                    <div className='card'>
                        <p className='card-header'>Birthday:</p>
                        <p className='card-info'>22 May 1993</p>
                    </div>
                    <div className='card'>
                        <p className='card-header'>Age:</p>
                        <p className='card-info'>29</p>
                    </div>
                    <div className='card'>
                        <p className='card-header'>Website:</p>
                        <p className='card-info'>www.test.com</p>
                    </div>
                    <div className='card'>
                        <p className='card-header'>Email:</p>
                        <p className='card-info'>eduard-lab@web.de</p>
                    </div>
                    <div className='card'>
                        <p className='card-header'>Degree:</p>
                        <p className='card-info'>Frontend Kurs</p>
                    </div>
                    <div className='card'>
                        <p className='card-header'>Phone:</p>
                        <p className='card-info'>+49 177 1465002</p>
                    </div>
                    <div className='card'>
                        <p className='card-header'>City:</p>
                        <p className='card-info'>Saarbrücken</p>
                    </div>
                    <div className='card'>
                        <p className='card-header'>Freelance:</p>
                        <p className='card-info'>Maybe</p>
                    </div>
                    <div className='buttons'>
                        <button>Download CV</button>
                        <button>Hire Me</button>
                    </div>
                </div>
                <div className="skills">
                    <div className="skill-item">
                        <h5>HTML</h5>
                        <div className="progress">
                            <div className="progress-scale" style={{width:"95%"}}></div>
                            <div className="skill-percent">95%</div>
                        </div>
                    </div>
                    <div className="skill-item">
                        <h5>CSS</h5>
                        <div className="progress">
                            <div className="progress-scale" style={{width:"96%"}}></div>
                            <div className="skill-percent">96%</div>
                        </div>
                    </div>
                    <div className="skill-item">
                        <h5>JS</h5>
                        <div className="progress">
                            <div className="progress-scale" style={{width:"85%"}}></div>
                            <div className="skill-percent">85%</div>
                        </div>
                    </div>
                    <div className="skill-item">
                        <h5>React</h5>
                        <div className="progress">
                            <div className="progress-scale" style={{width:"90%"}}></div>
                            <div className="skill-percent">90%</div>
                        </div>
                    </div>
                    <div className="skill-item">
                        <h5>MySql</h5>
                        <div className="progress">
                            <div className="progress-scale" style={{width:"70%"}}></div>
                            <div className="skill-percent">70%</div>
                        </div>
                    </div>
                    <div className="skill-item">
                        <h5>TS</h5>
                        <div className="progress">
                            <div className="progress-scale" style={{width:"35%"}}></div>
                            <div className="skill-percent">35%</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="education-wrapper">
                <div className="education-container">
                    <h2>Education</h2>
                    <div className="education-section">
                        <div className="education-info">
                            <p className='date'><TfiBookmarkAlt/><span>2013-2015</span></p>
                            <p className='degree'>Master in Computer Science</p>
                            <p className='degree-descr'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quibusdam eaque, rerum pariatur deserunt quas facilis voluptatem est. Officia, fuga.</p>
                        </div>
                        <div className="education-info">
                            <p className='date'><TfiBookmarkAlt/><span>2013-2015</span></p>
                            <p className='degree'>Master in Computer Science</p>
                            <p className='degree-descr'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quibusdam eaque, rerum pariatur deserunt quas facilis voluptatem est. Officia, fuga.</p>
                        </div>
                        <div className="education-info">
                            <p className='date'><TfiBookmarkAlt/><span>2013-2015</span></p>
                            <p className='degree'>Master in Computer Science</p>
                            <p className='degree-descr'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quibusdam eaque, rerum pariatur deserunt quas facilis voluptatem est. Officia, fuga.</p>
                        </div>
                        <div className="education-info">
                            <p className='date'><TfiBookmarkAlt/><span>2013-2015</span></p>
                            <p className='degree'>Master in Computer Science</p>
                            <p className='degree-descr'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quibusdam eaque, rerum pariatur deserunt quas facilis voluptatem est. Officia, fuga.</p>
                        </div>
                    </div>
                </div>
                <div className="education-container">
                    <h2>Education</h2>
                    <div className="education-section">
                        <div className="education-info">
                            <p className='date'><TfiBookmarkAlt/><span>2013-2015</span></p>
                            <p className='degree'>Master in Computer Science</p>
                            <p className='degree-descr'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quibusdam eaque, rerum pariatur deserunt quas facilis voluptatem est. Officia, fuga.</p>
                        </div>
                        <div className="education-info">
                            <p className='date'><TfiBookmarkAlt/><span>2013-2015</span></p>
                            <p className='degree'>Master in Computer Science</p>
                            <p className='degree-descr'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quibusdam eaque, rerum pariatur deserunt quas facilis voluptatem est. Officia, fuga.</p>
                        </div>
                        <div className="education-info">
                            <p className='date'><TfiBookmarkAlt/><span>2013-2015</span></p>
                            <p className='degree'>Master in Computer Science</p>
                            <p className='degree-descr'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quibusdam eaque, rerum pariatur deserunt quas facilis voluptatem est. Officia, fuga.</p>
                        </div>
                        <div className="education-info">
                            <p className='date'><TfiBookmarkAlt/><span>2013-2015</span></p>
                            <p className='degree'>Master in Computer Science</p>
                            <p className='degree-descr'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quibusdam eaque, rerum pariatur deserunt quas facilis voluptatem est. Officia, fuga.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}