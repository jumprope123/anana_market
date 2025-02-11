import styles from "./LoadingOverlay.module.css";

import spinner from "/spinner.svg";
interface LoadingOverlayProps {
  text?: string;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  text = "데이터를 불러오는 중입니다.",
}: LoadingOverlayProps) => {
  return (
    <div className={styles.wrapper}>
      <img src={spinner} alt="로딩중" width={50} />
      <p>{text}</p>
    </div>
  );
};

export default LoadingOverlay;
