import React, { useEffect, useState } from 'react'
import Axios from './Axios'
import DisplayData from './DisplayData'

import './UploadFiles.css'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
function UploadFiles(props) {
   
    const [selectedFile, setselectedFile] = useState({});
    const [buttonClicked, setbuttonClicked] = useState(false);
    const [csvData, setcsvData] = useState([]);
    const [dataUploaded, setdataUploaded] = useState(false);
    const [loading, setloading] = useState(false);    
    useEffect(() => {
        const postData=async()=>{
            const datas = new FormData();
            datas.append("file", selectedFile);
            const res= await  Axios
            .post('./csv/add', datas, {
              headers: {
                "content-type": "multipart/form-data",
              },
            });
            console.log(res.data);
             setcsvData(res.data)
            setdataUploaded(true);
            setloading(false);
        }
        if(buttonClicked)
        {
             postData();
        } 
        return () => {
            postData();
        }
    }, [buttonClicked])
  const onChangeHandler = async (event) => {
    setloading(false);
    setbuttonClicked(false);
    var file = event.target.files[0];
    console.log(file);
    setselectedFile(file);
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    setloading(true);
    setbuttonClicked(true);
  };
 
  
    return (
        <>
            <Container maxWidth="sm">
              <div className="header">    
                  <input type="file" name="file"  onChange={onChangeHandler}/>
                  <Button variant="contained" color="primary" disabled={!selectedFile}  onClick={onClickHandler}>Upload</Button> 
              </div>
              <div className="header">
                {loading ?<CircularProgress />:null}
              </div>
            </Container>
            <div>
            {dataUploaded ? <DisplayData csvData={csvData}/>:null}
            </div>
        </>
    )
}

export default UploadFiles
