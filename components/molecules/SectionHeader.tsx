
import styles from "../../styles/SectionHeader.module.scss";

interface IProps {
    title: string;
}

const SectionHeader = ({title}: IProps) => {
    return (
        <div className={styles.SectionHeader}>
            <h4>{title}</h4>
        </div>
    )
}

export default SectionHeader;
