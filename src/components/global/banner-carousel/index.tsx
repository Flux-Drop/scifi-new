import { getBanners } from "@/actions/banner";
import Carousel from "../hero/carousel";

const BannerCarousel = async () => {
  const { data: banners } = await getBanners();

  return <Carousel slides={banners ?? []} />;
};

export default BannerCarousel;