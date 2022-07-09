import { useRef, MutableRefObject } from 'react';

export default function useArrayRef<T>(): [
  MutableRefObject<T[]>,
  (ref: T) => number
] {
  const refs = useRef<T[]>([]);
  refs.current = [];
  const addRef = (ref: T) => ref && refs.current.push(ref);
  return [refs, addRef];
}
