'use client';
import React from 'react';

interface DraggableItemProps {
  id: string;
  isActive: boolean;
  imageSrc: string;
  name: string;
  onDragStart: (e: React.DragEvent, id: string) => void;
  onDragEnd: () => void;
}

const DraggableItem: React.FC<DraggableItemProps> = ({ 
  id, 
  isActive, 
  imageSrc, 
  name, 
  onDragStart, 
  onDragEnd 
}) => {
  return (
    <div
      draggable={isActive}
      onDragStart={(e) => onDragStart(e, id)}
      onDragEnd={onDragEnd}
      className={`cursor-pointer w-32 h-32 bg-white rounded-xl flex flex-col items-center justify-center p-4
        ${isActive ? 'hover:scale-105 transition-transform shadow-lg' : 'opacity-50'}`}
    >
      <img 
        src={imageSrc} 
        alt={name} 
        className="w-20 h-20 object-contain mb-2"
      />
      <span className="text-gray-800 text-lg font-medium text-center">{name}</span>
    </div>
  );
};

export default DraggableItem;