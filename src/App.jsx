import React from "react";
import Test from "./components/Test";

const App = () => {
    return (
        <div>
            <Test 
                stringTest="Gabe" 
                numberTest={33} 
                booleanTest={false} 
                undefinedTest={undefined}
                undefinedTest={null} 
                NaNTest={NaN}
                arrayTest={["a", "b", "c"]}
                objectTest={{ name: "Gabe", age: 38 }}
            />
        </div>
    );
}

export default App;