import styled from 'styled-components';
import GradientItem from '../gradient-item/gradient-item';
import ButtonDelete from '../button-delete/button-delete';

const GradientListContainer = styled.ul`
    width: 30px;
    height: 30px;
    text-align: center;
    padding: 5px 0;
    font-size: 16px;
    font-weight: bold;
    border-radius: 15px;
`;

const GradientListItem = styled.li`
    width: 30px;
    height: 30px;
    text-align: center;
    padding: 5px 0;
    font-size: 16px;
    font-weight: bold;
    border-radius: 15px;
`;

const GradientList = ({gradients, onDeleteClick}) => {
    return (
        <>
            {!gradients ? '' : gradients.map((gradient, i) => (
                <li key={i}>
                    <GradientItem gradient={gradient}/>
                    <ButtonDelete onClick={() => onDeleteClick(i)}>X</ButtonDelete>
                </li> 
            ))}
        </>
    )
}

export default GradientList;