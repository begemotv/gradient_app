const Input = (props) => {
    const {name, value, onInputChange} = props;

    return (
        <>
            <label htmlFor={name ==='colorStart' ? 'color-start' : 'color-end'}>
                {name ==='colorStart' ? 'Start Color' : 'End Color'}
            </label>
            <input 
                type="text"
                placeholder="enter hex color"
                name={name}
                value={value}
                onChange={(evt) => onInputChange(evt)}
            />
        </>
    );
}
  
export default Input;