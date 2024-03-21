export const Video = () => {
  return (
    <div id="video" className="mb-24 mt-20 h-150 ">
      <video
        id="bg-video"
        src="/video.mp4"
        loop
        autoPlay
        muted
        playsInline
        className="size-full object-cover"
      ></video>
    </div>
  );
};
