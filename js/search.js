import * as all from "./main.js";
import {SetData,GetDataLocal} from "./localstorage.js";




import {Get_Data} from "./FetchData.js";
const Url = "../json-files/AllData.json";
Get_Data(Url).then(data=>{
    console.log(data)
})





