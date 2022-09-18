
 const SetData = (data,value)=>{
    localStorage.setItem(data,JSON.stringify(value))
 }
    function GetDataLocal(nameData){
    
        let Get_data = localStorage.getItem(nameData);
        if(Get_data){
            return Get_data=JSON.parse(localStorage.getItem(nameData))
        }
    
    }

    export {SetData,GetDataLocal}