import { useEffect, useState } from "react";
import {
  Circle,
  LoaderText,
  LoaderWrapper,
  ProgressText,
} from "./Loader.styled";
import { useNavigate } from "react-router-dom";

const Loader = ({ title }) => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 100 : prevProgress + 1
      );
    }, 50);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      navigate("/email");
    }
  }, [progress, navigate]);

  return (
    <>
      <div style={{ position: "relative", width: "240px", height: "240px" }}>
        <LoaderWrapper viewBox="0 0 240 240">
          <Circle cx="120" cy="120" r="110" stroke="var(--color)" />
          <Circle
            accent="true"
            cx="120"
            cy="120"
            r="110"
            style={{
              strokeDasharray: 693,
              strokeDashoffset: 693 - (progress * 693) / 100,
            }}
            stroke="var(--third-color)"
          />
        </LoaderWrapper>
        <ProgressText>{progress}%</ProgressText>
      </div>
      <LoaderText>{title}</LoaderText>
    </>
  );
};

export default Loader;
