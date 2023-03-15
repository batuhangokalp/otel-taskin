import React from "react";
import { Route, Routes } from "react-router-dom";
import DoubleRoomDetails from "./pages/DoubleRoomDetails";
import StandartRoomDetails from "./pages/StandartRoomDetails";
import TripleRoomDetail from "./pages/TripleRoomDetail";
import Communication from "./pages/Communication";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Reservation from "./pages/Reservation";
import Rooms from "./pages/Rooms";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="rooms" element={<Rooms />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="reservation" element={<Reservation />} >
        <Route path=":roomType" element={<Reservation />} />
      </Route>
      <Route path="communication" element={<Communication />} />
      <Route path="standartRoom" element={<StandartRoomDetails />} />
      <Route path="doubleRoom" element={<DoubleRoomDetails />} />
      <Route path="tripleRoom" element={<TripleRoomDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
