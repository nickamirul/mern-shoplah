// import { Button } from "@/components/ui/button"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "@/pages/Home"
import Profile from "@/pages/Profile"
import SignIn from "@/pages/SignIn"
import SignUp from "@/pages/SignUp"
import StickyHeader from "./components/StickyHeader"
import PrivateRoute from "./components/PrivateRoute"


function App() {
  return (
    <BrowserRouter>
      <StickyHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
