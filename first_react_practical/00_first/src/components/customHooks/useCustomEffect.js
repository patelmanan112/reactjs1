import { useEffect, useState } from "react";
function useCustomEffect(url) {
    var [value, setValue] = useState(null);
    var [err1, setErr] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(`data recieved successfully : ${data[0].schemeName}`);
                setValue(data);


            })
            .catch(error => {
                console.log(`error`);
                setErr(error)
            })
    }
    ,[]);
    return {value , err1}
}
export default useCustomEffect