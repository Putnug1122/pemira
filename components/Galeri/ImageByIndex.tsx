import image1 from './images/image_1.png';
import image2 from './images/image_2.png';
import image3 from './images/image_3.jpg';
import image4 from './images/image_4.jpg';
import image5 from './images/image_5.png';
import image6 from './images/image_6.png';

export const images: string[] = [image1.src, image2.src, image3.src, image4.src, image5.src, image6.src]

const imageByIndex = (index: number): string => images[index % images.length]

export default imageByIndex