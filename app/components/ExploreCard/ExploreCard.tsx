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
        <h3>{title}</h3>
    </div>
  );
}