import React from 'react'

function MenuItemList() {
    
  return (
    <div className = "table p-5">
        <div className = "d-flex align-items-center justify-content-between">
            <h1 className = "text-success">MenuItem List</h1>
            <button className = "btn btn-success">Add New</button>
        </div>
        <div className = "p-2">
            <div className = "row border">
                <div className ="col-2">Image</div>
                <div className='col-1'>ID</div>
                <div className='col-2'>Name</div>
                <div className='col-2'>Category</div>
                <div className='col-1'>Price</div>
                <div className='col-2'>Special Tag</div>
                <div className='col-1'>Action</div>

            </div>
            
        
        <div className ="row border">
            <div className ="col-2">
                <img src ="https://via.placeholder.com/150"
                    alt ="no content"
                    style={{width:"100%",maxWidth:"120px"}}/>

            </div>
            <div className ="col-1">.id</div>
            <div className='col-2'>.name</div>
            <div className='col-2'>.category</div>
            <div className='col-1'>.price</div>
            <div className='col-2'>.specialTag</div>
            <div className='col-1'>
                <button className = "btn btn-success">
                    <i className = "bi bi-pencil-fill"></i>
                </button>
                <button className ="btn btn-danger mx-2">
                    <i className = "bi bi-trash-fill"></i>
                </button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default MenuItemList