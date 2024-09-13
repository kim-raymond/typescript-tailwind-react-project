"use client"
interface ButtonProps{
    count:number;
    onClick: ()=> void;
}
export default function Button ({count,onClick}:ButtonProps){
    // const [count, setCount] = useState(0);
  
    // function handldeClickButton(){
    //   setCount(count + 1);
    // }
    return (
  
    // <button className="bg-blue-500 hover:bg-blue-700 rounded tex-white font-bold px-4 py-2 " onClick={handldeClickButton}>
    //   I have been clicked {count} times 
    // </button>

        <button className="bg-blue-500 hover:bg-blue-700 rounded tex-white font-bold px-4 py-2 " onClick={onClick}>
        I have been clicked {count} times 
        </button>
  
    );
  }