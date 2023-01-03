import React, { useEffect, useState } from "react";
import image from "../assets/img/img-01.png";

import LogoIcon from "../assets/svg/Logo";
import { Link, NavLink } from "react-router-dom";
import { auth } from "../FirebaseConfigure";
import { db } from "../FirebaseConfigure";
import { collection, addDoc, Transaction } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import PaystackPop from "@paystack/inline-js";
import { onAuthStateChanged } from "firebase/auth";
import { async } from "@firebase/util";

const PurchasingScreen = () => {
  const [price, setPrice] = useState(5);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const [user, setUser] = useState(false);
  const [UID, setUID] = useState("");

  const navigate = useNavigate();

  const paystack = new PaystackPop();
  const checkUser = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(true);
        setUID(uid);
      } else {
        navigate("/");
      }
    });
  };

  const initiatePayment = (e) => {
    e.preventDefault();

    if (user) {
      paystack.newTransaction({
        key: process.env
          .REACT_APP_PAYSTACK_KEY /*"pk_test_26dc23e6eff2d80b88ef3dd7768062b646b2feb1"*/,
        email: email,
        amount: price * 100,
        onSuccess: async () => {
          try {
            const docRef = await addDoc(collection(db, UID), {
              name: name,
              phone: phone,
              email: email,
              price: price,
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        },
      });
    } else {
      navigate("/");
    }
  };

  useEffect(checkUser, []);

  return (
    <>
      <NavLink
        className="position-absolute m-3 bg-light p-2 rounded-3 shadow-lg fw-bold fs-6"
        to="/"
      >
        <i class="fa-solid fa-arrow-right-from-bracket"></i> Back to Home
      </NavLink>
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100 mt-5 pt-5">
            <div className=" my-auto mt-5 mx-auto">
              <img src={image} alt="IMG" />
              <div className="text-center mx-auto d-flex justify-content-center mb-5">
                <Link
                  className="pointer flexNullCenter"
                  to="home"
                  smooth={true}
                >
                  <LogoIcon />
                  <h1
                    style={{ marginLeft: "15px" }}
                    className="font20 extraBold"
                  >
                    Bundle Bonga
                  </h1>
                </Link>
              </div>
            </div>

            <form
              className="login100-form validate-form"
              onSubmit={initiatePayment}
            >
              <span className="login100-form-title">Purchase Bundle Bongo</span>

              <div
                className="wrap-input100 validate-input"
                data-validate="Valid email is required: ex@abc.xyz"
              >
                <label
                  htmlFor="offer"
                  className="font15 mb-2 mx-auto d-flex justify-content-center"
                >
                  Select Package
                </label>
                <select
                  class="form-select input100 text-light bg-dark"
                  aria-label="Default select example"
                  id="offer"
                  required
                  onChange={(e) => setPrice(e.target.value)}
                >
                  <option value={5}>Regular Daily @ 6.0GB</option>
                  <option value={7}>VVIP Daily @ 9.0GB</option>
                  <option value={10}>VIP daily @ 12GB</option>
                  <option value={15}>3-Days package @ 18.0GB</option>
                  <option value={25}>VIP Weekly @ 27.0GB</option>
                  <option value={50}>Super Monthly @ 36.0GB</option>
                </select>
              </div>
              <div className="wrap-input100 validate-input">
                <input
                  className="input100  text-light bg-dark"
                  type="text"
                  name="tel"
                  value={phone}
                  required
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Receiving phone number"
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                </span>
              </div>
              <div className="wrap-input100 validate-input">
                <input
                  className="input100  text-light bg-dark"
                  type="text"
                  name="email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </span>
              </div>

              <div className="wrap-input100 validate-input">
                <input
                  className="input100  text-light bg-dark"
                  type="text"
                  name="name"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Buyer's Name"
                />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-user" aria-hidden="true"></i>
                </span>
              </div>

              <h5 className=" text-center mt-4">Total &#8373;{price}</h5>
              <div className="container-login100-form-btn">
                <button className="login100-form-btn" type="submit">
                  Purchase Package{" "}
                </button>
              </div>
              <p className="text-center text-primary mt-3 fw-bold">
                Ensure The receiving Phone Number is valid before proceeding
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default PurchasingScreen;
