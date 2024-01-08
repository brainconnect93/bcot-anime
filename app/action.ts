'use server'

const fetchAnime = async(page: number) => {
  const res = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`);

  const data = await res.json();
  
  return data;
}

export default fetchAnime