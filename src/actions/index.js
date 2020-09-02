export const signIn = () => {
  return {
    type: "SIGN_IN",
  };
};

export function custDeatails(data) {
  return {
    type: "Logged_User",
    payload: data,
  };
}
export function carrierDetails(dt) {
  return {
    type: "Education_Details",
    payload: dt,
  };
}
