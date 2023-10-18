import React, { useState } from "react";

function ForMachine() {
  const [formData, setFormData] = useState({text: "", hexcode: ''});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    setIsSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  function textToHex(text) {
    let hexString = '';
    for (let i = 0; i < text.length; i++) {
      const codePoint = text.codePointAt(i);
      hexString += codePoint.toString(16).toUpperCase().padStart(4, '0');
    }
    return hexString;
  }

  function hexToString(hex) {
    const sections = [];
    for (let i = 0; i < hex.length; i += 4) {
      sections.push(hex.slice(i, i + 4));
    }
    return sections.map((s, index) => {
      const codePoint = parseInt(s, 16);
      if (!isNaN(codePoint)) {
        return <div key={index}>{String.fromCodePoint(codePoint)}</div>;
      }
      return null;
    });
  }

  const newhexcode = textToHex(formData.text);
  const newtext = hexToString(formData.hexcode);

  return (
    <>
      <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '2rem'}}>
        <label>
          text to hexcode
          <input name='text'
          value={formData.text}
          placeholder='text'
          onChange={handleChange}/>
        </label>
        <button type="submit">Submit</button>
        {/* {subsections.map((s, index) => (
          <div key={index}>{escapeUnicode(s)}</div>
        ))} */}
        {/* <div>{escapeUnicode(formData.input)}</div> */}
        <div>{newhexcode}</div>

        <label>
          hexcode to text
          <input name='hexcode'
          value={formData.hexcode}
          placeholder='hexcode'
          onChange={handleChange}/>
        </label>
        <div>{newtext}</div>
      </form>
    </>
  )
}

export default ForMachine;