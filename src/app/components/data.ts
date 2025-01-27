import { client } from "@/sanity/lib/client";

async function getData() {
  const data = await client.fetch('*[_type=="product"]');
  return data;
}

export const data = await getData()



