import { db } from "../firebase/config";
import { doc, deleteDoc } from "firebase/firestore";

export default function ItemList({ items }) {
  const handleClick = async (id) => {
    await deleteDoc(doc(db, "items", id));
  };

  return (
    <div className="book-list">
      <ul>
        {items.map((item) => (
          <li key={item.id} onClick={() => handleClick(item.id)}>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
