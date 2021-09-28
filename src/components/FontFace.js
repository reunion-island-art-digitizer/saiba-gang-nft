const FontFace = () => (
  <style jsx global>
    {`
      @font-face {
        font-family: "Oxta";
        font-style: normal;
        font-weight: 400;
        font-display: block;
        src: url(/fonts/Oxta.woff) format("woff");
      }
    `}
  </style>
);

export default FontFace;
