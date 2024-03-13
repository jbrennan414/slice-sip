import React from "react";

export const LoginScreen = () => {
  return (
    <div className="cardContainer">
      <div className="credentialsContainer">
        <h1>Login:</h1>
        <label for="username">Username:</label>
        <input type="text" id="user-login"></input>
        <label for="password">Password:</label>
        <input type="password" id="password-login"></input>
      </div>
    </div>
  );
};
