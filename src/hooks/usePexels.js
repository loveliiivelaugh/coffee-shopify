import React, { useState, useEffect } from "react";
import { createClient } from 'pexels';


export function usePexels(q) {
  const [photos, setPhotos] = useState([])
  useEffect(() => {
    async function connectToPexels(q) {
      const client = await createClient(process.env.PEXELS_API_KEY);
      // const q = 'Coffee'; //query paramater
      await client.photos.search({ query: q, per_page: 30 }).then(photos => {
        console.info(photos)
        setPhotos(photos);
      });
    }
    connectToPexels(q);
  }, []);
  return photos;
}