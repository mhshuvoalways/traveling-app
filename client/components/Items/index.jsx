import Link from "next/link";
import { useContext } from "react";
import { MyContext } from "../../context/context";
import ItemCard from "./ItemCard";

const Index = () => {
  const { finalItems } = useContext(MyContext);

  return (
    <div className="w-10/12 mx-auto pt-20 container">
      <div className="flex justify-between gap-5">
        <div>
          <p className="text-secondary font-semibold text-4xl">Stay with us</p>
          <p className="text-gray-600 mt-2">
            {`No matter which of our condos you choose, you can be sure to have an
            incredible beach vacation. Our staff is here to make your stay as
            enjoyable as possible, so don't hesitate to reach out with any
            questions or concerns by phone or email – we're happy to help! Get
            ready for the beach getaway.`}
          </p>
        </div>
        <Link
          href="properties"
          className="cursor-pointer text-primary hover:text-secondary"
          style={{
            textWrap: "nowrap",
          }}
        >
          Explore All
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-10 gap-5 flex-wrap md:flex-nowrap">
        {finalItems?.slice(0, 4).map((condo) => (
          <ItemCard
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
    </div>
  );
};

export default Index;
