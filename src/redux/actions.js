export function countersResetAllValue() {
  return {type: 'RESET_ALL_VALUE'}
}

export function counterDecrementValue(id) {
  return {type: 'COUNTER_DECREMENT_VALUE', payload: id}
}

export function counterIncrementValue(id) {
  return {type: 'COUNTER_INCREMENT_VALUE', payload: id}
}

export function counterResetValue(id) {
  return {type: 'COUNTER_RESET_VALUE', payload: id}
}

export function counterDeleteValue(id) {
  return {type: 'COUNTER_DELETE_VALUE', payload: id}
}

export function addCounter(args) {
  return {type: 'ADD_COUNTER', payload: args}
}

export function counterDeleteConfirmation(id) {
  console.log('payloadId--', id);
  return {
    type: 'COUNTER_DELETE_CONFIRMATION',
    payload: id
  }
}

export function resetCounterDeleteConfirmation() {
  return {type: 'RESET_COUNTER_DELETE_CONFIRMATION'}
}

export function saveNewCounterName(args) {
  return {type: 'SAVE_NEW_COUNTER_NAME', payload: args}
}


