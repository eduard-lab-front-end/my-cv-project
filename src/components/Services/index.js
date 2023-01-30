import './services.scss';
import { FaEarlybirds } from 'react-icons/fa'
import { MdComputer } from 'react-icons/md'
import { BiPaint } from 'react-icons/bi'


export const Services = () => {

    return (
        <div className="services-container">
            <h2 className='services-header'>Services</h2>
            <div className="services-cards">
                <div className="services-card">
                    <div className="serv-icon-wrapper"><FaEarlybirds className="serv-icon"/></div>
                    <p className='serv-name'>Web Design</p>
                    <p className="serv-descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quibusdam laudantium porro minus veritatis cupiditate natus fuga quae vero iste.</p>
                </div>
                <div className="services-card">
                    <div className="serv-icon-wrapper"><MdComputer className="serv-icon"/></div>
                    <p className='serv-name'>Web Design</p>
                    <p className="serv-descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quibusdam laudantium porro minus veritatis cupiditate natus fuga quae vero iste.</p>
                </div>
                <div className="services-card">
                    <div className="serv-icon-wrapper"><BiPaint className="serv-icon"/></div>
                    <p className='serv-name'>Web Design</p>
                    <p className="serv-descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quibusdam laudantium porro minus veritatis cupiditate natus fuga quae vero iste.</p>
                </div>
                <div className="services-card">
                    <div className="serv-icon-wrapper"><BiPaint className="serv-icon"/></div>
                    <p className='serv-name'>Web Design</p>
                    <p className="serv-descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quibusdam laudantium porro minus veritatis cupiditate natus fuga quae vero iste.</p>
                </div>
            </div>
        </div>
    )
}