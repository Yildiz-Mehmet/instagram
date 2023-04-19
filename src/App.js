import photo1 from "./assets/photo1.png";
import photo2 from "./assets/photo2.png";
import photo3 from "./assets/photo3.png";
import photo4 from "./assets/photo4.png";
function App() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="w-[380px] h-[581px] relative bg-logo-pattern bg-[length:468.32px_634.15px] bg-[top_left_-46px]">
        <div className="w-[250px] h-[538px] absolute top-[27px] right-[18px]">
          <img className="w-full h-full" src={photo1} alt="" />
          <img className="w-full h-full" src={photo2} alt="" />
          <img className="w-full h-full" src={photo3} alt="" />
          <img className="w-full h-full" src={photo4} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
