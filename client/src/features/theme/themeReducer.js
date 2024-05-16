// themeReducer.js
export const toggleTheme = () => ({
    type: "TOGGLE_THEME"
  });
  
  const initialState = {
    theme: "light"
  };
  
  const themeReducer = (state = initialState, action) => {
    switch (action.type) {
      case "TOGGLE_THEME":
        return {
          ...state,
          theme: state.theme === "light" ? "dark" : "light"
        };
      default:
        return state;
    }
  };
  
  export default themeReducer;