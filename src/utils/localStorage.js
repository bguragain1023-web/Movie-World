export const storeInLocalSession = (mvList) => {
  localStorage.setItem("movieList", JSON.stringify(mvList));
};

export const accessFromLocalSession = () => {
  const str = localStorage.getItem("movieList");
  return str ? JSON.parse(localStorage.getItem("movieList")) : null;
};
