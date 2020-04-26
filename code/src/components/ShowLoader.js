import React, { useState } from 'react';
import Lottie from "lottie-react-web";
import animation from "../animations/green-ellipses.json";

export const ShowLoader = () => {
  return (
  <div>
    <Lottie
          options={{
            animationData: animation,
          }}
        />
    </div>
  )
}