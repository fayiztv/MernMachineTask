import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { TextField } from "@mui/material";
import "../AddStudent/addstudent.css";
import axios from "axios";
import Image from "../../assets/image.png";
import { ClipLoader } from "react-spinners";
import NavBar from "../NavBar";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

function AddStudent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [place, setPlace] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [loading, setLoading] = useState({
    submit: false,
  });
  const navigate = useNavigate();

  const validForm = () => {
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      place.trim() === "" ||
      age.trim() === "" ||
      phone.toString().length !== 10
    ) {
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validForm()) {
      if (!loading.submit) {
        setLoading({ ...loading, submit: true });
        let { data } = await axios.post("/students/add-student", {
          name,
          email,
          phone,
          place,
          age,
        });
        if (data.err) {
          setErrMessage(data.message);
        } else {
          Swal.fire("Success!", "Added student succesfully", "success");
          navigate("/")
        }
        setLoading({ ...loading, submit: false });
      }
    }
  };

  return (
    <div className="login-main">
      <NavBar />
      <div className="login-container">
        <Row>
          <Col md={6} sm={4}>
            <div className="login-sec bg">
              <img src={Image} alt="" />
            </div>
          </Col>
          <Col md={6} sm={8}>
            <div className="login-sec">
              <form className="login-box" onSubmit={handleSubmit}>
                <div className="login-row head">
                  <h3>Add Student</h3>
                </div>
                <div className="login-row w-100 mt-3">
                  <TextField
                    id="filled-textarea"
                    label="Name"
                    variant="standard"
                    type="text"
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="login-row w-100">
                  <TextField
                    id="filled-textarea"
                    label="Email"
                    variant="standard"
                    type="email"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="login-row">
                  <TextField
                    id="filled-textarea"
                    label="Place"
                    variant="standard"
                    type="text"
                    fullWidth
                    value={place}
                    onChange={(e) => setPlace(e.target.value)}
                  />
                </div>
                <div className="login-row">
                  <TextField
                    id="filled-textarea"
                    label="Phone number"
                    variant="standard"
                    type="number"
                    fullWidth
                    value={phone}
                    onChange={(e) => {
                      if (e.target.value.toString().length <= 10) {
                        setPhone(e.target.value);
                      }
                    }}
                  />
                </div>
                <div className="login-row">
                  <TextField
                    id="filled-textarea"
                    label="Age"
                    variant="standard"
                    type="number"
                    fullWidth
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>
                {errMessage && (
                  <div
                    className="login-row"
                    style={{ justifyContent: "flex-start" }}
                  >
                    <p className="text-danger">{errMessage}</p>
                  </div>
                )}
                <div className="login-row">
                  <button
                    className="w-100"
                    type="submit"
                    disabled={!validForm()}
                  >
                    Add
                    <ClipLoader
                      size={20}
                      color="white"
                      loading={loading.submit}
                    />
                  </button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AddStudent;
