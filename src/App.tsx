import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import DefaultLayout from './layout/DefaultLayout';
import Customer from './pages/Customer';
import ManageAstrologer from './pages/Astrologers/ManageAstrologer';
import PendingRequest from './pages/Astrologers/PendingRequest';
import BannerManagement from './pages/BannerManagement';
import SendNotifications from './pages/SendNotifications';
import CreditHistory from './pages/WalletHistory/CreditHistory';
import DebitHistory from './pages/WalletHistory/DebitHistory';
import Pending from './pages/WalletHistory/Pending';
import AiAstrologerHistory from './pages/AppHistory/ChatHistory/AiAstrologerHistory';
import AstrologerHistory from './pages/AppHistory/ChatHistory/AstrologerHistory';
import VideoCallHistory from './pages/AppHistory/VideoCallHistory';
import CallHistory from './pages/AppHistory/CallHistory';
import Products from './pages/AstroMall/Products';
import Categories from './pages/AstroMall/Categories';
import Orders from './pages/AstroMall/Orders';
import ManageAIAstrologer from './pages/Astrologers/ManageAIAstrologers';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <Routes>
        <Route
          index
          element={
            <>
              <PageTitle title="Dashboard | Astro Bandhan" />
              <ECommerce />
            </>
          }
        />
        <Route
          path="/calendar"
          element={
            <>
              <PageTitle title="Calendar | Astro Bandhan" />
              <Calendar />
            </>
          }
        />
        {/* <Route
          path="/profile"
          element={
            <>
              <PageTitle title="Profile | Astro Bandhan" />
              <Profile />
            </>
          }
        /> */}
         <Route
          path="/customers"
          element={
            <>
              <PageTitle title="Customers | Astro Bandhan" />
              <Customer/>
            </>
          }
        />
         <Route
          path="/astrologers/manageAstrologers"
          element={
            <>
              <PageTitle title="Manage Astrologers | Astro Bandhan" />
              <ManageAstrologer/>
            </>
          }
        />
        <Route
          path="/astrologers/pendingRequest"
          element={
            <>
              <PageTitle title=" Astrologers Pending Request | Astro Bandhan" />
             <PendingRequest/>
            </>
          }
        />
         <Route
          path="/astrologers/manageaiAstrologers"
          element={
            <>
              <PageTitle title=" Astrologers Pending Request | Astro Bandhan" />
             <ManageAIAstrologer/>
            </>
          }
        />
        <Route
          path="/banner"
          element={
            <>
              <PageTitle title=" Astrologers Pending Request | Astro Bandhan" />
            <BannerManagement/>
            </>
          }
        />

         <Route
          path="/sendNotifications"
          element={
            <>
              <PageTitle title=" Astrologers Send Notifications | Astro Bandhan" />
           <SendNotifications/>
            </>
          }
        />

        <Route
          path="/wallet/creditHistory"
          element={
            <>
              <PageTitle title=" Astrologers Send Notifications | Astro Bandhan" />
           <CreditHistory/>
            </>
          }
        />
        <Route
          path="/wallet/debitHistory"
          element={
            <>
              <PageTitle title=" Astrologers Send Notifications | Astro Bandhan" />
           <DebitHistory/>
            </>
          }
        />
         <Route
          path="/wallet/pending"
          element={
            <>
              <PageTitle title=" Astrologers Send Notifications | Astro Bandhan" />
           <Pending/>
            </>
          }
        />
         <Route
          path="/history/chat/ai_astrologer"
          element={
            <>
              <PageTitle title=" Astrologers Send Notifications | Astro Bandhan" />
            <AiAstrologerHistory/>
            </>
          }
        />
        <Route
          path="/history/chat/astrologer"
          element={
            <>
              <PageTitle title=" Astrologers Send Notifications | Astro Bandhan" />
            <AstrologerHistory/>
            </>
          }
        />
        <Route
          path="/history/call"
          element={
            <>
              <PageTitle title=" Astrologers Send Notifications | Astro Bandhan" />
           <CallHistory/>
            </>
          }
        />
         <Route
          path="/history/video_call"
          element={
            <>
              <PageTitle title=" Astrologers Send Notifications | Astro Bandhan" />
            <VideoCallHistory/>
            </>
          }
        />
        <Route
          path="/astromall/products"
          element={
            <>
              <PageTitle title=" Astrologers Send Notifications | Astro Bandhan" />
            <Products/>
            </>
          }
        />
        <Route
          path="/astromall/categories"
          element={
            <>
              <PageTitle title=" Astrologers Send Notifications | Astro Bandhan" />
            <Categories/>
            </>
          }
        />
        <Route
          path="/astromall/Orders"
          element={
            <>
              <PageTitle title=" Astrologers Send Notifications | Astro Bandhan" />
            <Orders/>
            </>
          }
        />
        
        {/* <Route
          path="/forms/form-elements"
          element={
            <>
              <PageTitle title="Form Elements | Astro Bandhan" />
              <FormElements />
            </>
          }
        />
        <Route
          path="/forms/form-layout"
          element={
            <>
              <PageTitle title="Form Layout | Astro Bandhan" />
              <FormLayout />
            </>
          }
        /> */}
        <Route
          path="/tables"
          element={
            <>
              <PageTitle title="Tables | Astro Bandhan" />
              <Tables />
            </>
          }
        />
        <Route
          path="/settings"
          element={
            <>
              <PageTitle title="Settings | Astro Bandhan" />
              <Settings />
            </>
          }
        />
        <Route
          path="/chart"
          element={
            <>
              <PageTitle title="Basic Chart | Astro Bandhan" />
              <Chart />
            </>
          }
        />
        <Route
          path="/ui/alerts"
          element={
            <>
              <PageTitle title="Alerts | Astro Bandhan" />
              <Alerts />
            </>
          }
        />
        <Route
          path="/ui/buttons"
          element={
            <>
              <PageTitle title="Buttons | Astro Bandhan" />
              <Buttons />
            </>
          }
        />
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Signin | Astro Bandhan" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Signup | Astro Bandhan" />
              <SignUp />
            </>
          }
        />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
