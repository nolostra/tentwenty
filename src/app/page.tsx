import Header from "@/components/Navbar";
import "@fortawesome/fontawesome-free/css/all.min.css";
import image from "../assets/background.png"; // Adjust the path as needed
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <main className="bg-white">
      <div
        className="w-full h-screen flex flex-col items-center justify-between p-4 "
        style={{
          backgroundImage: `url(${image.src})`, // Use the image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Header />
        <Banner/>
      </div>
    </main>
  );
}
