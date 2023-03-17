import { useRef } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const Scroller = ({ children }: any) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft +=
        containerRef.current.getBoundingClientRect().width - 100;
    }
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -=
        containerRef.current.getBoundingClientRect().width - 100;
    }
  };

  return (
    <article className="scroll-wrapper flex-group">
      <button className="scroll-btn left | fs-500" onClick={scrollLeft}>
        <MdArrowBackIosNew />
      </button>
      <div ref={containerRef} className="categories-container snap-inline">
        {children}
      </div>
      <button className="scroll-btn right | fs-500" onClick={scrollRight}>
        <MdArrowForwardIos />
      </button>
    </article>
  );
};

export default Scroller;
