export function Video3() {
  return (
    <video
      className="rounded-lg w-full h-auto "
      width="320"
      height="240"
      autoPlay
      muted
      loop
      controls
      preload="metadata"
    >
      <source src="/cuissine/video3.mp4" type="video/mp4" />
      <track
        src="/cuissine/video3.mp4"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag.
    </video>
  );
}
