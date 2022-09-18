 export async function Get_Data(Url) {
    try {
        let FileData = await fetch(Url);
        let DataJson = await FileData.json();
        return DataJson
    } catch {
        console.error("error")
    }
    return DataJson
}
 



// export let x = 10;
