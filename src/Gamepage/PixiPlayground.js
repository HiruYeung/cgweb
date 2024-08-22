"use client";

import { useState, useEffect, useCallback } from "react";
import { useTick, Stage, Container, Sprite, Text } from "@pixi/react";
import "@pixi/events";

function Bold({ x, image, visible }) {
  return (
    <Sprite
      image={image || "https://i.imgur.com/LQCGErC.png"}
      x={x}
      width={150}
      height={150}
      visible={visible}
    />
  );
}

function Bunny({ yPos, image }) {
  return (
    <Sprite
      image={image}
      x={150}
      width={180}
      height={230}
      y={yPos + 80}
      anchor={0.5}
    />
  );
}

function BunnyMove({ xPos, yPos, visible }) {
  return (
    <Sprite
      image={"https://i.imgur.com/1IVx5n2.png"}
      width={200}
      height={130}
      x={xPos}
      y={yPos + 80}
      anchor={0.5}
      visible={visible}
    />
  );
}

function HolyMove({ xPos, yPos, visible }) {
  return (
    <Sprite
      image={"https://i.imgur.com/N4MVUIG.png"}
      width={200}
      height={130}
      x={xPos}
      y={yPos + 80}
      anchor={0.5}
      visible={visible}
    />
  );
}

function ArrowUp({ onClick }) {
  return (
    <Sprite
      interactive
      pointerup={onClick}
      anchor={0.5}
      x={499}
      y={470}
      width={50}
      height={50}
      image={"https://i.imgur.com/ubTEwZ5.png"}
    />
  );
}

function ArrowDown({ onClick }) {
  return (
    <Sprite
      interactive
      pointerup={onClick}
      anchor={0.5}
      x={500}
      y={530}
      width={50}
      height={50}
      image={"https://i.imgur.com/A0nFtug.png"}
    />
  );
}

