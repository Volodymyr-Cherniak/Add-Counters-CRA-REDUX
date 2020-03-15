import React, {useState} from "react";
import {connect} from 'react-redux';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {addCounter, counterDeleteValue, resetCounterDeleteConfirmation} from "../redux/actions";

const ConfirmDeleteCounter = (props) => {

  const [name, setName] = useState('');

  const counterName = props.counterDeleteConfirmation.name || '';

  const counterDelete = () => {
    props.counterDeleteValue(props.counterDeleteConfirmation.id);
    props.resetCounterDeleteConfirmation();
    setName('');
  };
  const toggle = () => {
    props.resetCounterDeleteConfirmation();
  };



  return (
    <div>
      <Modal isOpen={!!counterName} toggle={toggle} className='className'>
        <ModalHeader toggle={toggle}>
          Type
          <strong>
            {` ${counterName} `}
          </strong>
          to delete
        </ModalHeader>
        <ModalBody>
          <input type='text'
                 className="form-control"
                 placeholder='Type here'
                 value={name}
                 onChange={e => setName(e.target.value)}
          />
        </ModalBody>
        <ModalFooter>
          <Button outline color="danger"
                  onClick={counterDelete}
                  disabled={name !== counterName}
          >Delete</Button>{' '}
          <Button outline color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  )
};

const mapStateToProps = state => ({
  counterDeleteConfirmation: state.counterDeleteConfirmation,
});

const mapDispatchToProps = dispatch => ({
  addCounter: (args) => dispatch(addCounter(args)),
  resetCounterDeleteConfirmation: () => dispatch(resetCounterDeleteConfirmation()),
  counterDeleteValue: (id) => dispatch(counterDeleteValue(id)),

});

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmDeleteCounter)
