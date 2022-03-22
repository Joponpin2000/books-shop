
import styles from "../../styles/SectionHeader.module.scss";

interface PropTypes {
    title: string;
}

const SectionHeader = ({title}: PropTypes) => {
    return (
        <div className={styles.SectionHeader}>
            <h4>{title}</h4>
        </div>
    )
}

export default SectionHeader;
