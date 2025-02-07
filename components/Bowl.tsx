import React from 'react';

interface BowlProps {
  step: number;
  isOver?: boolean;
}

const Bowl: React.FC<BowlProps> = ({ step, isOver = false }) => {
  const getCurrentImage = (): string | undefined => {
    switch(step) {
      case 1:
        return '/matcha_crumbs.png';
      case 2:
        return '/matcha_liquid.png';
      case 3:
        return '/foamy.png';
      case 4:
        return '/matcha_milk.png';
      default:
        return undefined;
    }
  };

  const currentImage = getCurrentImage();

  return (
    <div className="relative w-full h-full">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-[40%]">
        <div 
          className="absolute w-full aspect-square"
          style={{ top: '-100%' }}
        >
          <div className={`w-full h-full rounded-full border-8 transition-all duration-300 ${
            isOver ? 'border-white scale-105' : 'border-gray-300'
          }`}>
            <div className={`w-full h-full rounded-full transition-all duration-500 overflow-hidden ${
              step === 0 ? 'bg-white' :
              step === 2 ? 'bg-green-600' :
              step === 3 ? 'bg-green-400' :
              step === 4 ? 'bg-green-300' :
              'bg-white'
            }`}>
              {step > 0 && currentImage && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img 
                      src={currentImage}
                      alt={`Matcha Step ${step}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bowl;