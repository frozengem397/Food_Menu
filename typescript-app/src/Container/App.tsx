import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import {Header, Footer} from "../Components/Layout";
import { Home,NotFound,MenuItemDetails, MenuItemList, MenuItemUpsert } from '../Pages';
import { Route, Routes } from 'react-router-dom';



function App() {
  
  return (
    <div className="text-success">

      <Header />
      <div className = "pb-5">
        <Routes>
          <Route path="/" element = {<Home />}></Route>
          <Route path="/menuItemDetails/:menuItemId" element = {<MenuItemDetails />}></Route>
          <Route path="/menuItem/menuitemlist" element = {<MenuItemList />}></Route>
          <Route path="/menuItem/menuItemUpsert/:id" element = {<MenuItemUpsert />}></Route>

          <Route path="*" element = {<NotFound />}></Route>
        </Routes>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
