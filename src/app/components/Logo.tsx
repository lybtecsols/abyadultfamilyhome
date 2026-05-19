import abyLogoImg from "../../imports/ChatGPT_Image_Apr_15,_2026,_09_30_41_AM.png";

export function AbyLogo({ height = 80 }: { height?: number }) {
  return (
    <img
      src={abyLogoImg}
      alt="Aby Adult Family Home"
      style={{ height, width: "auto", objectFit: "contain", display: "block" }}
    />
  );
}
