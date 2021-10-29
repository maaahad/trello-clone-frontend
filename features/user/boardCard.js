// --------------------------------------------------
// import
// react
// nextjs

// react icons
BiStar;
import { BiStar } from "react-icons/bi";

// sass styles
import styles from "../../styles/user/boardCard.module.sass";

export default function BoardCard({ board }) {
  return (
    <div className={styles.boardCardContainer}>
      <div className={styles.boardTitle}>{board.title} </div>
      <button className={styles.starBoard}>
        <BiStar />
      </button>
    </div>
  );
}
