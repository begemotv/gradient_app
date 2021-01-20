import styled from 'styled-components';

const ButtonAdd = ({isValid}) => {
    return (
        <ButtonAddWrapper type="submit" disabled={!isValid}>Add Gradient</ButtonAddWrapper>
    );
};

const ButtonAddWrapper = styled.button`
    display: flex;
    align-items: center;
    height: 24px;
    padding: 14px;
    margin-top: 20px;
    font-size: 14px;
    text-transform: uppercase;
    border-radius: 7px;

    &:disabled {
        color: grey;
    };

    @media(min-width: 768px) {
        margin-left: 40px;
        margin-top: 0;
    };
`;

export default ButtonAdd;
