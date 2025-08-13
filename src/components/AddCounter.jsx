const AddCount = ({ plusHandler }) => {
  return (
    <div>
      <button className="btn btn-success" onClick={plusHandler}>
        Plus
      </button>
    </div>
  );
};

export default AddCount