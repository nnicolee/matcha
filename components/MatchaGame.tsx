'use client';
import React, { useState } from 'react';
import DraggableItem from './DraggableItem';
import Bowl from './Bowl';

interface GameState {
  step: number;
  isDragging: boolean;
  currentItem: string | null;
}

interface Step {
  id: string;
  name: string;
  instruction: string;
  image: string;
}

const MatchaGame: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    step: 0,
    isDragging: false,
    currentItem: null
  });

  // steps
  const steps: Step[] = [
    { 
      id: 'sift', 
      name: 'Matcha', 
      instruction: 'drag the matcha powder through the sifter ૮꒰ྀི⸝⸝> . <⸝⸝꒱ྀིა',
      image: '/matcha_powder.png'
    },
    { 
      id: 'water', 
      name: 'Hot Water', 
      instruction: 'drag the hot water into the bowl ໒꒰ྀིっ˕ -｡꒱ྀི১',
      image: '/water_kettle.png'
    },
    { 
      id: 'whisk', 
      name: 'Whisk', 
      instruction: 'drag the whisk to mix ໒꒰ྀིᵔ ᵕ ᵔ ꒱ྀི১',
      image: '/matcha_whisk.png'
    },
    { 
      id: 'milk', 
      name: 'Cold Milk', 
      instruction: 'pour into cold milk to finish ૮꒰ྀི∩´ ᵕ `∩꒱ྀིა',
      image: '/milk.png'
    }
  ];

  const handleDragStart = (e: React.DragEvent, item: string) => {
    setGameState(prev => ({
      ...prev,
      isDragging: true,
      currentItem: item
    }));
  };

  // maybe add handle over if users don't drag it to the bowl
  const handleDragEnd = () => {
    if (gameState.currentItem === steps[gameState.step].id) {
      setGameState(prev => ({
        ...prev,
        isDragging: false,
        step: prev.step < steps.length ? prev.step + 1 : prev.step,
        currentItem: null
      }));
    } else {
      setGameState(prev => ({
        ...prev,
        isDragging: false,
        currentItem: null
      }));
    }
  };

  return (
    <div className="relative h-screen w-screen bg-pink-900 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[46vh] flex flex-col items-center justify-center p-8">
        <div className="text-center mb-12">
          {/* da title */}
          <h1 className="text-5xl font-bold text-white mb-6">how to make matcha ⋆౨ৎ˚⟡˖ ࣪</h1>
          <p className="text-2xl text-gray-200">
            {gameState.step < steps.length 
              ? steps[gameState.step].instruction
              : "your matcha is ready! ૮ ˶ᵔ ᵕ ᵔ˶ ა"}
          </p>
        </div>

        {/* da tools */}
        <div className="flex justify-around w-full max-w-3xl">
          {steps.map((step, index) => (
            <DraggableItem
              key={step.id}
              id={step.id}
              isActive={gameState.step === index}
              imageSrc={step.image}
              name={step.name}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
            />
          ))}
        </div>
      </div>

      {/* da bowl */}
      <div className="absolute bottom-0 left-0 right-0 h-[46vh]">
        <Bowl step={gameState.step} />
      </div>
    </div>
  );
};

export default MatchaGame;