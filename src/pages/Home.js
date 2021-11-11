import ItemList from "../components/ItemList";
import ItemForm from "../components/ItemForm";
import { useCollection } from "../hooks/useCollection";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Home() {
  const { user } = useAuthContext();
  const { documents: items } = useCollection("items", ["uid", "==", user.uid]);

  return (
    <div className="App">
      {items && <ItemList items={items} />}
      <ItemForm />
    </div>
  );
}
