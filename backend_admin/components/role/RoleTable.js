import Table from 'rc-table';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { roleAllWithPermissions } from '../../redux/data_fetch/roleDataFecth';


const RoleTable = () => {
  const dispatch = useDispatch();
  const roleData = useSelector((state)=>state.store.role.items);
  //console.log(roleData)
  
  useEffect(()=>{
    dispatch(roleAllWithPermissions())
  },[]);

  const viewInfoHandler = (data)=>{
   console.log(data)
  }



    const columns = [
        {
          title: 'No',
          dataIndex: 'name',
          key: 'name',
          width: 100,
          className:"text-white bg-gray-800 p-2 border-r-2 border-b-2",
          rowClassName:"bg-black-ripon",
          render:(text,record,index)=>`${index+1}`
        },
        {
          title: 'Role',
          dataIndex: 'roleInfo',
          key: 'roleInfo',
          width: 400,
          className:"text-white bg-gray-600 p-2 border-r-2 border-b-2",
          render: (data) =>{
           return   <a href="#">{data.roleName}</a>
          }
        },
        {
          title: 'permissions',
          dataIndex: 'permissionArray',
          key: 'permissionArray',
          width: 500,
          className:"text-white bg-gray-800 p-2 border-r-2 border-b-2",
          render: (data) =>{
            return   <div>{data.map((permission, index)=> <><span key={index}>{permission.permissionName}</span> <br/></>)}</div>
           }
        },
        {
          title: 'Operations',
          dataIndex: '',
          key: 'operations',
          className:"text-white bg-gray-600 p-2 border-b-2",
          render: () => <><a href="#">View</a> | <a href="#">Edit</a> | <a href="#">Delete</a></>,
          
        },
      ]


    return (
        <>
        <Table columns={columns} data={roleData} rowKey="id"  className='bg-purple-700 p-4 w-full text-center rc-table-custom font-semibold '/>
        </>
        
    );
};

export default RoleTable;