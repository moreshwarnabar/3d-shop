import { useRef } from 'react';
import { easing } from 'maath';
import { useFrame } from '@react-three/fiber';
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';

const Backdrop = () => {
  const shadows = useRef();

  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.85}
      scale={10}
      rotateOnAxis={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      <RandomizedLight
        amount={1}
        radius={9}
        intensity={1.5}
        ambient={1.9}
        position={[5, 15, -10]}
      />
      <RandomizedLight
        amount={1}
        radius={5}
        intensity={1.9}
        ambient={1.5}
        position={[-5, 15, -10]}
      />
    </AccumulativeShadows>
  );
};

export default Backdrop;
