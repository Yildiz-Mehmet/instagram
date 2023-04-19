import photo1 from "./assets/photo1.png";
import photo2 from "./assets/photo2.png";
import photo3 from "./assets/photo3.png";
import photo4 from "./assets/photo4.png";
import { useRef, useEffect } from "react";

function App() {
  const ref = useRef();
  useEffect(() => {
    let images = ref.current.querySelectorAll("img");
    let total = images.length,
      count = 0;

    setInterval(() => {
      if (count > 0) {
        images[count - 1].classList.add("opacity-0");
      } else {
        images[total - 1].classList.add("opacity-0");
      }
      images[count].classList.remove("opacity-0");
      if (count === total - 1) {
        count = 0;
      } else {
        count += 1;
      }
    }, 1000);
  }, [ref]);

  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="w-[380px] h-[581px] relative bg-logo-pattern bg-[length:468.32px_634.15px] bg-[top_left_-46px]">
        <div
          className="w-[250px] h-[538px] absolute top-[27px] right-[18px]"
          ref={ref}
        >
          <img
            className="w-full h-full absolute left-0 top-0 opacity-0 transition-opacity"
            src={photo1}
            alt=""
          />
          <img
            className="w-full h-full absolute left-0 top-0 opacity-0 transition-opacity"
            src={photo2}
            alt=""
          />
          <img
            className="w-full h-full absolute left-0 top-0 opacity-0 transition-opacity"
            src={photo3}
            alt=""
          />
          <img
            className="w-full h-full absolute left-0 top-0 opacity-0 transition-opacity"
            src={photo4}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default App;
