
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const PortfolioBanner = () => {
  
  return (
    <section
      className="bg-gray-700 relative w-full flex flex-col lg:flex-row lg:items-left justify-between items-center bg-cover bg-center bg-fixed"
      style={{ height: "70vh" }}
    >
      {/* Left Side (Text with Auto Typing) */}
     <LeftBanner />

      {/* Right Side (Image with Advanced Animation) */}
      <div className="w-1/2 flex justify-center">
        <RightBanner />
      </div>
    </section>
  );
};

export default PortfolioBanner;
