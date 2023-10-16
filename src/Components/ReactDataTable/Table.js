import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'


const columns = [
    {
        name: "ID",
        selector:"id",
        sortable:true,
    },
    {
        name: "NAME",
        selector:"name",
        sortable:true,
    },
    {
        name: "ADDRESS",
        selector:"address.city",
        sortable:true,
    },
]


const data = [
    { id: 1, age: 42, name: "Fred" },
    { id: 2, age: 2, name: "abc" },
    { id: 3, age: 65, name: "def" },
    { id: 4, age: 77, name: "ghi" },
    { id: 5, age: 8, name: "jkl" },
    { id: 6, age: 96, name: "mno" },
    { id: 7, age: 12, name: "pqr" },
    { id: 8, age: 15, name: "stu" },
    { id: 9, age: 54, name: "vwx" },
    { id: 1, age: 42, name: "xyz" },
]




const Table = () => {

const [searchText,setSearchText] = useState("")
const [data,setData]=useState([])


const handleSearch=(e)=>{
    const value=e?.target?.value ||  " ";
    setSearchText(value)
}


useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response=>{
        setData(response.data)
    })
    .catch(error=>{
        console.error(error,"error fetching")
    })
},[])


const filteredData = data.filter((row)=>{
    return Object.values(row).some((value)=>
        value.toString().toLowerCase().includes(searchText.toLowerCase())
    )
})

    return (
        <>
            <h2>Table</h2>


<input
type='text'
placeholder='SEARCH TABLE'
value={searchText}
onChange={handleSearch}
 />

            <DataTable
                columns={columns}
                // data={data}
                data={filteredData}
                pagination
                highlightOnHover
                responsive
            paginationPerPage={7}
            paginationRowsPerPageOptions={[5,10,20]}
            />

        </>
    )
}

export default Table