function PlaygroundContainer() {
  const [bunnyY, setBunnyY] = useState(200);
  const [bunnies, setBunnies] = useState([]);
  const [holybunnies, setholyBunnies] = useState([]);
  const [boldStates, setBoldStates] = useState([true, true, true, true, true]);
  const [score, setScore] = useState(100);
  const [gameOver, setGameOver] = useState(false);
  const [bunnyImage, setBunnyImage] = useState(
    "https://i.imgur.com/5slLDAD.png"
  );
  const [timeLeft, setTimeLeft] = useState(30);

  const addBunny = useCallback(() => {
    setBunnies((prevBunnies) => [
      ...prevBunnies,
      { x: 1100, y: Math.random() * 1000, visible: true },
    ]);
  }, []);

  const addHolyBunny = useCallback(() => {
    setholyBunnies((prevholyBunnies) => [
      ...prevholyBunnies,
      { x: 1100, y: Math.random() * 1000, visible: true },
    ]);
  }, []);

  useEffect(() => {
    if (gameOver) return;
    const interval = setInterval(addBunny, 2000);
    return () => clearInterval(interval);
  }, [gameOver, addBunny]);

  useEffect(() => {
    if (gameOver) return;
    const interval = setInterval(addHolyBunny, 2000);
    return () => clearInterval(interval);
  }, [gameOver, addHolyBunny]);

  useEffect(() => {
    const imageToggleInterval = setInterval(() => {
      setBunnyImage((prevImage) =>
        prevImage === "https://i.imgur.com/5slLDAD.png"
          ? "https://i.imgur.com/hSr3e4f.png"
          : "https://i.imgur.com/5slLDAD.png"
      );
    }, 1000); //1000
    return () => clearInterval(imageToggleInterval);
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) {
      setGameOver(true);
    } else {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000); //1000
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const moveBunnyUp = () => {
    setBunnyY((prevY) => {
      if (prevY - 40 >= 100) {
        return prevY - 40;
      }
      return prevY;
    });
  };

  const moveBunnyDown = () => {
    setBunnyY((prevY) => {
      if (prevY + 40 <= 400) {
        return prevY + 40;
      }
      return prevY;
    });
  };

  useTick((delta) => {
    if (gameOver) return;

    setBunnies((prevBunnies) =>
      prevBunnies.map((bunny) => {
        const nextX = bunny.x - 5 * delta;
        return nextX < -450 //50
          ? { ...bunny, x: 1000, y: Math.random() * 1000 } //x1000
          : { ...bunny, x: nextX };
      })
    );

    setholyBunnies((prevholyBunnies) =>
      prevholyBunnies.map((bunny) => {
        const nextX = bunny.x - 5 * delta;
        return nextX < -800 //50
          ? { ...bunny, x: 1000, y: Math.random() * 1000 } //x1000
          : { ...bunny, x: nextX };
      })
    );

    setholyBunnies((prevholyBunnies) =>
      prevholyBunnies.map((bunny) => {
        if (bunny.x < 180 && bunny.x > 100 && bunny.visible) {
          if (bunnyY + 140 > bunny.y && bunnyY - 140 < bunny.y) {
            setScore((prevScore) => prevScore + 20);
            bunny.visible = false;
            for (let i = boldStates.length - 1; i >= 0; i--) {
              if (boldStates[i]) {
                setBoldStates((prev) =>
                  prev.map((state, index) => (index === i ? false : state))
                );
                break;
              }
            }
          }
        }
        return bunny;
      })
    );

    setBunnies((prevBunnies) =>
      prevBunnies.map((bunny) => {
        if (bunny.x < 180 && bunny.x > 100 && bunny.visible) {
          if (bunnyY + 140 > bunny.y && bunnyY - 140 < bunny.y) {
            setScore((prevScore) => prevScore - 20);
            bunny.visible = false;
            for (let i = boldStates.length - 1; i >= 0; i--) {
              if (boldStates[i]) {
                setBoldStates((prev) =>
                  prev.map((state, index) => (index === i ? false : state))
                );
                break;
              }
            }
          }
        }
        return bunny;
      })
    );

    if (boldStates.every((state) => !state)) {
      setGameOver(true);
    }

    //   useEffect(() => {
    //   if (audioRef.current) {
    //     audioRef.current.pause();
    //     audioRef.current,currrentTime = 0;
    //   }

    //   return () => {
    //     if (audioRef.current) {
    //       audioRef.current.pause();
    //       audioRef.current.currentTime = 0;
    //     }
    //   };
    // }, []);
  });

  return (
    <Container>
      {boldStates.map((visible, index) => (
        <Bold
          key={index}
          x={index * 80}
          visible={visible}
          image={
            !visible
              ? "https://i.imgur.com/dXLz0dH.png"
              : "https://i.imgur.com/LQCGErC.png"
          }
        />
      ))}
      {gameOver ? (
        <>
          <Text
            text="End"
            x={500}
            y={300}
            anchor={0.5}
            style={{ fill: "white", fontSize: 60, fontFamily: "KalniaGlaze" }}
          />
          <Text
            text={`Final Score: ${score}`}
            x={500}
            y={400}
            anchor={0.5}
            style={{
              fill: "white",
              fontSize: 36,
              fontFamily: "GeorgiaRobotoSlab",
            }}
            image={"https://i.imgur.com/431FT90.jpeg"}
          />
        </>
      ) : (
        <>
          <Bunny yPos={bunnyY} image={bunnyImage} />
          <ArrowUp onClick={moveBunnyUp} />
          <ArrowDown onClick={moveBunnyDown} />
          {bunnies.map((bunny, index) => (
            <BunnyMove
              key={index}
              xPos={bunny.x}
              yPos={bunny.y}
              visible={bunny.visible}
            />
          ))}
          {holybunnies.map((bunny, index) => (
            <HolyMove
              key={index}
              xPos={bunny.x}
              yPos={bunny.y}
              visible={bunny.visible}
            />
          ))}
          <Text
            text={`Time Left: ${timeLeft}`}
            x={750}
            y={100}
            style={{ fill: "white", fontSize: 36, fontFamily: "Kanit" }}
          />
        </>
      )}
      <Text
        text={`Score: ${score}`}
        x={750}
        y={50}
        style={{ fill: "white", fontSize: 36, fontFamily: "GeorgiaRobotoSlab" }}
      />
    </Container>
  );
}

export default function PixiPlayground() {
  const [x1, setX1] = useState(0);
  const [x2, setX2] = useState(1100);
  const speed = 2;

  useEffect(() => {
    const updatePosition = () => {
      setX1((prevX1) => (prevX1 <= -1100 ? 1100 : prevX1 - speed));
      setX2((prevX2) => (prevX2 <= -1100 ? 1100 : prevX2 - speed));
    };

    const interval = setInterval(updatePosition, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <Stage width={1000} height={600} options={{ backgroundColor: 0xeef1f5 }}>
      <Sprite
        image="https://i.imgur.com/sPOEv1Q.jpeg"
        x={x1}
        y={0}
        width={1100}
        height={600}
      />
      <Sprite
        image="https://i.imgur.com/sPOEv1Q.jpeg"
        x={x2}
        y={0}
        width={1120}
        height={600}
      />
      <PlaygroundContainer />
    </Stage>
  );
}

