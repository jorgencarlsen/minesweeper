import React from 'react';
import styled from 'styled-components'

const ControlsContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-end;

  div {
    margin-top: 10px;
  }


`;

const InputContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;

  input {
    font-size: 18px;
    width: 75px;
    height: 25px;
    border-radius: 4px;
    margin-left: 5px;
    padding: 2px;
    padding-bottom: 0;
  }

  input:focus {
    outline: 0;
  }
`;

const GameControls = ({ handleGameReset, setValues, values }) => {

  const handleChange = (e) => {
    const { name, value } = e.target;
    const valueToNum = parseInt(value);
    if (valueToNum < 4 || valueToNum > 30) {
      setValues({
        ...values,
        [name]: 10,
      });
    } else {
      setValues({
        ...values,
        [name]: valueToNum,
      });
    }
  }

  return (
    <ControlsContainer>
      <InputContainer>
        <div>
          Matrix size (4 to 30):
          <input value={values.rows} name='rows' type='number' placeholder='10' min='10' max='30' onChange={handleChange}></input>
        </div>
        <div>
          No. of mines (4 to 30):
          <input value={values.mines} name='mines' type='number' placeholder='10' onChange={handleChange}></input>
        </div>
      </InputContainer>
      <button onClick={handleGameReset}>Reset Game</button>
    </ControlsContainer> );
}

export default GameControls;