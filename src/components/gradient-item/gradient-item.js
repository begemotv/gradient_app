import styled from 'styled-components';

const GradientItem = styled.div`
  height: 30px;
  width: 100px;
  box-sizing: border-box;
  display: flex;
  background-image: linear-gradient(to right, ${props => props.gradient.hexColors[0]}, ${props => props.gradient.hexColors[1]});
`;

export default GradientItem;