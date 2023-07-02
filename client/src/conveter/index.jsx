import { SlideShowImage } from "../components/SlideShow";
import { slidesShow } from "../fakeData";

const slideShowList = slidesShow.map((slide, index) => {
  return (
    <SlideShowImage key={index} slide={slide} />
  );
});
export { slideShowList };
