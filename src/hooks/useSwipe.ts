import { useState, useRef, useCallback } from "react";

interface UseSwipeReturn {
  offsetX: number;
  rotation: number;
  isDragging: boolean;
  handleMouseDown: (e: React.MouseEvent | React.TouchEvent) => void;
  handleMouseMove: (e: React.MouseEvent | React.TouchEvent) => void;
  handleMouseUp: () => void;
  reset: () => void;
}

export const useSwipe = (onSwipeLeft: () => void, onSwipeRight: () => void): UseSwipeReturn => {
  const [offsetX, setOffsetX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const currentX = useRef(0);

  const handleMouseDown = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    startX.current = clientX;
    currentX.current = clientX;
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    currentX.current = clientX;
    const diff = currentX.current - startX.current;
    setOffsetX(diff);
  }, [isDragging]);

  const handleMouseUp = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 100;
    if (offsetX > threshold) {
      onSwipeRight();
    } else if (offsetX < -threshold) {
      onSwipeLeft();
    }
    
    setOffsetX(0);
  }, [isDragging, offsetX, onSwipeLeft, onSwipeRight]);

  const reset = useCallback(() => {
    setOffsetX(0);
    setIsDragging(false);
  }, []);

  const rotation = offsetX * 0.1;

  return {
    offsetX,
    rotation,
    isDragging,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    reset,
  };
};