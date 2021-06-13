export const paged = (page = 0) => {
  return page >= 1 ? page -1 : 0;
};
