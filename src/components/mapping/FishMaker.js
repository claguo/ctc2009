import React, {useState} from "react";
import Fish from "./Fish";

function FishMaker() {
  const [formData, setFormData] = useState({name: "", birthday: "", time: ''});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const lettercolor = {
    'a': '#0000b4',
    'b': '#af0d66',
    'c': '#92f846',
    'd': '#ffc82f',
    'e': '#ff7700',
    'f': '#b9b9b9',
    'g': '#ebebde',
    'h': '#646464',
    'i': '#ffff00',
    'j': '#371370',
    'k': '#ffff96',
    'l': '#ca405e',
    'm': '#cd923f',
    'n': '#0c4b64',
    'o': '#ff0000',
    'p': '#d6a3ff',
    'q': '#abb5ff',
    'r': '#254619',
    's': '#792187',
    't': '#538cd0',
    'u': '#009a25',
    'v': '#b2dccd',
    'w': '#ff98d5',
    'x': '#00004a',
    'y': '#afc84a',
    'z': '#732b05',
  };
  let color='#000000'
  if (formData.name[0] !== undefined) {
    color = lettercolor[formData.name.toLowerCase()[0]];
  }
  let length = 36;
  let checklength = Math.pow(formData.name.length, 3);
  let eyePos = '1';
  let pattern = 'half';

  if (checklength > 36) {
    length = checklength;
  }
  if (formData.birthday.slice(0,2)%2===0) {
    eyePos='0';
  }
  if (6 <= formData.birthday.charAt(formData.birthday.length-1) && formData.birthday.charAt(formData.birthday.length-1) <= 9) {
    pattern = 'spots';
  } else if (3 <= formData.birthday.charAt(formData.birthday.length-1) && formData.birthday.charAt(formData.birthday.length-1) <= 5) {
    pattern = '';
  }
 

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    setIsSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div style={{margin: '8rem 4rem 0', width: '40%', display: 'flex', flexDirection: 'column', gap: '2rem'}}>
      <div>MAPPING</div>
      <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
        <div>what fish are you!</div>
        <label>
          first name:
          <input name='name'
          value={formData.name}
          placeholder='first name'
          onChange={handleChange}/>
        </label>
        <label>
          birthday:
          <input name='birthday'
          value={formData.birthday}
          placeholder='mm/dd/yyyy'
          onChange={handleChange}/>
        </label>
        <button type="submit">Submit</button>
      </form>
      {isSubmitted &&
        <Fish
        color={color}
        length={length}
        eyePos={eyePos}
        eyeSize={16} pattern={pattern}/>
      }
    </div>
  )
}

export default FishMaker;