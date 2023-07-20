import { useState } from "react";
import ItemCard from "@/components/Items/ItemCard";
import FilterBtn from "@/components/filter/FilterBtn";
import Filters from "@/components/filter/Filters";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Map from "@/components/map";
import Modal from "@/components/modal";
import Search from "@/components/search";
import database from "../../public/db";

const Index = () => {
  const [modal, setModal] = useState(false);

  const modalHandler = () => {
    setModal(!modal);
  };

  return (
    <div>
      <Header />
      <div className="w-10/12 mx-auto pt-28">
        <Search availability />
        <FilterBtn modalHandler={modalHandler} />
        {modal && (
          <Modal modalHandler={modalHandler} title="More filters">
            <Filters modalHandler={modalHandler} />
          </Modal>
        )}
        <div className="flex justify-center mt-10 gap-5 md:h-screen flex-wrap md:flex-nowrap">
          <div className="w-full md:w-8/12 flex items-center gap-10 flex-wrap overflow-y-scroll overflow-x-hidden">
            {database.map((condo) => (
              <ItemCard
                property
                key={condo.id}
                id={condo.id}
                images={condo.images}
                title={condo.title}
                description={condo.description}
                benefits={condo.benefits}
                price={condo.price}
                itemLocation={condo.itemLocation}
                amenities={condo.amenities}
                availability={condo.availability}
                reviews={condo.reviews}
              />
            ))}
          </div>
          <Map />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
