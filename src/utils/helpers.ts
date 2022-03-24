import Image from "next/image";

export const Imager  = Image;

   export const parseDate = (dateString: string, full = false) => {
      const d = new Date(dateString);
      return full ? d.toDateString() : d.getFullYear();
    }
export const totalCartAmount = (cartItems: any[]) => {
  return Number(
    cartItems.reduce((acc, item) => {
       
      const itemAmount = item.quantity * item.book.price;
      return acc + itemAmount;
    }, 0)
  ).toLocaleString();
};

export 
  const renderTags = (array: IBookType["tags"]) => {
    var tags = array.map((a) => a.name);
    return tags.join(", ");
  };
  
export interface IBookType {
  id: number;
  title: string;
  subtitle: string | null;
  publisher: string;
  release_date: string;
  number_of_purchases: number;
  likes: number;
  rating: number;
  price: number;
  currency: string;
  available_copies: number;
  full_description: string;
  featured: boolean | null;
  tag: string | null;
  genre: string | null;
  published_at: string;
  created_at: string;
  updated_at: string;
  image_url: string;
  authors: {
    id: number;
    name: string;
    history: string;
    rating: number | string | null;
    book: number;
    published_at: string;
    created_at: string;
    updated_at: string;
  }[];
  tags: {
    id: number;
    name: string;
    published_at: string;
    created_at: string;
    updated_at: string;
  }[];
  genres: {
    id: number;
    name: string;
    published_at: string;
    created_at: string;
    updated_at: string;
  }[];
}