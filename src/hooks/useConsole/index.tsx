/**
 * @desc console.log打印图文
 */
import { useEffect } from "react";

interface IOption {
  image?: boolean;
  fontSize?: string;
  color?: string;
  fontWeight?: number | string;
  fontStyle?: string;

  imageWidth?: string;
  imageHeight?: string;
}

function useConsole(text: string, options: IOption = {}) {
  useEffect(() => {
    const {
      image = false,
      fontSize = "20px",
      color = "#ff5600",
      fontWeight = "500",
      fontStyle,
      imageWidth = "100px",
      imageHeight = "100px",
    } = options;
    if (!image) {
      console.log(
        `%c${text} `,
        `color:${color};
        font-size:${fontSize};
        font-weight:${fontWeight};
        font-style:${fontStyle}
        `
      );
    } else {
      console.log(
        "%c+",
        `font-size: 1px;
  padding: ${imageWidth} ${imageHeight};
  background-image: url(${text});
  background-size: contain;
  background-repeat: no-repeat;
  color: transparent;`
      );
    }
  }, [text, options]);
}

export default useConsole;
