import React, { useEffect, useRef } from "react";


const Home = () => {
  const canvasRef = useRef(null);
  const animFrameIdRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const ball = {
      x: 50,
      y: 50,
      radius: 25,
      xInc: 3,
      yInc: 3,
      scale: 1,
      rotation: 0,

      draw: function () {
        const ballCenterX = this.x;
        const ballCenterY = this.y;

        context.translate(ballCenterX, ballCenterY);
        this.rotation += 0.05;
        context.rotate(this.rotation);
        context.scale(this.scale, this.scale);
        context.translate(-ballCenterX, -ballCenterY);

        context.beginPath();
        context.fillStyle = "black";
        context.arc(ballCenterX, ballCenterY, this.radius, 0, Math.PI * 2);
        context.fill();
      },

      move: function () {
        this.x += this.xInc;
        if (this.x - this.radius < 0 || this.x + this.radius > canvas.width) {
          this.xInc *= -1;
          this.scale += 0.1;
        }

        this.y += this.yInc;
        if (this.y - this.radius < 0 || this.y + this.radius > canvas.height) {
          this.yInc *= -1;
          this.scale += 0.1;
        }
      },
    };

    function drawFrame() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.save();
      ball.draw();
      ball.move();
      context.restore();

      animFrameIdRef.current = window.requestAnimationFrame(drawFrame);
    }

    function handleMouseOver() {
      if (!animFrameIdRef.current) {
        animFrameIdRef.current = window.requestAnimationFrame(drawFrame);
      }
    }

    function handleMouseOut() {
      if (animFrameIdRef.current) {
        window.cancelAnimationFrame(animFrameIdRef.current);
        animFrameIdRef.current = null;
      }
    }

    canvas.addEventListener("mouseover", handleMouseOver);
    canvas.addEventListener("mouseout", handleMouseOut);

    // Make sure animation does NOT run initially
    handleMouseOut();

    return () => {
      canvas.removeEventListener("mouseover", handleMouseOver);
      canvas.removeEventListener("mouseout", handleMouseOut);

      if (animFrameIdRef.current) {
        window.cancelAnimationFrame(animFrameIdRef.current);
        animFrameIdRef.current = null;
      }
    };
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <canvas
        ref={canvasRef}
        width={500}
        height={400}
        style={{ border: "1px solid black" }}
      />
    </div>
  );
};

export default Home;
