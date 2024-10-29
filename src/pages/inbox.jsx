import React from "react";
import "../styles/Inbox.css";
import MessageBox from "../components/MessageBox";

export default function inbox() {
  return (
    <div className="inbox">
      <h2>Inbox</h2>
      <MessageBox />
    </div>
  );
}
