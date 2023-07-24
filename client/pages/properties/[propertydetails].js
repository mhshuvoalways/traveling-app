import { useRouter } from "next/router";
import Header from "@/components/header";
import Details from "@/components/details";
import Footer from "@/components/footer";

const Property = () => {
  const router = useRouter();
  return (
    <div>
      <Header />
      <Details query={router.query} />
      <Footer />
    </div>
  );
};

export default Property;
