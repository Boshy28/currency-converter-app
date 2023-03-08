import './index.scss';

const Loader = () => {
  return (
    <div className="wrapper-loader">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
