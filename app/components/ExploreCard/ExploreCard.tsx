import styles from "./ExploreCard.module.css"

type ExploreCardProps = {
  title: string;
}

export default function ExploreCard({ title }: ExploreCardProps) {


  return (
    <div className={`${styles.exploreCard} thinBorderBox`}>
        <div>
          image section
        </div>
        <div className={styles.expandable}>
          <h3>{title}</h3>
          <p>This is a short description of what this page is.</p>
        </div>
    </div>
  );
}