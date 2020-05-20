function createStore(reducer) {
  let state;

  function dispatch(action){
    state = reducer(state, action);
    render();
  }

  function getState() {
    return state; 
  }

  return {
    dispatch,
    getState
  };
};

function reducer(state = { count: 0, testString: "Hello" }, action) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { ...state,
                  count: state.count + 1 };
    case 'ADD_TEXT':
      return { ...state,
                  testString: state.testString + "!"};
    default:
      return state;
  }
};

function render() {
  let container = document.getElementById('container');
  container.textContent = store.getState().count;
  let testContainer = document.getElementById('test-container');
  testContainer.textContent = store.getState().testString;
};

// Functions to Execute

let store = createStore(reducer);
store.dispatch({ type: '@@INIT' })

let button = document.getElementById('button');
button.addEventListener('click', function() {
    store.dispatch({ type: 'INCREASE_COUNT' });
})

// TEST //

let testButton = document.getElementById('test-button');
testButton.addEventListener('click', function() {
    store.dispatch({ type: 'ADD_TEXT' });
})