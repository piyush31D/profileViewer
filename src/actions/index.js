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
