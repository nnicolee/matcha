'use client';
import React, { useState } from 'react';
import DraggableItem from './DraggableItem';
import Bowl from './Bowl';
import CongratulationsModal from './CongratulationsModal';

interface GameState {
  step: number;
  isDragging: boolean;
  currentItem: string | null;
  isOverBowl: boolean;
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
    currentItem: null,
    isOverBowl: false
  });

  // steps
  const steps: Step[] = [
    { 
      id: 'sift', 
      name: 'Matcha', 
      instruction: 'drag the matcha powder to the bowl ૮꒰ྀི⸝⸝> . <⸝⸝꒱ྀིა',
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

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    
    const bowlElement = document.querySelector('.bowl-area');
    if (bowlElement) {
      const bowlRect = bowlElement.getBoundingClientRect();
      const isOverBowl = (
        e.clientX >= bowlRect.left &&
        e.clientX <= bowlRect.right &&
        e.clientY >= bowlRect.top &&
        e.clientY <= bowlRect.bottom
      );

      if (isOverBowl !== gameState.isOverBowl) {
        setGameState(prev => ({
          ...prev,
          isOverBowl
        }));
      }
    }
  };

  const handleDragLeave = () => {
    setGameState(prev => ({
      ...prev,
      isOverBowl: false
    }));
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (gameState.isOverBowl && gameState.currentItem === steps[gameState.step].id) {
      setGameState(prev => ({
        ...prev,
        isDragging: false,
        isOverBowl: false,
        step: prev.step + 1,
        currentItem: null
      }));
    } else {
      setGameState(prev => ({
        ...prev,
        isDragging: false,
        isOverBowl: false,
        currentItem: null
      }));
    }
  };

  const handleReset = () => {
    setGameState({
      step: 0,
      isDragging: false,
      currentItem: null,
      isOverBowl: false
    });
  };

  const isGameComplete = gameState.step >= steps.length;

  return (
    <div className="relative h-screen w-screen bg-pink-900 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[46vh] flex flex-col items-center justify-center p-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-6">how to make matcha ⋆౨ৎ˚⟡˖ ࣪</h1>
          <p className="text-2xl text-gray-200">
            {!isGameComplete 
              ? steps[gameState.step].instruction
              : "your matcha is ready! ૮ ˶ᵔ ᵕ ᵔ˶ ა"}
          </p>
        </div>

        <div className="flex justify-around w-full max-w-3xl">
          {steps.map((step, index) => (
            <DraggableItem
              key={step.id}
              id={step.id}
              isActive={gameState.step === index}
              imageSrc={step.image}
              name={step.name}
              onDragStart={handleDragStart}
              onDragEnd={() => {}}
            />
          ))}
        </div>
      </div>

      <div 
        className="absolute bottom-0 left-0 right-0 h-[46vh] bowl-area"
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <Bowl step={gameState.step} isOver={gameState.isOverBowl} />
      </div>

      <CongratulationsModal 
        isVisible={isGameComplete}
        onReset={handleReset}
      />
    </div>
  );
};

export default MatchaGame;