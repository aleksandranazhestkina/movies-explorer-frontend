import './Preloader.css';

export default function Preloader(props) {
  return (
    <>
      {props.isOpen && (
        <div className="preloader">
          <div className="preloader__container">
            <span className="preloader__img"></span>
          </div>
        </div>
      )}
    </>
  );
}
