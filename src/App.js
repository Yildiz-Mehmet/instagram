import { useRef, useEffect } from "react";
function App() {
  const ref = useRef();
  useEffect(() => {
    const images = ref.current.querySelectorAll("img");
    let total = images.length;
    let count = 0;
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
    imageSlider();
    setInterval(() => {
      imageSlider();
    }, 3000);

    return () => {};
  }, [ref]);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[380px] h-[581px] bg-logo-pattern bg-[length:468.32px_634.15px] bg-[top_left_-46px] relative ">
        <div
          className="w-[250px] h-[538px] absolute top-[27px] right-[18px]"
          ref={ref}
        >
          <img
            className="w-full h-full absolute left-0 top-0 opacity-0 transition-opacity duration-1000 ease-linear "
            src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1-2x.png/cfd999368de3.png"
            alt=""
          />
          <img
            className="w-full h-full absolute left-0 top-0 opacity-0 transition-opacity duration-1000 ease-linear "
            src="https://www.instagram.com/static/images/homepage/screenshots/screenshot2-2x.png/80b8aebdea57.png"
            alt=""
          />
          <img
            className="w-full h-full absolute left-0 top-0 opacity-0 transition-opacity duration-1000 ease-linear "
            src="https://www.instagram.com/static/images/homepage/screenshots/screenshot3-2x.png/fe2540684ab2.png"
            alt=""
          />
          <img
            className="w-full h-full absolute left-0 top-0 opacity-0 transition-opacity duration-1000 ease-linear "
            src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4-2x.png/8e9224a71939.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
export default App;

{
  /* <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
            src="https://www.instagram.com/static/images/homepage/screenshots/screenshot1-2x.png/cfd999368de3.png"
            alt=""
          />
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
            src="https://www.instagram.com/static/images/homepage/screenshots/screenshot2-2x.png/80b8aebdea57.png"
            alt=""
          />
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
            src="https://www.instagram.com/static/images/homepage/screenshots/screenshot3-2x.png/fe2540684ab2.png"
            alt=""
          />
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
            src="https://www.instagram.com/static/images/homepage/screenshots/screenshot4-2x.png/8e9224a71939.png"
            alt=""
          /> */
}
