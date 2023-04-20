import photo1 from "./assets/photo1.png";
import photo2 from "./assets/photo2.png";
import photo3 from "./assets/photo3.png";
import photo4 from "./assets/photo4.png";
import { useRef, useEffect, useState } from "react";
import Input from "./components/Input";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const enable = username && password;
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
      <div className="w-[350px] bg-white border px-[40px] pt-8 pb-2">
        <a href="#" className="flex justify-center mb-8">
          <img
            className="h-[100px]"
            src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png"
            alt=""
          />
        </a>

        <form className="grid gap-y-1.5">
          <Input
            type="text"
            value={username}
            label="Phone number, username or email"
            onChange={(e) => setUsername(e.target.value)}
          />

          <Input
            type="password"
            value={password}
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            disabled={!enable}
            type="submit"
            className="h-[30px] rounded bg-brand text-white text-sm disabled:opacity-50"
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
