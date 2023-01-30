import './home.scss';

// import ProfilePhoto from '../../img/IMG.jpeg'

export const Home = () => {

    return ( 
        <div className="home-container">
            <div className="home-section">
                <h1 className='my-name'>
                    Hello, my name is 
                    <span> Eduard Labzenko</span>
                </h1>
                <p className='i-am'>I'm a <span>Frontend developer</span></p>
                <p className='descr'>I'm a novice frontend developer,
                    skilled and motivated, able to quickly adapt to complex situations 
                    and with a great desire to learn and develop.
                </p>
                <button className='more'>More about me</button>
            </div>
            <div className="img-section">
                <figure className='img'>
                   
                </figure>
            </div>
        </div>
    )
}