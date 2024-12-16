import Photo from "../../assets/1689443313537.jpeg"; // Replace with your image path

const RightBanner = () => {
  return (
    <div className="relative flex justify-center items-center xl:block hidden">
      {/* Rotating Border with Gaps */}
      <div className="absolute inset-0 w-80 h-80 bg-transparent border-4 border-gradient-to-r from-green-400 to-blue-500 border-dashed animate-border-spin gap-4 rounded-xl"></div>

      {/* Image with Elegant Border and Shadow */}
      <div className="w-64 h-64 bg-white border-4 border-gradient-to-r from-green-400 to-blue-500 rounded-xl flex items-center justify-center overflow-hidden shadow-2xl transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-3xl">
        <img
          src={Photo}
          alt="Your Image"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default RightBanner;
