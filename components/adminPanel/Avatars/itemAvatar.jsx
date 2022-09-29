import { useRouter } from "next/router";
import { deleteData } from "../../../fetchData/controllers";

const ItemAvatar = ({ avatar }) => {
  const router = useRouter();
console.log(avatar)
  const handleDelete = () => {
    deleteData("avatars", avatar.id);
    setTimeout(() => {
      router.reload();
    }, 1300);
  };

  return (
    <>
      <tbody className="flex-1 sm:flex-none">
        <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
          <td className="text-center border-grey-light border hover:bg-gray-100 p-3 truncate">
            {avatar.id}
          </td>
          <td className="text-center border-grey-light border hover:bg-gray-100 p-3 truncate">
            {avatar.url}
          </td>
          <td className="text-center  text-red-600 border-grey-light border hover:bg-gray-100 p-3 truncate">
            <button onClick={handleDelete} className="hover:text-red-200">
              DELETE
            </button>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default ItemAvatar;
