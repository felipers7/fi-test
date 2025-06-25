import React, { useRef, useCallback } from 'react';
import { useDrag, useDrop } from 'react-dnd';

interface DraggableCardProps {
  id: string;
  index: number;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
  children: React.ReactNode;
  isDarkMode?: boolean;
}

interface DragItem {
  type: string;
  id: string;
  index: number;
}

export const DraggableCard: React.FC<DraggableCardProps> = ({
  id,
  index,
  moveCard,
  children,
  isDarkMode = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [{ handlerId }, drop] = useDrop({
    accept: 'financial-card',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: DragItem, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current.getBoundingClientRect();

      // Get horizontal middle
      const hoverMiddleX = (hoverBoundingRect.right - hoverBoundingRect.left) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();

      if (!clientOffset) {
        return;
      }

      // Get pixels to the left
      const hoverClientX = clientOffset.x - hoverBoundingRect.left;

      // Only perform the move when the mouse has crossed half of the item's width
      // When dragging to the right, only move when the cursor is beyond 50%
      // When dragging to the left, only move when the cursor is before 50%

      // Dragging to the right
      if (dragIndex < hoverIndex && hoverClientX < hoverMiddleX) {
        return;
      }

      // Dragging to the left
      if (dragIndex > hoverIndex && hoverClientX > hoverMiddleX) {
        return;
      }

      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex);

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag, preview] = useDrag({
    type: 'financial-card',
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  // Combine drag and drop refs
  const dragRef = drag(drop(ref));

  // Apply styles based on drag state
  const opacity = isDragging ? 0.4 : 1;
  const transform = isDragging ? 'scale(1.05) rotate(2deg)' : 'none';
  const zIndex = isDragging ? 1000 : 'auto';

  return (
    <div
      ref={dragRef}
      style={{
        opacity,
        transform,
        zIndex,
        transition: isDragging ? 'none' : 'all 0.2s ease-in-out',
      }}
      className={`
        relative flex-none cursor-move
        ${isDragging ? 'dragging' : ''}
      `}
      data-handler-id={handlerId}
      data-drag-id={id}
      data-drag-index={index}
    >
      {children}
    </div>
  );
};