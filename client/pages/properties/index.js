import { useContext, useState } from "react";
import { MyContext } from "../../context/context";
import ItemCard from "@/components/Items/ItemCard";
import FilterBtn from "@/components/filter/FilterBtn";
import Filters from "@/components/filter/Filters";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Map from "@/components/map";
import Modal from "@/components/modal";
import Search from "@/components/search";

const Index = () => {
  const [modal, setModal] = useState(false);
  const {
    finalItems,
    searchClickHandler,

    bedRoomsAndBeds,
    setBedRoomsAndBeds,
    bedRooms,
    setBedRooms,

    priceRange,
    setPriceRange,

    reviewRange,
    setReviewRange,

    amenities,
    setAmenities,

    propertyTypes,
    setPropertyTypes,
  } = useContext(MyContext);

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
            <Filters
              modalHandler={modalHandler}
              searchClickHandler={searchClickHandler}
              bedRoomsAndBeds={bedRoomsAndBeds}
              setBedRoomsAndBeds={setBedRoomsAndBeds}
              bedRooms={bedRooms}
              setBedRooms={setBedRooms}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              reviewRange={reviewRange}
              setReviewRange={setReviewRange}
              amenities={amenities}
              setAmenities={setAmenities}
              propertyTypes={propertyTypes}
              setPropertyTypes={setPropertyTypes}
            />
          </Modal>
        )}
        <div className="flex justify-center mt-10 gap-5 flex-wrap md:flex-nowrap">
          <div className="w-full md:w-8/12 flex gap-10 flex-wrap overflow-y-scroll overflow-x-hidden">
            {finalItems.map((condo) => (
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
