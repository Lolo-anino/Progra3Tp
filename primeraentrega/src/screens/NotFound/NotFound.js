import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import NotFound from "../../components/NotFound/NotFound";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

function SNotFound() {
    return (
      <>
      <div className="ErrorFound"><NotFound/></div>
      </>
    );
  }
  
export default SNotFound;