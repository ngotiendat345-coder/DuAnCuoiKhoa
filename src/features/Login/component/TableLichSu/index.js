import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import moment from 'moment'
import { Table } from 'reactstrap';
function TableLichSu(){
    const {detailInfo} = useSelector(state=>state.UserReducer);
    const [active,setActive]= useState(0);
    //console.log(detailInfo)
    const {thongTinDatVe}=detailInfo;
    const test = thongTinDatVe.length>=1 ? true : false;
     const doDai = test ? thongTinDatVe.length : 1;
    const newLichSu = thongTinDatVe ? Array.from({length:Math.ceil(doDai/5)},(_,index)=>{
        let start = index*5
        return thongTinDatVe.slice(start,start+5)
    }) : []
    //console.log(newLichSu)
    return(
        <>
             <Table className="tableLichSu " style={{color:'black',background:'white'}}>
            <thead>
                <tr>
                    <th>Phim</th>
                    <th>Ngày đặt</th>
                    <th>Mã vé</th>
                    <th>Số ghế</th>
                    <th>Giá</th>
                </tr>
            </thead>
            <tbody>
             {test&& newLichSu[active].map((item,index)=>{
                const {danhSachGhe,maVe,ngayDat,tenPhim,giaVe}=item
                const newNgayDat=moment(ngayDat).format("DD-MM-YY");
                return (
                    <tr key={maVe}>
                        <td>{tenPhim}</td>
                        <td>{newNgayDat}</td>
                        <td>{maVe}</td>
                        <td>{danhSachGhe.map((item)=>{
                            const {tenGhe,maGhe}=item;
                            return (
                                <span key={maGhe}>
                                        {tenGhe},
                                </span>
                            )
                        })}</td>
                        <td>
                            {giaVe*danhSachGhe.length}
                        </td>
                    </tr>
                )
            })}
            </tbody>
            </Table>
            <div className="text-center">
             {newLichSu.map((_,index)=>{
                return(
                    <button className="btn btn-light m-1" key={index} disabled={index===active ?true : false}
                        onClick={()=>{
                            setActive(index)
                        }}
                    >
                        {index+1}
                    </button>
                )
                })}
            </div>
        </>
        
    )
}

export default TableLichSu;

// {thongTinDatVe&& newLichSu[active].map((item,index)=>{
//     const {danhSachGhe,maVe,ngayDat,tenPhim,giaVe}=item
//     const newNgayDat=moment(ngayDat).format("DD-MM-YY");
//     return (
//         <tr key={maVe}>
//             <td>{tenPhim}</td>
//             <td>{newNgayDat}</td>
//             <td>{maVe}</td>
//             <td>{danhSachGhe.map((item)=>{
//                 const {tenGhe,maGhe}=item;
//                 return (
//                     <span key={maGhe}>
//                             {tenGhe},
//                     </span>
//                 )
//             })}</td>
//             <td>
//                 {giaVe*danhSachGhe.length}
//             </td>
//         </tr>
//     )
// })}

// {newLichSu.map((_,index)=>{
//     return(
//         <button className="btn btn-light m-1" key={index} disabled={index===active ?true : false}
//             onClick={()=>{
//                 setActive(index)
//             }}
//         >
//             {index+1}
//         </button>
//     )
// })}