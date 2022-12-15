
// import Form from './components/Form';
// import Form2 from './components/Form2';
// import Child from './components/STATE_LIFTING/Child';
// import Hook from './Hooks_useState/Hook';

import { CustomDataFetch } from "./CustomHooks/CustomDataFetch";
// import { DataFetch } from "./UseEffect/DataFetch";

// import Home from "./components/STATE_LIFTING/Home";
// import UseEffectExample from "./UseEffect/UseEffectExample";


function App() {
  // const data = "Hello My name is parent data";
  // const handelChildData = (childData) => {
  //     console.log(childData);
  // }
  return (
    <div className="App">
      {/* <Hook/> */}
      {/* <Form/> */}
      {/* <Form2/> */}
      {/* <Child myData={data} onChildData={handelChildData}/> */}
      {/* <Home/>
      <UseEffectExample/> */}
      {/* <DataFetch/> */}
      <CustomDataFetch/>
    </div>
  );
}

export default App;
