const baseURL = "http://localhost:8000";

export const getComics = async () => {
  const response = await fetch(`${baseURL}/comics`).then((res) => res.json());

  return response;
};

export const getComicById = async (id) => {
  const response = await fetch(`${baseURL}/comic?id=${id}`).then((res) =>
    res.json()
  );

  return response;
};
