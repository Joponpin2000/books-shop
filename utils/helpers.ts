import Image from "next/Image";

export const Imager  = Image;

   export const parseDate = (dateString: string) => {
      const d = new Date(dateString);
      return d.getFullYear();
    }

// export interface  IBookType {
//       id: number,
//       title: string,
//       subtitle: string,
//       publisher: string,
//       release_date: string,
//       number_of_purchases: number,
//       likes: number,
//       rating: number,
//       price: number,
//       currency: string,
//       available_copies: number,
//       full_description: string,
//       featured: null,
//       tag: null,
//       genre: null,
//       published_at: string,
//       created_at: string,
//       updated_at: string,
//       image_url: string,
//       authors: 
//         {
//           id: number,
//           name: string,
//           history: string,
//           rating: null,
//           book: number,
//           published_at: string,
//           created_at: string,
//           updated_at: string
//         }[],
//       tags: 
//         {
//           id: number,
//           name: string,
//           published_at: string,
//           created_at: string,
//           updated_at: strin
//         }
//       [],
//       genres: []
//     }