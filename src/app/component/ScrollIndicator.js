// components/ScrollIndicator.js
const ScrollIndicator = () => {
  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <p className="text-xl mb-4">Scroll down to see the background image fade in</p>
        <div className="animate-bounce">
          <svg 
            className="w-12 h-12 mx-auto text-gray-500" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ScrollIndicator;