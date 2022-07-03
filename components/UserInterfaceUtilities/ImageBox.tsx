import ImageBoxProps from "@/types/ImageBoxProps";
import { Image } from "@chakra-ui/react";

const ImageBox = (props: ImageBoxProps) => {
  const { src, width, height, sizes, rounded,alt } = props;
  const placeholder = '/assets/images/image_default_placeholder.png'

  return (
    <Image
      src={src}
      objectFit="contain"
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      rounded={rounded}
      fallbackSrc={placeholder}
    />
  );
};

export default ImageBox;
