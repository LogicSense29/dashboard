import React, { useEffect, useState, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import "./styles/Admin.css";
import Modal from "../components/Modal";
const LazyDashboard = React.lazy(() => import("./pages/Dashboard"));
const LazyTask = React.lazy(() => import("./pages/Task"));
const LazyLeave = React.lazy(() => import("./pages/Leave"));
const LazyInbox = React.lazy(() => import("./pages/Inbox"));
const LazySettings = React.lazy(() => import("./pages/Settings"));
import profilePic from "../images/image-placeholder.png";
import { useAuthContext } from "../hooks/useAuthContext";
import { useImageContext } from "../hooks/useImageContext";
import { useTaskContext } from "../hooks/useTaskContext";
import { useEmployeeTaskContext } from "../hooks/useEmployeeTaskContext";
import NavBar from "./components/NavBar";

export default function Admin() {
  const { uploadImage, uploadProgress, imageUrl, error } = useImageContext();
  const [hideSidebar, setHideSidebar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);
  const { getTask } = useTaskContext();
  const { user } = useAuthContext();
  const { dispatch } = useEmployeeTaskContext();

  useEffect(() => {
    user.isNewUser && setShowModal(true);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      await getTask();
    };
    if (user) {
      fetchData();
    }
    console.log("Rendering the UseEffect From getTask");
  }, [user, dispatch]);

  const handleCloseModal = () => {
    setShowModal(false);
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      // Update the isNewUser property
      user.isNewUser = false;

      // Save the updated user object back to local storage
      localStorage.setItem("user", JSON.stringify(user));
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type.startsWith("image/")) {
      setFile(selectedFile);
      setSelectedImage(URL.createObjectURL(selectedFile));
    } else {
      alert("Please select a valid image file");
      setFile(null);
    }
  };

  const handleUpload = () => {
    if (file) {
      uploadImage(file);
    } else {
      alert("Please select a file first");
    }
  };

  const finalImage = imageUrl || selectedImage || profilePic;

  return (
    <>
      <Modal show={showModal} onClose={handleCloseModal}>
        {uploadProgress > 0 ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p>Upload Progress</p>
            <h2>{uploadProgress}%</h2>
          </div>
        ) : (
          <>
            <div onClick={triggerFileInput}>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                ref={fileInputRef}
                style={{ display: "none" }}
              />
              <div className="profile-pic-container">
                <img
                  src={finalImage}
                  alt="UMéRA Employee Dashboard Profile Picture"
                  className="profile-pic"
                />
              </div>
              <div className="content-modal">
                <h3>Welcome!</h3>
                <h4>Click to add a profile picture</h4>
                <p>Supports JPEG, JPG & PNG</p>
              </div>
            </div>
            {file && (
              <button
                onClick={handleUpload}
                disabled={!file}
                className="save-button"
              >
                Save Image
              </button>
            )}
          </>
        )}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </Modal>
      <div className="admin">
        <div
          className={
            hideSidebar ? "adminSidebarContainer" : "removeAdminSidebar"
          }
        >
          <SideBar setHideSidebar={setHideSidebar} />
        </div>
        <div
          className={
            hideSidebar ? "adminBodyContainer" : "resizeAdminBodyContainer"
          }
        >
          <div className="row1">
            <NavBar hideSidebar={hideSidebar} setHideSidebar={setHideSidebar} />
          </div>
          <div className="row2">
            <Routes>
              <Route
                index
                element={
                  <React.Suspense fallback="Loading...">
                    <LazyDashboard
                      setHideSidebar={setHideSidebar}
                      hideSidebar={hideSidebar}
                    />
                  </React.Suspense>
                }
              />
              <Route
                path="task"
                element={
                  <React.Suspense>
                    <LazyTask
                      setHideSidebar={setHideSidebar}
                      hideSidebar={hideSidebar}
                    />
                  </React.Suspense>
                }
              />
              <Route
                path="leave"
                element={
                  <React.Suspense>
                    <LazyLeave
                      setHideSidebar={setHideSidebar}
                      hideSidebar={hideSidebar}
                    />
                  </React.Suspense>
                }
              />
              <Route
                path="inbox"
                element={
                  <React.Suspense>
                    <LazyInbox
                      setHideSidebar={setHideSidebar}
                      hideSidebar={hideSidebar}
                    />
                  </React.Suspense>
                }
              />
              <Route
                path="settings"
                element={
                  <React.Suspense>
                    <LazySettings />
                  </React.Suspense>
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}
