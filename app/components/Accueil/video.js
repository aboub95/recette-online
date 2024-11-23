export function Video() {
  return (
    <video
      className="rounded-lg w-full h-auto"
      width="320"
      height="240"
      autoPlay
      muted
      loop
      controls
      preload="metadata"
    >
      <source src="/cuissine/video.mp4" type="video/mp4" />
      <track
        src="/cuissine/video.mp4"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag.
    </video>
  );
}
