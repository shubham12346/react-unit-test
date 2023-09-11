type buttonPropsType ={
    btnText :string;
    btnType:"button" | "submit" | "reset" | undefined ;
    onclick:()=>void;
    className ?:string;
}


const Button = (props :buttonPropsType) => {
    const  {btnText,btnType,onclick,className} = props
  return (
    <button type={btnType} onClick={onclick} className={className} > {btnText} </button>
  )
}

export default Button