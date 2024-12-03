import AboutUs from "@/components/layouts/AboutUs/AboutUs";
import Banner from "@/components/layouts/Banner/Banner";
import Contact from "@/components/layouts/Contact/Contact";
import OurClients from "@/components/layouts/OurClients/OutClients";
import Services from "@/components/layouts/Services/Services";

export default function Home() {
  return (
    <div>
      <Banner />
      <Services />
      <OurClients />
      <AboutUs />
      <Contact />
    </div>
  );
}
