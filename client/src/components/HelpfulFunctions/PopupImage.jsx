import { useState } from "react";

export default function PopupImage({ imageUrl, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        {/* Link to open the popup */}
        <a 
            onClick={togglePopup}
            style={{ color: "#00ADB5", cursor: 'pointer'}}
        >
            {children}
        </a>

        {/* Popup */}
        <div 
            className={`fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-500 bg-opacity-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            onClick={togglePopup}
        >
            <div 
            className={`image_experience relative p-8 bg-white rounded-lg shadow-lg w-auto h-1/2 transform transition-transform duration-300 ${isOpen ? 'scale-200' : 'scale-90'}`}
            onClick={(e) => e.stopPropagation()}
            >
            {/* Close button */}
            <button 
                className="absolute top-0 right-0 m-4 text-gray-700 hover:text-red-500"
                onClick={togglePopup}
            >
                &times;
            </button>

            {/* Image container */}
            <div className="h-full overflow-hidden">
                <img 
                src={imageUrl} 
                alt="Popup" 
                className="w-full h-full object-contain" 
                />
            </div>
            </div>
        </div>
        </>
    );
}