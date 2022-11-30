import {Counter} from './posts/Counter';

export default function Layout({children}){
    return(
        <div>
            <marquee style={{background: '#f0f0f0',color: 'purple', padding: '4px 8px', fontSize: '20px'}}>This is a banner</marquee>
            <Counter />
            {children}
        </div>
    );
}