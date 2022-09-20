import Avatars from "./Avatars";

const CreateAvatar = () => {
  const avatars = [
    { img: "https://imgur.com/rjuWPzD.png" },
    { img: "https://imgur.com/nvD4rT2.png" },
    { img: "https://imgur.com/6yKQ65s.png" },
    { img: "https://imgur.com/JuHKTlD.png" },
    { img: "https://imgur.com/Au723mw.png" },
    { img: "https://imgur.com/rNudYb8.png" },
    { img: "https://imgur.com/FQdD8s4.png" },
    { img: "https://imgur.com/GZNo6Af.png" },
  ];
  return (
    <>
      <div className="flex">
        <section className="bg-white dark:bg-gray-900">
          <div className="container px-6 py-10 mx-auto">
            <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
              Avatars
            </h1>
            <p>Select your avatar to start this adventure</p>
            <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
              {avatars.map((avatar, i) => (
                <Avatars avatar={avatar} key={i} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CreateAvatar;
