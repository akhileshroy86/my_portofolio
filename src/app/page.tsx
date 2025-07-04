'use client';

import { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import Hero from './components/Hero';
import { SparkleField } from './animations/SparkField';

export default function Home() {
  const [views, setViews] = useState<number>(0);

  const animatedViews = useSpring({
    number: views,
    from: { number: 0 },
    config: { tension: 120, friction: 14 },
  });

  useEffect(() => {
    const updateAndFetchViews = async () => {
      try {
        await fetch('/api/views', { method: 'POST' }); // Increment
        const res = await fetch('/api/views');
        const data = await res.json();
        setViews(data.views || 0);
      } catch (err) {
        console.error('Failed to load views', err);
      }
    };

    updateAndFetchViews();
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Optional background animation */}
      <SparkleField />

      {/* Your Navbar (if exists) should be here */}

      {/* Trusted by curious minds */}
      <div className="text-center mt-24 text-white text-lg font-medium -mb-20">
        Trusted by curious minds: <span className='font-bold text-amber-300' >{" "}</span>
       <span className='font-bold text-amber-300 text-3xl relative top-1 left-1' >
         <animated.span>
          {animatedViews.number.to((n) => Math.floor(n))}
        </animated.span>
       </span>
      </div>

      {/* Hero Section Below */}
      <Hero />
    </div>
  );
}
