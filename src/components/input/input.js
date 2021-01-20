import styled from "styled-components";

const Input = ({name, value, onInputChange}) => {
    return (
        <InputWrapper>
            <Label htmlFor={name ==='colorStart' ? 'color-start' : 'color-end'}>
                {name ==='colorStart' ? 'Start' : 'End'}
            </Label>
            <InputField 
                type="text"
                placeholder="enter hex color"
                name={name}
                value={value}
                onChange={(evt) => onInputChange(evt)}
            />
        </InputWrapper>
    );
};

const Label = styled.label`
    font-size: 16px;
    text-transform: uppercase;
    margin: 20px auto auto auto;

    @media(min-width: 768px) {
        margin: auto auto auto 30px;
    };
`;

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media(min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    };
`;

const InputField = styled.input`
    width: 160px;
    padding: 10px;
    margin: 10px;
    font-size: 20px;
    text-align: center;
    color: palevioletred;
    background: papayawhip;
    border: none;
    border-radius: 3px;
`;
  
export default Input;
