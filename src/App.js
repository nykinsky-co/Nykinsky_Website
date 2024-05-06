import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Assets/styles/header.css';
import './Assets/styles/carousel.css';
import './Assets/styles/footer.css';


import { BrowserRouter, Route, Routes  } from 'react-router-dom';

//Header Pages
import Home from './MyComponents/Home';
import Partners from './MyComponents/Partners';
import Whatwedo from './MyComponents/Whatwedo';
import Industries from './MyComponents/Industries';
import Approach from './MyComponents/Approach';
import Insights from './MyComponents/Insights';



//FOR pagess

//Navbar Pages


//Services Section
import ServiceCloud from './pages/ServiceCloud.js';
import ServiceDataEngineering from './pages/ServiceDataEngineering.js';
import ServiceGenerative from './pages/SeriveGenerative.js';
import ServiceExperience from './pages/ServiceExperience.js';
import ServiceApplication from './pages/ServiceApplication.js';
import ServiceBusiness from './pages/ServiceBusiness.js';
import ServiceMlops from './pages/ServiceMlops.js';
import ServiceData from './pages/ServiceData.js';
import ServiceAiEngineering from './pages/ServiceAiEngineering.js';
import ServiceMlProduct from './pages/ServiceMlProduct.js';




//Industries Section
import Industriescpg from './pages/IndustriesCpg.js';
import IndustriesBfs from './pages/IndustriesBfs.js';
import IndustriesIns from './pages/IndustriesIns.js';
import IndustriesManu from './pages/IndustriesManu.js';
import IndustriesLogistics from './pages/IndustriesLogistics.js';
import IndustriesScience from './pages/IndustriesScience.js';
import IndustriesHealth from './pages/IndustriesHealth.js';
import IndustriesMedia from './pages/IndustriesMedia.js';



//Join Global Office
import GlobalOffice from './pages/GlobalOffice.js';
import Eligibility from './pages/Eligibility.js';


import  Navbar  from './pages/navbar.js';








//Footer Pages
import About from '../src/pages/About.js';


























function App() {
  return (
    <div className="AppContainer"> {/* Use the scrollable container */}

<BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        
        {/*Navbar's */}
        <Route exact path="/Services-AI" element={<Whatwedo/>} />
        <Route exact path="/indsutries" element={<Industries/>} />
        <Route exact path="/approach" element={<Approach/>} />
        <Route exact path="/our-partners" element={<Partners/>} />
        <Route exact path="/insights" element={<Insights/>} />


      {/*Navbar MegaMenu */}


      {/*Service section */}
      <Route exact path="/Cloud-Transformation" element={<ServiceCloud/>} />
      <Route exact path="/Data-Engineering" element={<ServiceDataEngineering/>} />
      <Route exact path="/Generative-AI" element={<ServiceGenerative/>} />
      <Route exact path="/Experience-Consulting" element={<ServiceExperience/>} />
      <Route exact path="/Application-Engineering" element={<ServiceApplication/>} />
      <Route exact path="/Business-Intelligence" element={<ServiceBusiness/>} />
      <Route exact path="/MLOps" element={<ServiceMlops/>} />
      <Route exact path="/Data-Science" element={<ServiceData/>} />
      <Route exact path="/AI-Engineering" element={<ServiceAiEngineering/>} />
      <Route exact path="/ML-Products & Platforms" element={<ServiceMlProduct/>} />



     

      <Route exact path="/industries-cpg" element={<Industriescpg/>} />
      <Route exact path="/industries-bfs" element={<IndustriesBfs/>} />
      <Route exact path="/industries-insurance" element={<IndustriesIns/>} />
      <Route exact path="/industries-Manufacturing" element={<IndustriesManu/>} />
      <Route exact path="/industries-Transportation-Logistics" element={<IndustriesLogistics/>} />
      <Route exact path="/industries-Life-Science" element={<IndustriesScience/>} />
      <Route exact path="/industries-Healthcare" element={<IndustriesHealth/>} />
      <Route exact path="/industries-tech-telecom-media" element={<IndustriesMedia/>} />


      <Route exact path="/join-global-office" element={<GlobalOffice/>} />
      <Route exact path="/Eligibility-Check" element={<Eligibility/>} />

      <Route exact path="/navbar" element={<Navbar/>} />
      
      

      




      {/*Footer Iteams */}
      <Route exact path="about-us" element={<About/>}/>

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
