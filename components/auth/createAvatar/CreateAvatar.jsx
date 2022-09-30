import Avatars from "./Avatars";
import { auth } from "../../../firebase/firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import { getData, getDocumento } from "../../../fetchData/controllers";
import { useEffect, useState } from "react";

const CreateAvatar = () => {
  // Traer data de Auth del usuario
  const [user, loading, error] = useAuthState(auth);
  const [avatarsDB, setAvatarsDB] = useState([]);

  useEffect(() => {
    const getAvatars = async () => {
      const avatars = await getData("avatars");
      setAvatarsDB(avatars);
    };

    getAvatars();
  }, []);

  return (
    <>
      {/* Renderizar solo si el usuario esta verificado */}
      {user?.emailVerified ? (
        <div className="flex">
          <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
              <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
                Avatars
              </h1>
              <p>Select your avatar to start this adventure</p>
              <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
                {avatarsDB.map((avatar, i) => (
                  <Avatars avatar={avatar} key={i} />
                ))}
              </div>
            </div>
          </section>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default CreateAvatar;
