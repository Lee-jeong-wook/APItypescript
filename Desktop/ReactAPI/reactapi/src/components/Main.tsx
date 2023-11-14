import { useState } from "react";

interface API {
    text: string;
}

export const Main = () => {
    const [value, setValue] = useState('');
    const onSubmit = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if(e.keyCode === 13){
            fetch('http://localhost:4000/item', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    text: e.currentTarget.value,
                  }),
            }).then((res: Response) => {
                console.log(res)
                return res.json();
            }).then((data: API) => {
                setValue(data.text);
            });
        }
    }
    return (
        <>  
            <input type="text" 
            onKeyDown={onSubmit}
            />
            <span>
                {value}
            </span>
        </>
    );
};
