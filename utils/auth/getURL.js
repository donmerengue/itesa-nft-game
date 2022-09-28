export const getURLPath = () => {

  if (typeof window !== "undefined") {
    return window?.location;
  }
 
};
