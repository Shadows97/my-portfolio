// import Lottie from "lottie-react";
import React, { useEffect, useState } from "react";
import dynamic from 'next/dynamic';

const AnimationLottie = ({ animationPath, width }) => {
  const [Lottie, setLottie] = useState(undefined)
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: '95%',
    }
  };

  useEffect(() => {
    setLottie(dynamic(() => import('lottie-react'), { ssr: false }))
  }, [])


  return (
    <>
      {Lottie && <Lottie {...defaultOptions} />}
    </>
  );
};

export default AnimationLottie;