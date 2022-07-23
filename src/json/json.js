import React, { useRef, useState } from 'react';
import JsonFormatter from 'react-json-formatter'

function App() {
  //All Json Hadlling Here 
  const data1 = useRef({});

  const [data, setData] = useState(`{}`);
  const [flag, setFlag] = useState(true);

  const jsonStyle = {
    propertyStyle: { color: 'black' },
    stringStyle: { color: 'green' },
    numberStyle: { color: 'darkorange' }
  }

  let newData = useRef();
  return (
   <div className=' w-[100%]'>
        <div className='flex justify-center items-center mt-3'>
        <button className='bg-green-500 px-3 py-1 rounded-md mr-5 font-semibold text-white' onClick={()=> {
          //get data coming from input box
          try{
            const dataFromTextArea = data1.current.value;
             JSON.parse(dataFromTextArea)
             const dataChecking = JSON.parse(JSON.stringify(dataFromTextArea))
             setData(dataChecking)
             setFlag(true);
             
          } catch(e) {
             setFlag(false)
          }
      
        }}>Format</button>
        <button className='bg-red-400 px-4 py-1 font-semibold text-white rounded-md'>
          clear
        </button>
        </div>
        
        <div className='flex w-full items-center justify-between'>
            <div className='mx-5 h-[80vh] w-[45%] border-2'>
              <textarea type='textarea' ref={data1} className='w-full h-full' />
            </div>

            <div className='mx-5 my-3 h-[80vh] w-[45%] border-2 overflow-scroll'>
              {
                flag ? (
                      //  if Correct JSON Provided
                    <>
                      <JsonFormatter json={data} tabWith={4} jsonStyle={jsonStyle} />
                    </>
                ) : (
                    //  if In correct JSON Provided
                    <>
                      <code className='bg-red-100'>Incorrect JSON Provided</code>
                      <br/>
                      Please Try this.
                      EXAMPLE:
                      <br/>
                      <code className='bg-green-100 text-black h-[20vh] w-full mt-1'>
                        <JsonFormatter json={`{"Name": "Khushboo Yadav", "Designation": "React.js Devloper"}`} tabWith={4} jsonStyle={jsonStyle} />
                      </code>
                    </>
                )
              }
            </div>
        </div>
        
   </div>
  );
}

export default App;