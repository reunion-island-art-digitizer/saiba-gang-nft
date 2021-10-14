const FontFace = () => (
  <style jsx global>
    {`
      @font-face {
        font-family: "JoelsRaggedFont-Regular";
        font-style: normal;
        font-weight: normal;
        font-display: block;
        src: url(/fonts/JoelsRaggedFont-Regular.ttf) format("truetype");
      }
      @font-face {
        font-family: "Heibro";
        font-style: normal;
        font-weight: 400;
        font-display: block;
        src: url(/fonts/Heibro.woff) format("woff");
      }
      @font-face {
        font-family: "Battery Park";
        font-style: normal;
        font-weight: 400;
        font-display: block;
        src: url(https://use.typekit.net/urh1vpk.css) format("stylesheet");
      }
    `}
  </style>
);

export default FontFace;
