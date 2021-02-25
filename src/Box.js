const Box = ({
  color = "blue",
  width = "100px",
  height = "100px",
  remove,
  id,
}) => {
  return (
    <div>
      <div
        id={id}
        style={{
          backgroundColor: `${color}`,
          width: `${width}`,
          height: `${height}`,
        }}
      ></div>
      <button onClick={() => remove(id)}>x</button>
    </div>
  );
};

export default Box;
