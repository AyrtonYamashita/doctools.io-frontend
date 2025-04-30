import Wave from "react-wavify";

import "./bgExtract.css";

function Background() {
  return (
    <div className="container-bg-extract">
      <div className="wave-container">
        <Wave
          className="wave-layer-2"
          fill="rgba(52, 116, 235, 0.20)"
          preserveAspectRatio="none"
          style={{ width: "100%", height: "100%" }}
          paused={false}
          options={{
            height: 30,
            amplitude: 60,
            speed: 0.2,
            points: 5,
          }}
        />
        <Wave
          className="wave-layer-2"
          fill="rgba(52, 116, 235, 0.15)"
          preserveAspectRatio="none"
          style={{ width: "100%", height: "100%" }}
          paused={false}
          options={{
            height: 100,
            amplitude: 55,
            speed: 0.2,
            points: 4,
          }}
        />

        <Wave
          className="wave-layer-2"
          fill="rgba(52, 116, 235, 0.10)"
          preserveAspectRatio="none"
          style={{ width: "100%", height: "90%" }}
          paused={false}
          options={{
            height: 50,
            amplitude: 50,
            speed: 0.2,
            points: 3,
          }}
        />
      </div>
      <div className="wave wave-container">
        <Wave
          className="wave-layer-2"
          fill="rgba(52, 116, 235, 0.20)"
          preserveAspectRatio="none"
          style={{ width: "100%", height: "100%" }}
          paused={false}
          options={{
            height: 30,
            amplitude: 50,
            speed: 0.2,
            points: 6,
          }}
        />
        <Wave
          className="wave-layer-2"
          fill="rgba(52, 116, 235, 0.15)"
          preserveAspectRatio="none"
          style={{ width: "100%", height: "100%" }}
          paused={false}
          options={{
            height: 100,
            amplitude: 45,
            speed: 0.2,
            points: 4,
          }}
        />

        <Wave
          className="wave-layer-2"
          fill="rgba(52, 116, 235, 0.10)"
          preserveAspectRatio="none"
          style={{ width: "100%", height: "90%" }}
          paused={false}
          options={{
            height: 50,
            amplitude: 40,
            speed: 0.2,
            points: 5,
          }}
        />
      </div>
    </div>
  );
}

export default Background;
