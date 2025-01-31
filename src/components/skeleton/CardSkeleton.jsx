import "./style.css";
const CardSkeleton = () => {
  return (
    <>
      <div className="skeleton-wrapper">
        <div className="skeleton-image"></div>
        <div className="skeleton-text"></div>
        <div className="skeleton-text"></div>
        <div className="skeleton-text short"></div>
      </div>
    </>
  );
};

export default CardSkeleton;
