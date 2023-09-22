import Footer from "@/components/footer";
import Header from "@/components/header";

const index = () => {
  return (
    <div>
      <Header />
      <iframe
        className="w-full h-screen pt-32 border-none tidetime overflow-hidden"
        src="https://www.tidetime.org/north-america/united-states/new-smyrna-beach.htm"
      ></iframe>
      <Footer />
    </div>
  );
};

export default index;
