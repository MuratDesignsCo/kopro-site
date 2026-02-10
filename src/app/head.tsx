export default function Head() {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css"
      />
      <style>{
        "html.w-mod-js:not(.w-mod-ix3) :is([line], .top-text-wrapper > .top-text-wrapper, .top-text-wrapper, h1, h2) {visibility: hidden !important;}"
      }</style>
    </>
  );
}
