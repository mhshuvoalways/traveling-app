import Banner from "@/components/banner";
import BookingGuide from "@/components/bookingGuide";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HowWorks from "@/components/howworks";
import Items from "@/components/items";

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
