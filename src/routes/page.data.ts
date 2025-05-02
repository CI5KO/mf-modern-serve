export const loader = async () => {
  const response = await fetch(`${process.env.API}/hello`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};
