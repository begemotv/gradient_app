import {useState} from 'react';
// import Input from './components/input/input';
import GradientItem from './components/gradient-item/gradient-item';

const App = () => {
  const [input, setInput] = useState({
    colorStart: '',
    colorEnd: ''
  });
  const [gradients, setGradients] = useState([]);

  console.log(input)
  console.log(gradients)

  const handleInputChange = (evt) => {
    const {name, value} = evt.target;
    setInput({
      ...input,
      [name]: value
    })
  }

  const addGradient = (evt) => {
    console.log(`click`)
    evt.preventDefault();
    setGradients([...gradients, {
      id: gradients.length,
      hexColors: [input.colorStart, input.colorEnd]
    }])
    setInput({
      colorStart: '',
      colorEnd: ''
    })
  }

  return (
    <div className="App">
      <h1>Gradient App</h1>
      <form onSubmit={(evt) => addGradient(evt)}>
        <label htmlFor="color-start">Start Color</label>
        <input 
          type="text"
          value={input.colorStart}
          placeholder="#b86d0c"
          name="colorStart"
          onChange={(evt) => handleInputChange(evt)}
        />
        <label htmlFor="color-end">End Color</label>
        <input 
          type="text"
          value={input.colorEnd}
          placeholder="#276c58"
          name="colorEnd"
          onChange={(evt) => handleInputChange(evt)}
        />
        <button type="submit">Add Gradient</button>
        {gradients.map((gradient, i) => (
         <li key={i}>
           <GradientItem gradient={gradients[i]}/>
         </li> 
        ))}
      </form>
    </div>
  );
}

export default App;
