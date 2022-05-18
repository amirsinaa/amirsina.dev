import ProgressiveImage from "react-progressive-image";
import { BlurhashCanvas } from "react-blurhash";
import LazyImageProps from "@/types/LazyImage";
import { Image } from "@chakra-ui/react";

const LazyImage = (props: LazyImageProps) => {
  const { src, blurHash, width, height, size, layout, rounded } = props;
  const placeholder = '/assets/images/image_default_placeholder.png'

  return (
    <ProgressiveImage delay={500} src={src} placeholder={placeholder}>
      {(src, loading) => {
        return loading ? (
          <BlurhashCanvas
            hash={blurHash}
            width={width}
            height={height}
            punch={1}
            style={{ borderRadius: rounded ? "5px" : "" }}
          />
        ) : (
            <Image
              src={src}
              objectFit="contain"
              alt="cover image"
              width={width}
              height={height}
              size={size}
              layout={layout}
              rounded={rounded}
              fallbackSrc={placeholder}
            />
          );
      }}
    </ProgressiveImage>
  );
};

export default LazyImage;
