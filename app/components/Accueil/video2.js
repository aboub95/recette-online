export function Video2() {
  return (
    <video
      className="rounded-lg w-full h-auto"
      width="320"
      height="320"
      autoPlay
      muted
      loop
      controls
      preload="metadata"
    >
      <source src="/cuissine/video2.mp4" type="video/mp4" />
      <track
        src="/cuissine/video2.mp4"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag.
    </video>
  );
}
