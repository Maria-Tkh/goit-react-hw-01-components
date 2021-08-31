import { Profile } from 'components/Profile/Profile';
import user from '../user.json';

import { Statistics } from 'components/Statistics/Statistics';
import statisticalData from '../statistical-data.json';

export const AppProfile = () => {
  return (
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  );
};

export const AppStatistics = () => {
  return (
    <>
      <Statistics title="Upload stats" />
      <Statistics stats={statisticalData} />
    </>
  );
};

// //////////////////////////////////
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
