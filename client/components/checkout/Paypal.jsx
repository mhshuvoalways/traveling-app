import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "../../utils/axios";

const Paypal = ({
  bookObj,
  bookDates,
  setBookObj,
  setBookDates,
  setTostify,
  finalItems,
  setFinalItems,
}) => {
  return (
    <div className="mt-5">
      <PayPalScriptProvider
        options={{
          "client-id":
            "AZsE5W6tjFqTP68Zigk0mn9N045ltDtaPBWpTxm8Nuaq8SMfqcMJVHIzJGOpb3SgTQFwWD8Jr_2URlXl",
        }}
      >
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: bookObj.price * bookDates.length,
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order
              .capture()
              .then(() => {
                const newObj = {
                  itemId: bookObj.id,
                  dates: bookDates,
                  title: bookObj.title,
                  name: bookObj.details.name,
                  email: bookObj.details.email,
                  phone: bookObj.details.phone,
                };
                axios
                  .post("/book/addbook", newObj)
                  .then((bookRes) => {
                    const temp = [...finalItems];
                    temp.map((item) => {
                      if (
                        bookRes.data.itemId.toString() === item.id.toString()
                      ) {
                        item.availability.push(...bookRes.data.dates);
                      }
                    });
                    setFinalItems(temp);
                    setTostify("You booked is confirmed. Thanks for payment!");
                    setBookObj(null);
                    setBookDates([]);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
};

export default Paypal;
