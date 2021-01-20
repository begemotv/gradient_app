import styled from 'styled-components';
import GradientItem from '../gradient-item/gradient-item';
import ButtonDelete from '../button-delete/button-delete';

const GradientList = ({gradients, onDeleteClick}) => {
    return (
        <GradientListContainer>
            {!gradients ? '' : gradients.map((gradient, i) => (
                <GradientListItemWrapper key={i}>
                    <GradientItem gradient={gradient}/>
                    <ButtonDelete onClick={() => onDeleteClick(gradient.id)}>X</ButtonDelete>
                </GradientListItemWrapper> 
            ))}
        </GradientListContainer>
    );
};

const GradientListContainer = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 25px 0;
    margin: 0 auto;
    margin-left: 15px;
`;

const GradientListItemWrapper = styled.li`
    display: flex;
    justify-content: space-between;
    margin: 20px auto auto auto;
`;

export default GradientList;
