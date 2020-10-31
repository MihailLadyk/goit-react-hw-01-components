import React from "react";

// import Statistics from "./components/statistics/statistics";
// import statistics from "./data/statistical-data.json";

// import Profile from "./components/Profile/Profile";
// import user from "./data/user.json";

// import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
// import items from "./data/transactions.json";

import FriendList from "./components/FriendList/FriendList.js";
import friends from "./data/friends.json";

function App() {
  return (
    <div>
      {/* <Statistics title="UPLOAD STATS" stats={statistics} /> */}
      {/* <TransactionHistory items={items} /> */}
      {/* {<Profile stats={user.stats} name={user.name} tag={user.tag} location={user.location} avatar={user.avatar}/>} */}
      <FriendList friends={friends} />
    </div>
  );
}

export default App;
