"use client";
import { Carousel } from "antd";
import caro1 from "../assets/caro1.png";
import caro2 from "../assets/caro2.png";
import caro3 from "../assets/caro3.png";
import Image from "next/image";
const contentStyle: React.CSSProperties = {
  color: "white",
  position: "absolute",
  top: "380px",
  fontSize: "50px",
  marginLeft: "10rem",
  fontWeight: 600,
};

const contentStyle1: React.CSSProperties = {
  color: "white",
  position: "absolute",
  top: "380px",
  fontSize: "50px",
  marginLeft: "10rem",
  fontWeight: 600,
};
// const imageStyle = {
//   width: "100%",
//   height: "550px",
// };

const contentStyle2: React.CSSProperties = {
  color: "white",
  position: "absolute",
  top: "380px",
  fontSize: "50px",
  marginLeft: "10rem",
  fontWeight: 600,
};
const CarouselPage = () => (
  <Carousel autoplay effect="fade" style={{ width: "100%", border: "none" }}>
    <div>
      <Image
        src={caro1}
        alt="imag1 banner"
        style={{ objectFit: "cover" }}
      ></Image>

      <h3 style={contentStyle}>Book Your Service Now!</h3>
    </div>
    <div>
      <Image
        src={caro2}
        alt="img2 banner"
        style={{ objectFit: "cover" }}
      ></Image>

      <h3 style={contentStyle1}>Save your Time By Using Our Services!</h3>
    </div>
    <div>
      <Image
        src={caro3}
        alt="img3 banner"
        style={{ objectFit: "cover" }}
      ></Image>
      <h3 style={contentStyle2}>You can contact with us!</h3>
    </div>
  </Carousel>
);

export default CarouselPage;
