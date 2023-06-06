import Firestore from "./handlers/firestore";
// const {readDocs} = Firestore;

const handleOnChange = (state, e) => {
  if (e.target.name === "file") {
    return {
      ...state.inputs,
      file: e.target.files[0],
      path: URL.createObjectURL(e.target.files[0]),
    }
  } else {
    return { ...state.inputs, title: e.target.value };
  }
};

function reducer(state, action){
  switch(action.type){
    case 'setItems':
      return {
        ...state,
        items: action.payload.items
      }
    case 'setItem':
      return {
        ...state,
        inputs: { title: null, file: null, path: null },
        items: [state.inputs, ...state.items]
      }
      case "setInputs":
        return {
          ...state,
          inputs: handleOnChange(state, action.payload.value)
        }
      case 'collapse':
        return {
          ...state,
          isCollapsed: action.payload
        }
      default: return state
  }
}

export default reducer;
