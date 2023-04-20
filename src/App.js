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
    const imageSlider = () => {
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
    };
    let interval = setInterval(imageSlider, 3000);
    imageSlider();
    return () => {
      clearInterval(interval);
    };
  }, [ref]);

  return (
    <div className="h-full w-full flex items-center justify-center gap-x-8">
      <div className="w-[380px] h-[581px] relative bg-logo-pattern bg-[length:468.32px_634.15px] bg-[top_left_-46px]">
        <div
          className="w-[250px] h-[538px] absolute top-[27px] right-[18px]"
          ref={ref}
        >
          <img
            className="w-full h-full absolute left-0 top-0 opacity-0 transition-opacity duration-1000 ease-in"
            src={photo1}
            alt=""
          />
          <img
            className="w-full h-full absolute left-0 top-0 opacity-0 transition-opacity duration-1000 ease-in"
            src={photo2}
            alt=""
          />
          <img
            className="w-full h-full absolute left-0 top-0 opacity-0 transition-opacity duration-1000 ease-in"
            src={photo3}
            alt=""
          />
          <img
            className="w-full h-full absolute left-0 top-0 opacity-0 transition-opacity duration-1000 ease-in"
            src={photo4}
            alt=""
          />
        </div>
      </div>
      <div className="w-[350px] bg-white border px-[50px] pt-8 pb-2">
        <a href="#" className="flex justify-center">
          <img
            className="h-[100px]"
            src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png"
            alt=""
          />
        </a>

        <form>
          <label className="block relative">
            <input
              required={true}
              type="text"
              className="bg-zing-50 border w-full h-[38px] rounded-sm outline-none text-sm focus:border-gray-400 px-2 valid:pt-[10px] peer "
            />
            <small className="absolute top-1/2 left-[9px] text-xs cursor-text pointer-events-none text-gray-500 -translate-y-1/2 transition-all peer-valid:text-[10px] peer-valid:top-2.5">
              Phone number, username or email
            </small>
          </label>
        </form>
      </div>
    </div>
  );
}

export default App;
