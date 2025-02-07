import React from 'react';

interface BowlProps {
  step: number;
}

const Bowl: React.FC<BowlProps> = ({ step }) => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-[40%]">
        <div 
          className="absolute w-full aspect-square"
          style={{ top: '-100%' }}
        >
          <div className="w-full h-full rounded-full border-8 border-gray-300">
            <div 
              className={`w-full h-full rounded-full transition-all duration-500 ${
                step === 0 ? 'bg-transparent' :
                step === 1 ? 'bg-green-800' :
                step === 2 ? 'bg-green-600' :
                step === 3 ? 'bg-green-400' :
                'bg-green-400'
              }`} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bowl;