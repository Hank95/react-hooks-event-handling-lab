// Code EyesOnMe Component Here
const EyesOnMe = (props) => {
  const handleBlur = () => console.log("Hey! Eyes on me!");
  const handlefocus = () => console.log("Good!");

  return (
    <button onFocus={handlefocus} onBlur={handleBlur}>
      Eyes on me
    </button>
  );
};

export default EyesOnMe;
