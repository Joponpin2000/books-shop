import type { NextPage } from "next";
import FeatureSection from "../components/organisms/FeatureSection";
import BookListingSection from "../components/organisms/BookListingSection";
import PageLayout from "../components/organisms/PageLayout";

const Home: NextPage = () => {
  return (
    <PageLayout>
      <FeatureSection />
      <BookListingSection />
    </PageLayout>
  );
};

export default Home;
