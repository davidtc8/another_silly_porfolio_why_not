import { useState, useEffect, useRef } from 'react';

export default function ReadMore({children}) {
    let text = children;
    // Grabbing the content
    text = text.props['children'].props.children
    const [isReadMore, setIsReadMore] = useState(true);
    const [textHeight, setTextHeight] = useState('800px');
    const [expanded, setExpanded] = useState(false);
    const textRef = useRef(null);

    useEffect(() => {
        if (textRef.current) {
        const height = textRef.current.scrollHeight;
        setTextHeight(`${height}px`);
        }
    }, [text]);

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
        setExpanded(!expanded);
        if (textRef.current) {
        const height = textRef.current.scrollHeight;
        setTextHeight(`${height}px`);
        }
    };
    
    return (
        <div className='test_div transition delay-700 duration-300 ease-in-out'>
            <div 
            className={`text ${!isReadMore ? "expanded" : ""}`} 
            style={{ maxHeight: expanded ? textHeight : '100px' }}
            >
                {isReadMore  ? null : text}
                <span
                    onClick={toggleReadMore}
                    className={`read-or-hide ${!isReadMore ? "expanded" : ""}`}
                    style={{ color: "#00ADB5", cursor: 'pointer'}}
                >  
                    {isReadMore ? "Position Activities" : " show less"}
                </span>
            </div>
        </div>
    );
}