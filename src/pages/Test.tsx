import { useRef } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const Test = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollAmount = 200;

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 450;
    }
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 450;
    }
  };
  return (
    <article className="scroll-wrapper flex-group">
      <button onClick={() => scrollLeft()}>
        <MdArrowBackIos />
      </button>
      <div ref={containerRef} className="categories-container snap-inline">
        <div className="category"></div>
        <div className="category"></div>
        <div className="category"></div>
        <div className="category"></div>
        <div className="category"></div>
        <div className="category"></div>
        <div className="category"></div>
        <div className="category"></div>
      </div>
      <button onClick={() => scrollRight()}>
        <MdArrowForwardIos />
      </button>
    </article>
  );
};

export default Test;
