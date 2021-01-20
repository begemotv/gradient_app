import {useState, useEffect} from 'react';
import styled, {createGlobalStyle} from 'styled-components';

import ButtonAdd from './components/button-add/button-add';
import GradientList from './components/gradient-list/gradient-list';
import Input from './components/input/input';

const App = () => {
    const [input, setInput] = useState({
        colorStart: '',
        colorEnd: ''
    });
    const [gradients, setGradients] = useState([]);
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        if (/^#(?:[0-9a-fA-F]{3}){1,2}$/.test(input.colorStart) && /^#(?:[0-9a-fA-F]{3}){1,2}$/.test(input.colorEnd)) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }, [input]);

    const handleInputChange = (evt) => {
        const {name, value} = evt.target;
        setInput({
            ...input,
            [name]: value
        });
    };

    const handleGradientAdd = (evt) => {
        evt.preventDefault();
        setGradients([...gradients, {
            id: Date.now(),
            hexColors: [input.colorStart, input.colorEnd]
        }]);
        setInput({
            colorStart: '',
            colorEnd: ''
        });
        setIsValid(false);
    };

    const handleGradientDelete = (id) => {
        const gradientsUpdated = gradients.filter(item => item.id !== id);
        setGradients(gradientsUpdated);
    };

    return (
        <AppWrapper>
            <GlobalStyle />
            <Title>Gradient App</Title>
            <Form onSubmit={(evt) => handleGradientAdd(evt)}>
                <Input
                    value={input.colorStart}
                    name={'colorStart'}
                    onInputChange={handleInputChange}
                />
                <Input
                    value={input.colorEnd}
                    name={'colorEnd'}
                    onInputChange={handleInputChange}
                />
                <ButtonAdd isValid={isValid} />
            </Form>
            <GradientList gradients={gradients} onDeleteClick={handleGradientDelete} />
        </AppWrapper>
    );
};

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    background-color: black;
    color: white;
    font-family: 'Roboto', sans-serif;
  };
`;

const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Title = styled.h1`
    margin: 50px auto 50px auto;
    text-transform: uppercase;
    font-size: 28px;
    letter-spacing: 15px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;

    @media(min-width: 768px) {
        flex-direction: row;
    };
`;

export default App;
