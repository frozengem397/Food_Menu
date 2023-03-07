import React from 'react'
import { useState,useEffect } from 'react';
import { useGetMenuItemsQuery } from '../../../apis/menuItemApi';
import {menuItemModel} from '../../../Interfaces';
import MenuItemCard from './MenuItemCard';
import {useDispatch} from "react-redux";
import {setMenuItem} from "../../../Storage/Redux/MenuItemSlice";
function MenuItemList() {
    //const [menuItems,setMenuItems] = useState<menuItemModel[]>([]);
    const{data,isLoading} = useGetMenuItemsQuery(null);
    const dispatch = useDispatch();

  useEffect(()=>{
    if(!isLoading){

      dispatch(setMenuItem(data.result));
      
    }

  },[isLoading])

  if (isLoading){
    return <div>Loading</div>
  }
  return (
    <div className = "container row">
      {data.result.length>0 && data.result.map((menuItem:menuItemModel,index:number)=>
        (
          <MenuItemCard menuItem ={menuItem} key= {index} />
        )
      )}
      </div>
  )
}

export default MenuItemList