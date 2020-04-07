import React from 'react';
import {connect} from "react-redux";
import {countersResetAllValue} from "../redux/actions";

function TotalCounters(props) {

  const totalCountersValue = props.counters.reduce((acc, cur) => acc + cur.value, 0);

  return (
    <div className='card mainColor'>
      <div className="card-body">
        <div className="row">
          <div className="col text-center">
            <h4 className='d-inline-block'>Total</h4>
          </div>
          <div className="col text-center">
            <h5 className='d-inline-block'>{totalCountersValue}</h5>
          </div>
          <div className="col text-center">
            <button onClick={props.countersResetAllValue} className='btn btn-warning'>Reset All</button>
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
  countersResetAllValue: () => dispatch(countersResetAllValue())
});

export default connect(mapStateToProps, mapDispatchToProps)(TotalCounters);


