import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "react-query";
import Error404 from './Errors/Error404';
import Main from './Views/Main';
import Docker from './Views/Docker/Docker';
import DockerData from './Views/Docker/DockerData';
import DockerIndex from './Views/Docker/DockerIndex';
import Ngrok from './Views/Ngrok/Ngrok';
// import Css3 from './Views/Css3/Css3';
// import Css3Data from './Views/Css3/Css3Data';
// import Css3Index from './Views/Css3/Css3Index';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="docker" element={<Docker />}>
            <Route index element={<DockerIndex />}/>
            <Route path=":route" element={<DockerData />}/>
          </Route>
          <Route path="ngrok" element={<Ngrok />}/>
          {/* <Route path="css3" element={<Css3 />}>
            <Route index element={<Css3Index />}/>
            <Route path=":route" element={<Css3Data />}/>
          </Route> */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

