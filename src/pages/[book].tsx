import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BackButton from "../components/atoms/BackButton";
import ProductDetailsCard from "../components/molecules/ProductDetailsCard";
import PageLayout from "../components/organisms/PageLayout";
import styles from "../styles/ProductDetails.module.scss"
import { IBookType } from "../utils/helpers";
import bookList from "../utils/data.json"

const BookDetails: NextPage = () => {
    const router = useRouter();
    const { book } = router.query;
    const [bookData, setBookData] = useState<IBookType >();

    useEffect(() => {
      var found = bookList.data.find(b => b.id.toString() === book)
      setBookData(found)
    }, [])

  return (
    <PageLayout>
      <div className={styles.ProductDetails}>
              <BackButton onClick={() => router.back()} />
              <ProductDetailsCard />
      </div>
    </PageLayout>
  );
};

export default BookDetails