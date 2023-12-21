import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Swal from "sweetalert2";

function App() {
  const [display, setDisplay] = useState("");
  const [expression, setExpression] = useState([]);
  const [notficion, Setnoficion] = useState(null);

  ///////////////////// check install app or no

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    Setnoficion(event);
  });

  // /////////////////  handls notficion

  const handlsNotficion = () => {
  if (notficion) {
    Swal.fire({
      title: "Do you want install appliction?",
      showDenyButton: true,
      confirmButtonText: "install",
      denyButtonText: `No thanks`,
    }).then((result) => {
      if (result.isConfirmed) {
        notficion.prompt();
      } else if (result.isDenied) {
        Swal.fire("Ok thanks");
      }
    });
  }else{Swal.fire("Installed App on Your Device")}
  }

  /////////////////    buttun calculator

  const handleClick = (value) => {
    setDisplay(value);
    setExpression([...expression, value]);
  };
  const DeletOne = (value) => {
    if (value === "DeletOne") {
      expression.pop();
      setExpression([...expression]);
      setDisplay(expression);
    }
  };

  const DeletAll = (value) => {
    if (value === "C") {
      setDisplay("");
      setExpression([]);
    }
  };

  const handleResult = () => {
    const result = expression
      .join("")
      .split(/(\D)/g)
      .map((value) => (value.match(/\d/g) ? parseInt(value, 0) : value))
      .reduce((acc, value, index, array) => {
        switch (value) {
          case "+":
            return (acc = acc + array[index + 1]);
          case "-":
            return (acc = acc - array[index + 1]);
          case "x":
            return (acc = acc * array[index + 1]);
          case "÷":
            return (acc = acc / array[index + 1]);
          case "%":
            return (acc = acc % array[index + 1]);
          default:
            return acc;
        }
      });
    setDisplay(result);
    setExpression("");
  };
  return (
    <>
{}
      <div className="main w-screen h-screen overflow-hidden       flex justify-center items-center  max-sm:bg-black  bg-gradient-to-r from-orange-500  to-red-400   ">
        <div
          id="Content"
          className="  
              max-sm:w-full max-sm:h-full max-sm:flex max-sm:flex-col    bg-black w-fit h-fit flex flex-col  max-sm:rounded-none  rounded-2xl      "
        >
          <div
            id="Top"
            className="      max-sm:h-60  max-sm:text-8xl    flex flex-col    h-28 w-full  text-3xl font-bold text-white items-center justify-center  max-sm:px-10    "
          >
            <div
              id="Display"
              className="  w-full h-fit  flex justify-end  text-2xl  mt-2 px-8"
            >
              {""}
              <span> {expression} </span>
            </div>
            <div
              id="current"
              className="  max-sm:text-8xl  max-sm:mt-8 w-full h-fit  flex justify-end px-5 text-5xl mt-2  "
            >
              {""}
              <span> {display} </span>
            </div>
          </div>{" "}
          <div
            className=" w-full  h-fit mt-4 flex justify-center text-white font-bold"
            id="Bottom"
          >
            <div className="w-24  h-fit  flex flex-col items-center">
              <button
                onClick={() => DeletAll("C")}
                className=" max-sm:text-5xl max-sm:p-10  w-10 h-10 p-7 rounded-full flex items-center justify-center text-3xl font-bold mb-4 bg-gradient-to-br "
              >
                {" "}
                C{" "}
              </button>{" "}
              <button
                className="w-10 h-10  max-sm:p-10 rounded-full flex items-center justify-center max-sm:text-5xl  mb-4 hover:bg-white hover:text-black p-7 text-3xl"
                onClick={() => handleClick(1)}
              >
                {" "}
                1{" "}
              </button>{" "}
              <button
                className="w-10 h-10  max-sm:p-10 rounded-full flex items-center justify-center max-sm:text-5xl  mb-4 hover:bg-white hover:text-black p-7 text-3xl"
                onClick={() => handleClick(4)}
              >
                {" "}
                4{" "}
              </button>{" "}
              <button
                className="w-10 h-10  max-sm:p-10 rounded-full flex items-center justify-center max-sm:text-5xl  mb-4 hover:bg-white hover:text-black p-7 text-3xl"
                onClick={() => handleClick(7)}
              >
                {" "}
                7{" "}
              </button>{" "}
              <button
                onClick={() => DeletOne("DeletOne")}
                className="w-10 h-10  max-sm:p-10 rounded-full flex items-center justify-center max-sm:text-5xl  mb-4 hover:bg-white hover:text-black p-7 text-3xl "
              >
                <span>
                  {" "}
                  <FaArrowLeft className="max-sm:text-white max-sm:hover:text-black  " />
                </span>
              </button>{" "}
            </div>{" "}
            <div className="max-sm:w-24  max-sm:h-fit  max-sm:flex max-sm:flex-col   max-sm:items-center">
              <button
                onClick={() => handleClick("%")}
                className="max-sm:text-5xl max-sm:p-10  lg:mr-5  w-10 h-10 p-7 rounded-full flex items-center justify-center text-3xl font-bold mb-4 bg-gradient-to-br"
              >
                {" "}
                %{" "}
              </button>{" "}
              <button
                className="w-10 h-10  max-sm:p-10 rounded-full flex items-center justify-center max-sm:text-5xl  mb-4 hover:bg-white hover:text-black p-7 text-3xl"
                onClick={() => handleClick(2)}
              >
                {" "}
                2{" "}
              </button>{" "}
              <button
                className="w-10 h-10  max-sm:p-10 rounded-full flex items-center justify-center max-sm:text-5xl  mb-4 hover:bg-white hover:text-black p-7 text-3xl"
                onClick={() => handleClick(5)}
              >
                {" "}
                5{" "}
              </button>{" "}
              <button
                className="w-10 h-10  max-sm:p-10 rounded-full flex items-center justify-center max-sm:text-5xl  mb-4 hover:bg-white hover:text-black p-7 text-3xl"
                onClick={() => handleClick(8)}
              >
                {" "}
                8{" "}
              </button>{" "}
              <button
                className="w-10 h-10  max-sm:p-10 rounded-full flex items-center justify-center max-sm:text-5xl  mb-4 hover:bg-white hover:text-black p-7 text-3xl "
                onClick={() => handleClick(0)}
              >
                {" "}
                0{" "}
              </button>{" "}
            </div>{" "}
            <div className="max-sm:w-24  max-sm:h-fit  max-sm:flex max-sm:flex-col   max-sm:items-center">
              {" "}
              <button
                className="max-sm:text-5xl max-sm:p-10 lg:mr-5   w-10 h-10 p-7 rounded-full flex items-center justify-center text-3xl font-bold mb-4 bg-gradient-to-br "
                onClick={() => handleClick("÷")}
              >
                {" "}
                /
              </button>
              <button
                className="w-10 h-10  max-sm:p-10 rounded-full flex items-center justify-center max-sm:text-5xl  mb-4 hover:bg-white hover:text-black p-7 text-3xl"
                onClick={() => handleClick(3)}
              >
                {" "}
                3{" "}
              </button>{" "}
              <button
                className="w-10 h-10  max-sm:p-10 rounded-full flex items-center justify-center max-sm:text-5xl  mb-4 hover:bg-white hover:text-black p-7 text-3xl"
                onClick={() => handleClick(6)}
              >
                {" "}
                6{" "}
              </button>{" "}
              <button
                className="w-10 h-10  max-sm:p-10 rounded-full flex items-center justify-center max-sm:text-5xl  mb-4 hover:bg-white hover:text-black p-7 text-3xl"
                onClick={() => handleClick(9)}
              >
                {" "}
                9{" "}
              </button>{" "}
              <button onClick={handlsNotficion} className="w-10 h-10  max-sm:p-10 rounded-full flex items-center justify-center max-sm:text-5xl  mb-4 hover:bg-white hover:text-black p-7 text-3xl ">
                <span className="text-sm max-sm:text-sm">
                  {" "}
                  install App
                </span>
              </button>{" "}
            </div>{" "}
            <div className="max-sm:w-24  max-sm:h-fit  max-sm:flex max-sm:flex-col   max-sm:items-center">
              <button
                className="max-sm:text-5xl max-sm:p-10  w-10 h-10 max-sm:mr-0 mr-5 p-7 rounded-full flex items-center justify-center text-3xl font-bold mb-4 bg-gradient-to-br "
                onClick={() => handleClick("x")}
              >
                {" "}
                X{" "}
              </button>{" "}
              <button
                className=" max-sm:text-5xl max-sm:p-10  w-10 h-10 p-7 rounded-full flex items-center justify-center text-3xl font-bold mb-4 bg-gradient-to-br "
                onClick={() => handleClick("-")}
              >
                {" "}
                -{" "}
              </button>{" "}
              <button
                className=" max-sm:text-5xl max-sm:p-10  w-10 h-10 p-7 rounded-full flex items-center justify-center text-3xl font-bold mb-4 bg-gradient-to-br "
                onClick={() => handleClick("+")}
              >
                {" "}
                +{" "}
              </button>{" "}
              <button
                className=" max-sm:text-5xl max-sm:p-10  w-10 max-sm:h-44 h-32 p-7 rounded-full flex items-center justify-center text-3xl font-bold mb-4 bg-gradient-to-br  "
                onClick={() => handleResult()}
              >
                ={" "}
              </button>{" "}
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
}

export default App;
