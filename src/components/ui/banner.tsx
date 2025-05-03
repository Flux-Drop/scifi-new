import Text from "./text";

const Banner =  async() => {

  return (
    <div className="h-56 bg-[url('/assets/particles.png')] text-white bg-cover bg-center justify-center items-center hidden  lg:flex">
      <Text className="">Feel the Experience of Speed</Text>
    </div>
  );
};

export default Banner;
