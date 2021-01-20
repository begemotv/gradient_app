const Input = (props) => {
    const {value, onGradientInput} = props;

    return (
      <input type="text" value={value} onChange={onGradientInput} />
    );
  }
  
  export default Input;