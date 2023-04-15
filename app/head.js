import Script from "next/script";

export default function Head() {
  return (
    <>
      <title>AJSport</title>
      {/* <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, viewport-fit=cover"
      /> */}
      <meta
        name="viewport"
        content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no,viewport-fit=cover"
      />
      {/* <Script
        type="module"
        src="https://cdn.jsdelivr.net/npm/jwplayer-video-element@1.0/+esm"
      ></Script> */}

      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
