import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
const ItemDesc = () => {
    const [item,setItem]=useState({});
    useEffect(() => {
      axios.get("https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/1").then((res)=>{
       setItem(res.data);
      }).catch((err)=>{
        console.error(err);
      })
    },[])
    
  return (
    <>
    <Link to="/"><i class="fa-solid fa-arrow-left" style={{color:"black"}}></i></Link>
      <h2>{item.name}</h2>
      <div className='d-flex justify-content-around mt-5'>
      <span className='pt-5'>
        {item.timeToPrepare}
      </span>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRruns4RC-bkZuGOfPuak47dV-QY2ZQd6uLKg&usqp=CAU" className="img-fluid rounded"/>
      </div>
      <div className='container mt-2'>
        <h4>Ingredients</h4>
        <span style={{color:"grey"}}>For 2 people</span>
        <div className='containerr'>
            <h5>Vegetables(05)</h5>
             <span>
              Cauliflower&nbsp;&nbsp;&nbsp;01Pc 
            </span>
            <br/>
            <span>
              Tomato&nbsp;&nbsp;&nbsp;10Pc
            </span>
            <br/>
            <span>
              Spinach&nbsp;&nbsp;&nbsp;1/2Kg
            </span>
            <br/>
        </div>
         <h5>Spices(10)</h5>
            <span>
            Corainder&nbsp;&nbsp;&nbsp;100gm
            </span>
            <br/>
            <span>
            Mustard Oil&nbsp;&nbsp;&nbsp;1/2 liters
            </span>
            <h5>Appliances</h5>
            <div className="d-flex  justify-content-around">
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHsAuQMBIgACEQEDEQH/xAAbAAEAAgIDAAAAAAAAAAAAAAAABQcDBAECBv/EAD8QAAEDAQQGBwQFDQAAAAAAAAABAgMEBQYRshIhMTV0kRMiNkFRcqEyUnHBFBZTgdEVI0JVYWKChJKisbPS/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAIB/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwC8QAAAAAAAAAAOum33k5mlb+4rR4WXKpVESK5nUYrtFMVwTYgFyabfeTmNNvvJzKb6Rh2bI1DcFx6TfFOYxTxKgSVFMrXIvevMYLaxRTkhboa7BgxVfafmUmjAAAAAAAAAAAAAAAAAAAAAAR94dwWnwkuRSqLOcjo6pO9sKL6KWveHcFp8JLkUqSz1VtNaD2e25rWt/pX5qaNdz1auC7UOEkMdZM2Spkez2XLinwVDEjyhusfibsDsSLicSNLrwAsu53Z+n8z8yk2Qlzuz9P5n5lJsigAAAAAAAAAAAAAAAAAAAAAj7w7gtPhJcilWWBGkrk8HVNPGv7cXOLTvDglg2kqpin0WXV/ApW1kSxS2dRwwrIjoq2JHswavXd7LsVTX36u40eYmb0VVUQ/ZSOZyXD5HVFN60lpprUtKToZsWVDkdhMxmkukqKujoryRTXbJRd9LUL/MJ/yUOYdpLUaEfG6mcreiglb44y6WPonzN6njc9+MUzo2Yey5iOXH46v8GCzbn7gp/M/OpNEJc3Vd+mRV0lxfivj1lJskAAAAAAAAAAAAAAAAAAAAAEfeLs/afCS5FKvu+qMkj46kd/c5PkWheHcFpcJLkUqaz5Oihlk9yoh9NfzNEPVqj7Rrn+9Uvcn3uVTom05eipI5XbXYOX70Q6ousobVOTVAhCQbSbs9TBY90NwU/mkzqTRDXQ3DB5pM7iZJAAAAAAAAAAAAAAAAAAAAABH3g3DaXCS5FKaikX6PVxp9pC5OSoXLeDcFpcJLkUpinx0pHJsV8XpibBitZrY7SqWsTqo/BPgiIajV1mSrlWWd8i/pLiYWrrKG5T7UJuhUgoF2EzRO2AWZc/cFP5pM7iaIW5/Z+n80mdxNEAAAAAAAAAAAAAAAAAAAAAAj7w7gtPhJcilKMn6JmpulirV2+BdV4+z1qcJLkUoxzuohsGF64YIdU2nD3azqilDcgXWhMUbiDhcStI8C1rmLjd2mX96TO4nCBuOuN2qbzSZ3E8QAAAAAAAAAAAAAAAAAAAAACNvL2ctXg5silEKvUT4F73m7N2twU2RShXL1E+BsGJy6zhFOjnazhHayhtxKSVK5SKhcSdIqGC2rha7r0vnlzuPQnnbgrjdel88v+xx6IkAAAAAAAAAAAAAAAAAAAAAGOphjqaeSCdiPilarHtXvaqYKhBRXKu7HGkf5Micid73OcvNVPQgDz/1Ku3+qaf1/EfUq7fdZFP6/iegAEC2513m7LJp+S/icVNz7EmgfEyibArmqiSQ6nNXDandzxJ8AaFiWXHY1mwUEEksscWP5yVU03KqqqquCInf4G+AAAAAAAAAAAAH/2Q==" className="img-fluid" alt="appliance"/>
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHsAuQMBIgACEQEDEQH/xAAbAAEAAgIDAAAAAAAAAAAAAAAABQcDBAECBv/EAD8QAAEDAQQGBwQFDQAAAAAAAAABAgMEBQYRshIhMTV0kRMiNkFRcqEyUnHBFBZTgdEVI0JVYWKChJKisbPS/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAIB/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwC8QAAAAAAAAAAOum33k5mlb+4rR4WXKpVESK5nUYrtFMVwTYgFyabfeTmNNvvJzKb6Rh2bI1DcFx6TfFOYxTxKgSVFMrXIvevMYLaxRTkhboa7BgxVfafmUmjAAAAAAAAAAAAAAAAAAAAAAR94dwWnwkuRSqLOcjo6pO9sKL6KWveHcFp8JLkUqSz1VtNaD2e25rWt/pX5qaNdz1auC7UOEkMdZM2Spkez2XLinwVDEjyhusfibsDsSLicSNLrwAsu53Z+n8z8yk2Qlzuz9P5n5lJsigAAAAAAAAAAAAAAAAAAAAAj7w7gtPhJcilWWBGkrk8HVNPGv7cXOLTvDglg2kqpin0WXV/ApW1kSxS2dRwwrIjoq2JHswavXd7LsVTX36u40eYmb0VVUQ/ZSOZyXD5HVFN60lpprUtKToZsWVDkdhMxmkukqKujoryRTXbJRd9LUL/MJ/yUOYdpLUaEfG6mcreiglb44y6WPonzN6njc9+MUzo2Yey5iOXH46v8GCzbn7gp/M/OpNEJc3Vd+mRV0lxfivj1lJskAAAAAAAAAAAAAAAAAAAAAEfeLs/afCS5FKvu+qMkj46kd/c5PkWheHcFpcJLkUqaz5Oihlk9yoh9NfzNEPVqj7Rrn+9Uvcn3uVTom05eipI5XbXYOX70Q6ousobVOTVAhCQbSbs9TBY90NwU/mkzqTRDXQ3DB5pM7iZJAAAAAAAAAAAAAAAAAAAAABH3g3DaXCS5FKaikX6PVxp9pC5OSoXLeDcFpcJLkUpinx0pHJsV8XpibBitZrY7SqWsTqo/BPgiIajV1mSrlWWd8i/pLiYWrrKG5T7UJuhUgoF2EzRO2AWZc/cFP5pM7iaIW5/Z+n80mdxNEAAAAAAAAAAAAAAAAAAAAAAj7w7gtPhJcilKMn6JmpulirV2+BdV4+z1qcJLkUoxzuohsGF64YIdU2nD3azqilDcgXWhMUbiDhcStI8C1rmLjd2mX96TO4nCBuOuN2qbzSZ3E8QAAAAAAAAAAAAAAAAAAAAACNvL2ctXg5silEKvUT4F73m7N2twU2RShXL1E+BsGJy6zhFOjnazhHayhtxKSVK5SKhcSdIqGC2rha7r0vnlzuPQnnbgrjdel88v+xx6IkAAAAAAAAAAAAAAAAAAAAAGOphjqaeSCdiPilarHtXvaqYKhBRXKu7HGkf5Micid73OcvNVPQgDz/1Ku3+qaf1/EfUq7fdZFP6/iegAEC2513m7LJp+S/icVNz7EmgfEyibArmqiSQ6nNXDandzxJ8AaFiWXHY1mwUEEksscWP5yVU03KqqqquCInf4G+AAAAAAAAAAAAH/2Q==" className="img-fluid" alt="appliance"/>            
            </div>
            </div> 
    </>
  )
}

export default ItemDesc;