import styled from 'styled-components';

const GradientItem = ({gradient}) => {
    return (
        <GradientItemWrapper gradient={gradient}>
            <HexCodeText>{gradient.hexColors[0]}</HexCodeText>
            <HexCodeText>{gradient.hexColors[1]}</HexCodeText>
        </GradientItemWrapper>
    );
};

const GradientItemWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    width: 100%;
    color: white;
    background-image: linear-gradient(to right, ${props => props.gradient.hexColors[0]}, ${props => props.gradient.hexColors[1]});

    @media(min-width: 768px) {
        height: 100px;
        width: 600px;
    };
`;

const HexCodeText = styled.p`
    font-size: 16px;
    margin: 20px;
`;

export default GradientItem;
