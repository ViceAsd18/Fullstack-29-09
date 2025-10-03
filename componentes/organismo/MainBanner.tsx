import BackgroundBanner from "assets/bg_main_card.png";
import BannerText from "componentes/moleculas/BannerText";
import ButtonBanner from "componentes/moleculas/ButtonBanner";

const titulo = "Unlock Your Potential with Expert-Led Courses";
const parrafo =
  "Explore a vast library of courses taught by industry leaders and passionate educators. Learn at your own pace, on your own schedule";

function MainBanner () {
  return (
    <section
      style={{
        position: "relative",
        borderRadius: 16,
        overflow: "hidden",
        minHeight: "62vh",
      }}
    >
      <img
        src={BackgroundBanner}
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      <div 
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(80% 60% at 50% 45%, rgba(0,0,0,0.40) 0%, rgba(0,0,0,0.25) 45%, rgba(0,0,0,0.10) 100%)," +
            "linear-gradient(180deg, rgba(96,153,149,0.62), rgba(96,153,149,0.52))",
          boxShadow: "inset 0 0 140px rgba(0,0,0,0.28)",
          pointerEvents: "none",
        }}
      />

      <div style={{
        position: "absolute", left: "12%", top: "18%",
        width: 8, height: 8, borderRadius: "50%",
        background: "rgba(255,255,255,0.95)", filter: "blur(0.5px)"
      }} />
      <div style={{
        position: "absolute", right: "22%", top: "22%",
        width: 10, height: 10, borderRadius: "50%",
        background: "rgba(255,255,255,0.90)", filter: "blur(0.5px)"
      }} />

      <div className="hero-contenido"
        style={{
          position: "relative",
          maxWidth: 780,
          margin: "0 auto",
          padding: "clamp(48px, 9vw, 96px) 24px",
          color: "white",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        
        <BannerText texto={titulo} parrafo={parrafo} />
        <div className="hero-acciones">
          <ButtonBanner />
        </div>
      </div>
    </section>
  );
}

export default MainBanner;
