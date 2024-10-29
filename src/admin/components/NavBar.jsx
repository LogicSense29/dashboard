import React from "react";
import avatar from "../../images/9334180.jpg";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MenuIcon from "@mui/icons-material/Menu";
import { useImageContext } from "../../hooks/useImageContext.js";

export default function NavBar({ setHideSidebar, hideSidebar }) {
  const { imageUrl } = useImageContext();
  return (
    <>
      <div className="rowItems">
        <div
          onClick={() => {
            setHideSidebar(!hideSidebar);
          }}
        >
          <MenuIcon />
        </div>
        <div className="removeSearchBar">
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="rowItems">
        <div>
          <div
            className="notBackground"
            style={{
              backgroundColor: "rgba(0,0,0,0.1)",
              // width: "200px",
              // height: "200px",
              padding: "10px",
              clipPath: "circle()",
            }}
          >
            <NotificationsNoneIcon />
          </div>
        </div>
        <div>
          <img
            src={imageUrl ? imageUrl : avatar}
            alt=""
            style={{
              width: "50px",
              height: "50px",
              border: "2px rgba(13,0,0,0.2) solid",
              borderRadius: "25px",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </>
  );
}
