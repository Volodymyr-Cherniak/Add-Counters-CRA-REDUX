import React from 'react';
import '../App.css';
import {connect} from "react-redux";
import TotalCounters from "./TotalCounters";
import CounterItem from "./CounterItem";
import AddCounter from "./AddCounter";
import ConfirmDeleteCounter from "./ConfirmDeleteCounter";


function MainCounters(props) {
  return (
    <div>
      <TotalCounters/>
      {
        props.counters.map(el => <CounterItem key={el.id}
                                              counter={el}
        />)
      }
      <AddCounter/>
      <ConfirmDeleteCounter/>
    </div>
  );
}

const mapStateToProps = state => ({
  counters: state.counters
});

export default connect(mapStateToProps)(MainCounters);
