import { db } from "../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";
import Item from "./Item";

export default function ItemList({ items }) {
  const handleClick = async (id) => {
    await deleteDoc(doc(db, "items", id));
  };

  return (
    <div className="flex flex-col m-auto w-96">
      <ul>
        <Item items={items} handleClick={handleClick} />
      </ul>
    </div>
  );
}
