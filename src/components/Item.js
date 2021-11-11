import { FaTrash, FaPen } from "react-icons/fa";

export default function Item({ items, handleClick }) {
  return (
    <>
      {items.map((item) => (
        <div className="dark:bg-gray-800 bg-gray-200 transition my-2 p-1 flex justify-between items-center">
          <li key={item.id}>{item.title}</li>
          <div className="flex w-12 justify-between">
            <FaPen className="cursor-pointer" />
            <FaTrash
              className="cursor-pointer"
              onClick={() => handleClick(item.id)}
            />
          </div>
        </div>
      ))}
    </>
  );
}
