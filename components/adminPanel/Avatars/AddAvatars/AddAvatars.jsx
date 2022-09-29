import { useState } from "react";
import { addNewDoc } from "../../../../fetchData/controllers";
import { useRouter } from "next/router";
import { async } from "@firebase/util";

const AddAvatars = () => {
  const [url, setUrl] = useState("");
  const [id, setId] = useState("");
  const [data, setData] = useState({ avatar: "", url: "" });
  const [activate, setActivate] = useState(false);
  const router = useRouter();


  const handleUrl = (e) => {
    e.preventDefault();
    setUrl(e.target.value);
  };
  const handleId = (e) => {
    e.preventDefault();
    setId(e.target.value);
  };

  const handleNewData = (e) => {
    e.preventDefault();
    setData({ avatar: id, url: url });
    if (data.url && data.avatar) {
      setActivate(true);
    }
  };
  const handleDefinitive = (e) => {
    e.preventDefault();
    setData({ avatar: id, url: url });
    if (data.url && data.avatar) {
      setActivate(true);
    }
  };
  const handleEnvData =async (e) => {
    e.preventDefault();
    await addNewDoc("avatars", data);
    router.reload()
  };
  
  return (
    <>
      {activate ? (
        <div className="w-full max-w-xl rounded-2xl bg-violet-50 px-20 py-14">
          <div className="mx-auto flex max-w-sm flex-col items-center">
            <form onSubmit={handleEnvData}>
              <button
                type="submit"
                className="rounded-lg bg-black px-5 py-3 font-bold text-white"
              >
                CREATE
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-xl rounded-2xl bg-violet-50 px-20 py-14">
          <div className="mx-auto flex max-w-sm flex-col items-center">
            <h3 className="max-w-2xl text-center text-2xl font-bold leading-tight sm:text-3xl md:text-2xl md:leading-tight">
              ID
            </h3>
            <form
              onSubmit={handleNewData}
              className="mx-auto mt-6 flex w-full flex-col gap-3 px-5 sm:flex-row"
            >
              <input
                type="text"
                className="grow rounded-lg border border-transparent bg-orange-200/50 py-2 px-2 placeholder:text-black/30 focus:border-orange-500 focus:outline-none"
                placeholder="New ID"
                onChange={handleId}
              />
              <button
                type="submit"
                className="rounded-lg bg-black px-5 py-3 font-bold text-white"
              >
                OK
              </button>
            </form>
          </div>
          <div className="mx-auto flex max-w-sm flex-col items-center">
            <h3 className="max-w-2xl text-center text-2xl font-bold leading-tight sm:text-3xl md:text-2xl md:leading-tight">
              URL
            </h3>
            <form
              onSubmit={handleDefinitive}
              className="mx-auto mt-6 flex w-full flex-col gap-3 px-5 sm:flex-row"
            >
              <input
                type="text"
                className="grow rounded-lg border border-transparent bg-orange-200/50 py-2 px-2 placeholder:text-black/30 focus:border-orange-500 focus:outline-none"
                placeholder="New URL"
                onChange={handleUrl}
              />
              <button
                type="submit"
                className="rounded-lg bg-black px-5 py-3 font-bold text-white"
              >
                OK
              </button>
            </form>
          </div>
          <br />
          Recorda subir un url segura
        </div>
        
      )}
    </>
  );
};


export default AddAvatars;
