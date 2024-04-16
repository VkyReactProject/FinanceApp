import React from 'react';
import './App.css';
import { Route ,Routes} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen/home.screen';
import AddCustomerScreen from './screens/AddCustomerScreen/addCustomer.screen';
import  HistoryScreen from './screens/History/history.screen';
import NotificationScreen from './screens/NotificationScreen/notification.screen';
import ReportPendingScreen from './screens/ReportPendingScreen/reportPending.screen';
import ReportUpdateScreen from './screens/ReportUpdateScreen/reportUpdate.screen';
function App() {
  return (
    <main className='master-container'>
    <Routes>
      <Route path='/' element={HomeScreen}/>
      <Route path='/addCustomer' element={AddCustomerScreen}/>
      <Route path='/history' element={HistoryScreen}/>
      <Route path='/notification' element={NotificationScreen}/>
      <Route path='/reportpending' element={ReportPendingScreen}/>
      <Route path=' /reportupdate' element={ReportUpdateScreen}/>
    </Routes>
    
     

  </main>
  );
}

export default App;
