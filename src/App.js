import { useRef, useEffect, useState } from "react";
import Input from "./components/Input";
import { FaFacebook } from "react-icons/all";
function App() {
  const ref = useRef();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const enable = username && password;

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
          <Input
            type="text"
            label="Phone number, username or email"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <Input
            type="password"
            label="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <button
            disabled={!enable}
            type="submit"
            className="h-[30px] rounded bg-brand font-medium text-white text-sm disabled:opacity-50"
          >
            Log In
          </button>
          <div className="flex items-center">
            <div className="h-px bg-gray-300 flex-1" />
            <span className="px-4 text-[13px] text-gray-500 font-semibold">
              OR
            </span>
            <div className="h-px bg-gray-300 flex-1" />
          </div>
        </form>
      </div>
    </div>
  );
}
export default App;
