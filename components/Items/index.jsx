import Link from "next/link";
import ItemCard from "./ItemCard";
import database from "../../public/db";

const index = () => {
  return (
    <div className="w-10/12 mx-auto pt-20">
      <div className="flex justify-between gap-5 items-center">
        <div>
          <p className="text-secondary font-semibold text-4xl">Stay with us</p>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque ullamcorper molestie elit ac porttitor.
          </p>
        </div>
        <Link
          href="properties"
          className="cursor-pointer text-primary hover:text-secondary"
        >
          Explore All
        </Link>
      </div>
      <div className="flex justify-between items-center mt-10 gap-5 flex-wrap md:flex-nowrap">
        {database.map((condo) => (
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

export default index;
