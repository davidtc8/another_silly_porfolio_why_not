{isOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-500 bg-opacity-50">
    <div className="relative p-8 bg-white rounded-lg shadow-lg">
      {/* Close button */}
      <button 
        className="absolute top-0 right-0 m-4 text-gray-700 hover:text-red-500"
        onClick={togglePopup}
      >
        &times;
      </button>

      {/* Image */}
      <img src={imageUrl} alt="Popup" className="w-full h-auto" />
    </div>
  </div>
)}
