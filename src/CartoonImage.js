import React, { useRef, useEffect } from "react";
import Caman from "caman";

const CartoonImage = ({ imageSrc }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = imageSrc;
    img.onload = function () {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      Caman(canvas, function () {
        this.posterize(8);
        this.colorize(60, 105, 225, 10);
        this.contrast(5);
        this.render();
      });
    };
  }, [canvasRef, imageSrc]);

  return <canvas ref={canvasRef} />;
};

export default CartoonImage;
