import Header from "@/components/header";
import Banner from "@/components/banner";
import Items from "@/components/Items";
import BookingGuide from "@/components/bookingGuide";
import HowWorks from "@/components/howworks";
import Footer from "@/components/footer";

const index = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Items />
      <BookingGuide />
      <HowWorks />
      <Footer />
    </div>
  );
};

export default index;
