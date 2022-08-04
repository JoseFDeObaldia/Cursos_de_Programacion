import { Routes, Route, Navigate} from 'react-router-dom';
import Home from './routes/Home';
import AboutUs from './routes/AboutUs';
import Users from './routes/Users';
import User from './components/User';
import Contact from './routes/Contact';
import Layout from './Layout';

function App() {
  return(
    <>
      <section>
        <Routes>
          <Route path="/" element={<Layout />}>

            <Route index element={<Home />} />
            <Route path="aboutUs" element={<AboutUs />} />
            <Route path="users" element={<Users />} />
            <Route path="users/:userId" element={<User />} />

            <Route path="contact" element={<Contact />} />

            {/* <Route path="*" element={<h2>404 - not found</h2>} /> */}
            <Route path="*" element={<Navigate replace to="/" />} />

          </Route>
        </Routes>
      </section>
    </>
  );
}

export default App;