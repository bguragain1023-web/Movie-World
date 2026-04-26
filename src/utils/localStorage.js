export const storeInLocalSession = (mvList) => {
  localStorage.setItem("movieList", JSON.stringify(mvList));
};

export const accessFromLocalSession = () => {
  const str = localStorage.getItem("movieList");
  return str ? JSON.parse(localStorage.getItem("movieList")) : null;
};

export const deleteFromLocalStorage = (imdbID) => {
  const mvList = accessFromLocalSession();
  const deleted = mvList.filter((item) => item.imdbID !== imdbID);
  localStorage.setItem("movieList", JSON.stringify(deleted));
};
