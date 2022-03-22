
import SectionHeader from "../molecules/SectionHeader";
import styles from "../../styles/FeatureSection.module.scss";

const FeatureSection = () => {

    return (
        <div className={styles.FeatureSection}>
            <SectionHeader title="Featured Books" />
        </div>
    )
}

export default FeatureSection;