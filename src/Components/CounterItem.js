import React, {useState} from 'react';
import '../App.css';
import {connect} from "react-redux";
import {
  counterDecrementValue,
  counterIncrementValue,
  counterResetValue,
  counterDeleteConfirmation,
  saveNewCounterName
} from "../redux/actions";


function CounterItem(props) {

  const {name, value, id} = props.counter;

  const [newCounterName, setNewCounterName] = useState(name);
  const [editState, setEditState] = useState(true);


  const saveNewCounterName = () => {
    setEditState(!editState);
    props.saveNewCounterName({id, newCounterName});
  };

  return (
    <div className='card mainColor'>
      <div className='card-body'>
        <div className='row'>
          <div className='col text-center'>
            {editState && <span>{name}</span>}
            {!editState && <input type='text'
                                  className="form-control"
                                  value={newCounterName}
                                  autoFocus
                                  onChange={(e) => setNewCounterName(e.target.value)}
            />}

          </div>
          <div className='col text-center d-inline-flex'>
            <button className='btn btn-outline-secondary ml-auto' onClick={() => props.counterDecrementValue(id)}>-</button>
            <span className=' m-auto'><strong>{+value}</strong></span>
            <button className='btn btn-outline-secondary mr-auto' onClick={() => props.counterIncrementValue(id)}>+</button>
          </div>
          <div className='col center btn-group btn-group-toggle'>

            { editState &&
              <button className='btn btn-outline-primary' onClick={() => props.counterResetValue(id)}>Reset</button>
            }
            {editState &&
            <button className='btn btn-outline-warning' onClick={() => setEditState(!editState)}>Edit</button>
            }
            {!editState &&
            <button className='btn btn-outline-warning' onClick={() => saveNewCounterName({id, newCounterName})}>Save</button>
            }

            {editState && <button className='btn btn-outline-danger'
                    onClick={() => props.counterDeleteConfirmation(id)}
            >Delete
            </button>}

          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  counters: state.counters
});

const mapDispatchToProps = dispatch => ({
  counterDecrementValue: (id) => dispatch(counterDecrementValue(id)),
  counterIncrementValue: (id) => dispatch(counterIncrementValue(id)),
  counterResetValue: (id) => dispatch(counterResetValue(id)),
  counterDeleteConfirmation: (id) => dispatch(counterDeleteConfirmation(id)),
  saveNewCounterName: (args) => dispatch(saveNewCounterName(args))
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterItem);
