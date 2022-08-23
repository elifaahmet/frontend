/** @format */

import {
  Dispatch,
  MouseEvent,
  SetStateAction,
  TouchEvent,
  useEffect,
  useState,
} from 'react';

export interface CarouselHooksReturnType {
  activeItemIndex: number;
  setActiveItemIndex: Dispatch<SetStateAction<number>>;
  isUserInteracting: boolean;
  displacement: number;
  onTouchMove: (e: TouchEvent) => void;
  onTouchStart: (e: TouchEvent) => void;
  onTouchEnd: (e: TouchEvent) => void;
  onMouseMove: (e: MouseEvent) => void;
  onMouseDown: (e: MouseEvent) => void;
  onMouseUp: (e: MouseEvent) => void;
}

export function useCarouselCalculationsAndHandlers(
  numChildren: number
): CarouselHooksReturnType {
  const [activeItemIndex, setActiveItemIndex] = useState<number>(0);
  const [touchClientX, setTouchClientX] = useState<number>(0);
  const [touchClientXStart, setTouchClientXStart] = useState<number>(0);
  const [isUserInteracting, setIsUserInteracting] = useState<boolean>(false);
  const [displacement, setDisplacement] = useState(0);
  const [timerId, setTimerId] = useState(null);

  function throttle(callback, delay) {
    if (timerId) return;

    setTimerId(
      setTimeout(() => {
        callback();
        setTimerId(null);
      }, delay)
    );
  }

  useEffect(() => {
    const vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );
    const calculatedDisplacement =
      ((touchClientX - touchClientXStart) / vw) * 100;
    throttle(() => setDisplacement(calculatedDisplacement), 30);

    if (!isUserInteracting) {
      let newIndex =
        calculatedDisplacement > 20 ? activeItemIndex - 1 : activeItemIndex;
      newIndex = calculatedDisplacement < -20 ? activeItemIndex + 1 : newIndex;
      if (newIndex > numChildren - 1) newIndex = numChildren - 1;
      if (newIndex < 0) newIndex = 0;
      setActiveItemIndex(newIndex);
      setDisplacement(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [touchClientX, isUserInteracting]);

  return {
    activeItemIndex,
    setActiveItemIndex,
    isUserInteracting,
    displacement,
    onTouchMove: (e) => setTouchClientX(e.touches[0].clientX),
    onTouchStart: (e) => {
      setDisplacement(0);
      setTouchClientXStart(e.touches[0].clientX);
      setTouchClientX(e.touches[0].clientX);
      setIsUserInteracting(true);
    },
    onTouchEnd: (e) => setIsUserInteracting(false),
    onMouseMove: (e) => {
      if (isUserInteracting) setTouchClientX(e.clientX);
    },
    onMouseDown: (e) => {
      setDisplacement(0);
      setTouchClientXStart(e.clientX);
      setTouchClientX(e.clientX);
      setIsUserInteracting(true);
    },
    onMouseUp: (e) => setIsUserInteracting(false),
  };
}
