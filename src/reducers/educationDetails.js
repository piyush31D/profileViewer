const initialState = [];
const EducationDetails = (state = initialState, action) => {
  switch (action.type) {
    case "Education_Details":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
export default EducationDetails;
