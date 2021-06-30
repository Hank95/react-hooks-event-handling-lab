// Code Keypad Component Here
const Keypad = (props) => {
  function handleChange() {
    console.log("Entering password...");
  }
  return <input type="password" onChange={handleChange}></input>;
};

export default Keypad;
