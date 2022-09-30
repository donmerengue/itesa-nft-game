import { useEffect } from "react";
import { useState } from "react";
import { getDocumento, updateData } from "../../../fetchData/controllers";
import { useRouter } from "next/router";

const MarketplacePanel = () => {
  const router = useRouter();
  //Estados con informacion actual de firestore.
  const [actualAirdrop, setActualAirdrop] = useState(0);
  const [actualPrice, setActualPrice] = useState(0);
  const [actualBetPer, setActualBetPer] = useState(0);
  const [actualFee, setActualFee] = useState(0);
  const [actualPrize, setActualPrize] = useState(0);
  const [actualPrizeBet, setActualPrizeBet] = useState(0);
  const [actualExpPerLevel, setExpPerLevel] = useState(0);
  const [actualExpPerWin, setExpPerWin] = useState(0);

  // Estados para actualizar la data.
  const [newAirdrop, setNewAirdrop] = useState(0);
  const [newPrice, setNewPrice] = useState(0);
  const [newBetPer, setNewBetPer] = useState(0);
  const [newFee, setNewFee] = useState(0);
  const [newPrize, setNewPrize] = useState(0);
  const [newPrizeBet, setNewPrizeBet] = useState(0);
  const [newExpPerLevel, setNewExpPerLevel] = useState(0);
  const [newExpPerWin, setNewExpPerWin] = useState(0);

  // Setea los estados con la info de firebase.
  useEffect(() => {
    getDocumento("gameParams", "marketplaceParams").then((res) => {
      setActualAirdrop(res.airdrop);
      setActualPrice(res.nftPriceMultiplier);
    });
    getDocumento("gameParams", "prizeParams").then((res) => {
      setActualBetPer(res.betPerBattle);
      setActualFee(res.feePerBattle);
      setActualPrize(res.prizePerWin);
      setActualPrizeBet(res.prizePerWinBet);
    });
    getDocumento("gameParams", "battleParams").then((res) => {
      setExpPerLevel(res.expPerLevel);
      setExpPerWin(res.expPerWin);
    });
  }, []);

  //funciones para actualizar la data
  const handleAirdrop = (e) => setNewAirdrop(Number(e.target.value));
  const handleSendAirdrop = (e) => {
    e.preventDefault();
    const data = { airdrop: newAirdrop };
    updateData("gameParams", "marketplaceParams", data);
    setTimeout(() => {
      router.reload();
    }, 2000);
  };
  const handlePrice = (e) => setNewPrice(Number(e.target.value));
  const handleSendPrice = (e) => {
    e.preventDefault();
    const data = { nftPriceMultiplier: newPrice };
    updateData("gameParams", "marketplaceParams", data);
    setTimeout(() => {
      router.reload();
    }, 2000);
  };
  const handleBetPer = (e) => setNewBetPer(Number(e.target.value));
  const handleSendBetPer = (e) => {
    e.preventDefault();
    const data = { betPerBattle: newBetPer };
    updateData("gameParams", "prizeParams", data);
    setTimeout(() => {
      router.reload();
    }, 2000);
  };
  const handleFee = (e) => setNewFee(Number(e.target.value));
  const handleSendFee = (e) => {
    e.preventDefault();
    const data = { feePerBattle: newFee };
    updateData("gameParams", "prizeParams", data);
    setTimeout(() => {
      router.reload();
    }, 2000);
  };
  const handlePrize = (e) => setNewPrize(Number(e.target.value));
  const handleSendPrize = (e) => {
    e.preventDefault();
    const data = { prizePerWin: newPrize };
    updateData("gameParams", "prizeParams", data);
    setTimeout(() => {
      router.reload();
    }, 2000);
  };
  const handlePrizeBet = (e) => setNewPrizeBet(Number(e.target.value));
  const handleSendPrizeBet = (e) => {
    e.preventDefault();
    const data = { prizePerWinBet: newPrizeBet };
    updateData("gameParams", "prizeParams", data);
    setTimeout(() => {
      router.reload();
    }, 2000);
  };
  const handleExpPerLevel= (e) => setNewExpPerLevel(Number(e.target.value));
  const handleSendExpPerLevel = (e) => {
    e.preventDefault();
    const data = { expPerLevel: newExpPerLevel };
    updateData("gameParams", "battleParams", data);
    setTimeout(() => {
      router.reload();
    }, 2000);
  };
  const handleExpPerWin= (e) => setNewExpPerWin(Number(e.target.value));
  const handleSendExpPerWin = (e) => {
    e.preventDefault();
    const data = { expPerWin: newExpPerWin };
    updateData("gameParams", "battleParams", data);
    setTimeout(() => {
      router.reload();
    }, 2000);
  };

  return (
    <>
      <div className="relative flex  flex-col text-center items-center justify-center overflow-hidden bg-white p-8 sm:p-12">
        {/* {1} */}
        <div className="w-full max-w-xl rounded-2xl bg-violet-50 px-20 py-14">
          <div className="mx-auto flex max-w-sm flex-col items-center">
            <h3 className="max-w-2xl text-center text-2xl font-bold leading-tight sm:text-3xl md:text-2xl md:leading-tight">
              Airdrop
            </h3>
            <p className="mt-3 text-center text-black/80">
              ACTUAL: {actualAirdrop}
            </p>
            <form
              onSubmit={handleSendAirdrop}
              className="mx-auto mt-6 flex w-full flex-col gap-3 px-5 sm:flex-row"
            >
              <input
                type="text"
                className="grow rounded-lg border border-transparent bg-orange-200/50 py-2 px-2 placeholder:text-black/30 focus:border-orange-500 focus:outline-none"
                placeholder="New Airdrop"
                onChange={handleAirdrop}
              />
              <button
                type="submit"
                className="rounded-lg bg-black px-5 py-3 font-bold text-white"
              >
                Change
              </button>
            </form>
          </div>
        </div>
        {/* {2} */}
        <div className="w-full max-w-xl rounded-2xl bg-violet-50 px-20 py-14">
          <div className="mx-auto flex max-w-sm flex-col items-center">
            <h3 className="max-w-2xl text-center text-2xl font-bold leading-tight sm:text-3xl md:text-2xl md:leading-tight">
              nftPriceMultiplier
            </h3>
            <p className="mt-3 text-center text-black/80">
              ACTUAL: {actualPrice}
            </p>
            <form
              onSubmit={handleSendPrice}
              className="mx-auto mt-6 flex w-full flex-col gap-3 px-5 sm:flex-row"
            >
              <input
                type="text"
                className="grow rounded-lg border border-transparent bg-orange-200/50 py-2 px-2 placeholder:text-black/30 focus:border-orange-500 focus:outline-none"
                placeholder="New Price Multiplier"
                onChange={handlePrice}
              />
              <button
                type="submit"
                className="rounded-lg bg-black px-5 py-3 font-bold text-white"
              >
                Change
              </button>
            </form>
          </div>
        </div>
        {/* {3} */}
        <div className="w-full max-w-xl rounded-2xl bg-violet-50 px-20 py-14">
          <div className="mx-auto flex max-w-sm flex-col items-center">
            <h3 className="max-w-2xl text-center text-2xl font-bold leading-tight sm:text-3xl md:text-2xl md:leading-tight">
              BetPerBattle
            </h3>
            <p className="mt-3 text-center text-black/80">
              ACTUAL: {actualBetPer}
            </p>
            <form
              onSubmit={handleSendBetPer}
              className="mx-auto mt-6 flex w-full flex-col gap-3 px-5 sm:flex-row"
            >
              <input
                type="text"
                className="grow rounded-lg border border-transparent bg-orange-200/50 py-2 px-2 placeholder:text-black/30 focus:border-orange-500 focus:outline-none"
                placeholder=" New BetPerBattle"
                onChange={handleBetPer}
              />
              <button
                type="submit"
                className="rounded-lg bg-black px-5 py-3 font-bold text-white"
              >
                Change
              </button>
            </form>
          </div>
        </div>
        {/* {4} */}
        <div className="w-full max-w-xl rounded-2xl bg-violet-50 px-20 py-14">
          <div className="mx-auto flex max-w-sm flex-col items-center">
            <h3 className="max-w-2xl text-center text-2xl font-bold leading-tight sm:text-3xl md:text-2xl md:leading-tight">
              FeePerBattle
            </h3>
            <p className="mt-3 text-center text-black/80">
              ACTUAL: {actualFee}
            </p>
            <form
              onSubmit={handleSendFee}
              className="mx-auto mt-6 flex w-full flex-col gap-3 px-5 sm:flex-row"
            >
              <input
                type="text"
                className="grow rounded-lg border border-transparent bg-orange-200/50 py-2 px-2 placeholder:text-black/30 focus:border-orange-500 focus:outline-none"
                placeholder="New FeePerBattle"
                onChange={handleFee}
              />
              <button
                type="submit"
                className="rounded-lg bg-black px-5 py-3 font-bold text-white"
              >
                Change
              </button>
            </form>
          </div>
        </div>
        {/* {5} */}
        <div className="w-full max-w-xl rounded-2xl bg-violet-50 px-20 py-14">
          <div className="mx-auto flex max-w-sm flex-col items-center">
            <h3 className="max-w-2xl text-center text-2xl font-bold leading-tight sm:text-3xl md:text-2xl md:leading-tight">
              PrizePerWin
            </h3>
            <p className="mt-3 text-center text-black/80">
              ACTUAL: {actualPrize}
            </p>
            <form
              onSubmit={handleSendPrize}
              className="mx-auto mt-6 flex w-full flex-col gap-3 px-5 sm:flex-row"
            >
              <input
                type="text"
                className="grow rounded-lg border border-transparent bg-orange-200/50 py-2 px-2 placeholder:text-black/30 focus:border-orange-500 focus:outline-none"
                placeholder="New PrizePerWin"
                onChange={handlePrize}
              />
              <button
                type="submit"
                className="rounded-lg bg-black px-5 py-3 font-bold text-white"
              >
                Change
              </button>
            </form>
          </div>
        </div>
        {/* {6} */}
        <div className="w-full max-w-xl rounded-2xl bg-violet-50 px-20 py-14">
          <div className="mx-auto flex max-w-sm flex-col items-center">
            <h3 className="max-w-2xl text-center text-2xl font-bold leading-tight sm:text-3xl md:text-2xl md:leading-tight">
              PrizePerWinBet
            </h3>
            <p className="mt-3 text-center text-black/80">
              ACTUAL: {actualPrizeBet}
            </p>
            <form
              onSubmit={handleSendPrizeBet}
              className="mx-auto mt-6 flex w-full flex-col gap-3 px-5 sm:flex-row"
            >
              <input
                type="text"
                className="grow rounded-lg border border-transparent bg-orange-200/50 py-2 px-2 placeholder:text-black/30 focus:border-orange-500 focus:outline-none"
                placeholder="New PrizePerWinBet"
                onChange={handlePrizeBet}
              />
              <button
                type="submit"
                className="rounded-lg bg-black px-5 py-3 font-bold text-white"
              >
                Change
              </button>
            </form>
          </div>
        </div>
        {/* {7} */}
        <div className="w-full max-w-xl rounded-2xl bg-violet-50 px-20 py-14">
          <div className="mx-auto flex max-w-sm flex-col items-center">
            <h3 className="max-w-2xl text-center text-2xl font-bold leading-tight sm:text-3xl md:text-2xl md:leading-tight">
              ExpPerLevel
            </h3>
            <p className="mt-3 text-center text-black/80">
              ACTUAL: {actualExpPerLevel}
            </p>
            <form
              onSubmit={handleSendExpPerLevel}
              className="mx-auto mt-6 flex w-full flex-col gap-3 px-5 sm:flex-row"
            >
              <input
                type="text"
                className="grow rounded-lg border border-transparent bg-orange-200/50 py-2 px-2 placeholder:text-black/30 focus:border-orange-500 focus:outline-none"
                placeholder="New  ExpPerLevel"
                onChange={handleExpPerLevel}
              />
              <button
                type="submit"
                className="rounded-lg bg-black px-5 py-3 font-bold text-white"
              >
                Change
              </button>
            </form>
          </div>
        </div>
        {/* {8} */}
        <div className="w-full max-w-xl rounded-2xl bg-violet-50 px-20 py-14">
          <div className="mx-auto flex max-w-sm flex-col items-center">
            <h3 className="max-w-2xl text-center text-2xl font-bold leading-tight sm:text-3xl md:text-2xl md:leading-tight">
              ExpPerWin
            </h3>
            <p className="mt-3 text-center text-black/80">
              ACTUAL: {actualExpPerWin}
            </p>
            <form
              onSubmit={handleSendExpPerWin}
              className="mx-auto mt-6 flex w-full flex-col gap-3 px-5 sm:flex-row"
            >
              <input
                type="text"
                className="grow rounded-lg border border-transparent bg-orange-200/50 py-2 px-2 placeholder:text-black/30 focus:border-orange-500 focus:outline-none"
                placeholder="New ExpPerWin"
                onChange={handleExpPerWin}
              />
              <button
                type="submit"
                className="rounded-lg bg-black px-5 py-3 font-bold text-white"
              >
                Change
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketplacePanel;
