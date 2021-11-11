import { useState } from "react";
import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { useAuthContext } from "../hooks/useAuthContext";

export default function ItemForm() {
  const [newItem, setNewItem] = useState("");
  const { user } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, "items"), {
      title: newItem,
      uid: user.uid,
    });

    setNewItem("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Add a new item:</span>
        <input
          required
          type="text"
          onChange={(e) => setNewItem(e.target.value)}
          value={newItem}
        />
      </label>
      <button>Add</button>
    </form>
  );
}
