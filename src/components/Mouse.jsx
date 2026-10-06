import { useEffect } from "react";
import "./Mouse.css";
function Mouse() {
  useEffect(() => {
    const circle = document.querySelector(".mouse-circle");
    const moveCircle = (e) => {
      circle.style.left = `${e.clientX}px`;
      circle.style.top = `${e.clientY}px`;
    };
    window.addEventListener("mousemove", moveCircle);
    return () => {
      window.removeEventListener("mousemove", moveCircle);
    };
  }, []);
  return <div className="mouse-circle"></div>;
}
export default Mouse;