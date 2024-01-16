import { Category } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category> => {
  const requestOptions = {
    method: 'GET'
  }

  const res = await fetch(`${URL}/${id}`, requestOptions);

  return res.json();
};

export default getCategory;