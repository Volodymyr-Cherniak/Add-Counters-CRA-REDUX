import React, {useState} from "react";
import {connect} from 'react-redux';
import {addCounter} from '../redux/actions';

const AddCounter = (props) => {

  const [name, setName] = useState('');
  const [value, setValue] = useState('');

  const addCounter = (args) => {
    if(name && value) {
      props.addCounter(args);
      setValue('');
      setName('');
    }
  };

  return (
    <div className='card mb-2 mainColor'>
      <div className='card-body'>
        <div className='row'>
          <div className="input-group ml-5 mr-5">
            <input type="text"
                   className="form-control"
                   placeholder='Add Name'
                   value={name}
                   onChange={e => setName(e.target.value)}
            />
            <input type="number"
                   className="form-control"
                   placeholder='Add Value'
                   value={value}
                   onChange={e => setValue(e.target.value)}
            />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary pl-4 pr-4"
                      onClick={() => addCounter({name, value})}
              >Add Counter</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

};

const mapDispatchToProps = dispatch => ({
  addCounter: (args) => dispatch(addCounter(args)),
});

export default connect(null, mapDispatchToProps)(AddCounter)
