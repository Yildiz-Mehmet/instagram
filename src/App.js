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
    const interval = setInterval(() => {
      imageSlider();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [ref]);

  return (
    <div className="w-full h-full flex items-center justify-center gap-x-8">
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
      <div className="w-[350px] bg-white border p-[40px] pt-10 pb-2">
        <a href="#" className="flex items-center justify-center mb-8">
          <img
            className="h-[51px] "
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
            alt=""
          />
        </a>

        <form className="grid gap-y-1.5">
          <label className="block relative">
            <input
              required={true}
              type="text"
              className="bg-zing-50 border text-xs w-full h-[38px] px-2 rounded-sm outline-none focus:border-gray-400 valid:pt-[10px] peer"
            />
            <small className="absolute top-1/2 left-[8px] text-xs cursor-text pointer-events-none text-gray-500 -translate-y-1/2 transition-all peer-valid:text-[10px] peer-valid:top-2.5">
              For number, username or email
            </small>
          </label>
          <label className="block relative">
            <input
              required={true}
              type="password"
              className="bg-zing-50 border text-xs w-full h-[38px] px-2 rounded-sm outline-none focus:border-gray-400 valid:pt-[10px] peer"
            />
            <small className="absolute top-1/2 left-[8px] text-xs cursor-text pointer-events-none text-gray-500 -translate-y-1/2 transition-all peer-valid:text-[10px] peer-valid:top-2.5">
              Password
            </small>
          </label>
          <button
            disabled={true}
            type="submit"
            className="h-[30px] rounded bg-brand font-medium text-white text-sm disabled:opacity-50"
          >
            Log In
          </button>
        </form>
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
