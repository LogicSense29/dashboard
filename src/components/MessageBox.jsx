import React from "react";

export default function MessageBox() {
  return (
    <div className="messageContainer">
      <div id="messageBox" style={{ border: "0.5px #333 solid" }}>
        <h4>From Admin</h4>
        <p>You didn't fill the form, you could have added some other things</p>
      </div>
    </div>
  );
}
