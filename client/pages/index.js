import Items from "@/components/Items";
import Banner from "@/components/banner";
import BookingGuide from "@/components/bookingGuide";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HowWorks from "@/components/howworks";
import Reviews from "@/components/reviews";

const index = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Items />
      <BookingGuide />
      <HowWorks />
      <Reviews />
      <Footer />
    </div>
  );
};

export default index;
