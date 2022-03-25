import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BackButton from "../components/atoms/BackButton";
import ProductDetailsCard from "../components/molecules/BookDetailsCard";
import PageLayout from "../components/organisms/PageLayout";
import styles from "../styles/BookDetails.module.scss";
import { IBookType } from "../utils/helpers";
import bookList from "../utils/books.json";
import  Link from 'next/link';

const BookDetails: NextPage = () => {
  const router = useRouter();
  const { book } = router.query;
  const [bookData, setBookData] = useState<IBookType>();

  useEffect(() => {
    var found = bookList.data.find((b) => b.id.toString() === book);
    setBookData(found);
  }, [book]);

  return (
    <PageLayout>
      <div className={styles.ProductDetails}>
        <Link href="/">
          <a>
            <BackButton onClick={() => {}} />
          </a>
        </Link>
        {bookData && <ProductDetailsCard book={bookData} />}
      </div>
    </PageLayout>
  );
};

export default BookDetails;
