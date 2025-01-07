import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';


/* Component 1 */
// function Car(){
//   return(
//     <h2>Hi, I am SivaKumar!</h2>
//   );
// }

/* Component 2 */
// function Garage(){
//   return(
//     <>
//       <h1>Who are You?</h1>
//       <Car />
//     </>
//   );
// }


/* Sample Component */
//import Garage from './3_0_SampleComponent/Garage';

/* Class Component */
//import Garage from './3_1_ClassComponent/Garage';

/* Props in Func Component */
//import Garage from './3_2_Props_FuncComponent/Garage';

/* Props in Class Component */
//import Garage from './3_3_Props_ClassComponent/Garage';

/* Conditional Rendering */
//import Garage from './3_5_ConditionalRendering/Garage';

/* List */
//import Garage from './3_6_List/Garage';

/* List Keys */
//import Garage from './3_7_ListKeys/Garage';

/* Inline CSS */
//import Header from './3_8_InlineCSS/Header';

/* CSS Stylesheet */
//import Header from './3_9_CSSSheet/Header';

/* State in Function Components */
//import FavoriteColor from './3_10_State/FavoriteColor';

/* State in Class Components */
//import FavoriteColor from './3_11_StateClassComponent/FavoriteColor';

/* Multiple State in Hooks */
//import Scooter from './3_12_MultipleHook/Scooter';

/* State with object */
//import Scooter from './3_13_StateObject/Scooter';

/* Updating Function state in object */
//import Scooter from './3_14_UpdateFuncStateObject/Scooter';

/* Updating Class state in object */
//import FavoriteColor from './3_15_UpdateClassStateObject/FavoriteColor';

/* Update Array in Func state */
//import Scooter from './3_16_UpdateFuncStateArray/Scooter';

/* useEffect Hook */
//import Timer from './3_17_UseEffectHook/Timer';

/* Use effect ways */
//import Timer from './3_18_UseEffectWays/Timer';

/* Creating form */
//import MyForm from './3_19_Forms/MyForm';

/* Get Input from form */
//import MyForm from './3_20_InputGetForm/MyForm';

/* Submit form */
//import MyForm from './3_21_SubmitForm/MyForm';

/* Multiple submit */
//import MyForm from './3_22_MultipleInputs/MyForm';

/* Simplify multiple input */
//import MyForm from './3_23_SimplifyMultiSubmit/MyForm';

/* Setting initial value */
//import MyForm from './3_24_SettingInitialValue/MyForm';


/* Code Challenge */
//import FrontPage from './4_0_ProjectEx/FrontPage';


/* Router Setup */
//import Main from './5_2_RouterSetup/Main';

/* Router Links */
//import Main from './5_3_RouterLinks/Main';

/* Router parameter */
//import Main from './5_4_RouterParams/Main';

/* Nested Routes */
//import Main from './5_5_NestedRoutes/Main';

/* Navigation in Router */
//import Main from './5_6_NavigationRouter/Main'


/* HTTP Read data */
//import Main from './6_2_HttpRead/Main'


/* Unit Testing */
//import Main from './7_1_UnitTesting/Main';


/* E-commerce front end */
import Main from './9_0_E_Commerce/Main'





/* Rendering area */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
