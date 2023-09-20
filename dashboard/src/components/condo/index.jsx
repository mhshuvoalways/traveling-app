import { useEffect, useState } from "react";
import Modal from "../modal";
import ChangePrice from "../changePrice";
import axios from "../../utils/axios";

const Index = ({ data }) => {
  const [modal, setModal] = useState(false);
  const [allChanges, setAllChanges] = useState([]);
  const [condoId, setCondoId] = useState();

  const toggleModal = () => {
    setModal(!modal);
  };

  const deleteHandler = (id) => {
    const temp = [...allChanges];
    axios
      .delete("/price/deleteprice/" + id)
      .then(() => {
        const newArr = temp.filter((el) => el._id !== id);
        setAllChanges(newArr);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("/price/getprices")
      .then((resp) => {
        setAllChanges(resp.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {data.map((el) => (
        <div className="bg-white p-5 shadow rounded mt-5" key={el.id}>
          <div className="flex justify-between gap-2 flex-wrap">
            <p>{el.title}</p>
            <p className="font-semibold">{el.price}</p>
            <i
              className="fa-solid fa-pen-to-square cursor-pointer"
              onClick={() => {
                toggleModal();
                setCondoId(el.id);
              }}
            ></i>
          </div>
          {allChanges.length
            ? allChanges.map(
                (data) =>
                  data.itemId.toString() === el.id.toString() && (
                    <div
                      className="flex justify-between gap-2 flex-wrap border-b mt-5 pb-1"
                      key={data._id}
                    >
                      <div>
                        {data.dates.map((date, index) => (
                          <p key={index}>{date}</p>
                        ))}
                      </div>
                      <p className="font-semibold">{data.price}</p>
                      <i
                        className="fa-solid fa-trash-can cursor-pointer"
                        onClick={() => deleteHandler(data._id)}
                      ></i>
                    </div>
                  )
              )
            : null}
        </div>
      ))}
      {modal && (
        <Modal modalHandler={toggleModal} title="Change price">
          <ChangePrice
            condoId={condoId}
            toggleModal={toggleModal}
            allChanges={allChanges}
            setAllChanges={setAllChanges}
          />
        </Modal>
      )}
    </>
  );
};

export default Index;
