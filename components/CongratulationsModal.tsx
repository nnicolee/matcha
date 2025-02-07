import React from 'react';

interface CongratulationsModalProps {
  onReset: () => void;
  isVisible: boolean;
}

const CongratulationsModal: React.FC<CongratulationsModalProps> = ({ onReset, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-2xl p-8 text-center max-w-md mx-4 transform transition-all duration-500 animate-fadeIn">
        <h2 className="text-4xl font-bold mb-4 text-pink-900">congratulations! ≧◡≦</h2>
        <p className="text-xl mb-6 text-gray-700">you made a perfect matcha latte!</p>
        <button 
          onClick={onReset}
          className="px-6 py-3 bg-pink-900 text-white rounded-xl text-lg font-medium
                     hover:bg-pink-800 transition-colors duration-200 transform hover:scale-105"
        >
          make another one! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧
        </button>
      </div>
    </div>
  );
};

export default CongratulationsModal;