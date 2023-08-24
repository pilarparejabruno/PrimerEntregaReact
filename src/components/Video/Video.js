import "./Video.css";

const Video = () => (
  <video className="video mx-auto d-block" autoPlay loop muted>
    <source
      src={process.env.PUBLIC_URL + "/videobackground.mp4"}
      type="video/mp4"
    />
  </video>
);

export default Video;
