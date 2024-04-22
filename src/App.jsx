
import { Route, Routes } from 'react-router-dom'
import { Container } from '@mui/material'
import Home from './pages/Home'
import ChatPanel from './pages/ChatPanel'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import Footer from './components/Footer'
import SampleChat from './pages/SampleChat'
import './App.css'
import 'react-perfect-scrollbar/dist/css/styles.css';

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sample-chat" element={<SampleChat />} />
          <Route path="/chat" element={<ChatPanel />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      <Footer />
    </>
  )
}

export default App
