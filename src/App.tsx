import "./App.css";
import video1 from "./video1.mp4";
import video2 from "./video2.mp4";
import suica1 from "./suica1.mp4";
import suica2 from "./suica2.mp4";

function App() {
  return (
    <>
      <h1 style={{ padding: 8, borderBottom: "2px solid #CCCC" }}>
        Paisagens do mundo
      </h1>
      <h3>Maldivas</h3>
      <video src={video1} controls loop autoPlay width={720}></video>
      <video src={video2} controls loop autoPlay width={720}></video>

      <h3>Suiça</h3>
      <video src={suica1} controls loop autoPlay width={720}></video>
      <video src={suica2} controls loop autoPlay width={720}></video>
    </>
  );
}

export default App;
