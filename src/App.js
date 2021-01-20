import {useState, useEffect} from 'react';
import Input from './components/input/input';
import GradientList from './components/gradient-list/gradient-list';

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
    }

    const handleGradientAdd = (evt) => {
        evt.preventDefault();
        setGradients([...gradients, {
            id: gradients.length,
            hexColors: [input.colorStart, input.colorEnd]
        }]);
        setInput({
            colorStart: '',
            colorEnd: ''
        });
        setIsValid(false);
    }

    const handleGradientDelete = (id) => {
        const gradientsUpdated = gradients.filter(item => item.id !== id);
        setGradients(gradientsUpdated);
    }

    return (
        <>
            <h1>Gradient App</h1>
            <form onSubmit={(evt) => handleGradientAdd(evt)}>
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
                <button type="submit" disabled={!isValid}>Add Gradient</button>
                <GradientList gradients={gradients} onDeleteClick={handleGradientDelete} />
            </form>
        </>
    );
}

export default App;
