import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import { ColorModeSwitcherProps } from "@/types/UiParts";
import { AnimatePresence } from "framer-motion";
import { MotionBox } from "./ChakraFactory";
import useSound from "use-sound";

export const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = props => {
  const { toggleColorMode } = useColorMode();
  const mode = useColorModeValue("dark", "light");

  const [play] = useSound("/assets/audios/ui-handler-amirsina-voice.mp3", {
    volume: 0.1,
    sprite: {
      on: [0, 500],
      off: [0, 500]
    }
  });

  const handleClick = () => {
    mode === "dark" ? play({ id: "on" }) : play({ id: "off" });
    toggleColorMode();
  };

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <MotionBox
        onClick={handleClick}
        key={mode === "dark" ? "dark-icon" : "light-icon"}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
        cursor="pointer"
        fontSize={["2xl", "3xl", "3xl"]}
      >
        {mode === "dark" ? "🌝" : "🌚"}
      </MotionBox>
    </AnimatePresence>
  );
};
