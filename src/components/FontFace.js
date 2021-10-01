const FontFace = () => (
  <style jsx global>
    {`
      @font-face {
        font-family: "Oxta";
        font-style: normal;
        font-weight: bold;
        font-display: block;
        src: url(/fonts/Oxta.woff) format("woff");
      }
      @font-face {
        font-family: "BergenMono-Regular";
        font-style: normal;
        font-weight: 400;
        font-display: block;
        src: url(/fonts/BergenMono-Regular.woff2) format("woff2");
      }
    `}
  </style>
);

export default FontFace;
