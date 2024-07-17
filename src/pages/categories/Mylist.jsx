import React from "react";
import "./mylist.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Mydatatable from "../../components/mydatatable/Mydatatable";

const Mylist = () => {
  return (
    <div className="mylist">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user"/>
          <Widget type="product"/>
          <Widget type="category"/>
        </div>
        <Mydatatable/>
      </div>
    </div>
  );
};

export default Mylist;