import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "react-query";
import Error404 from './Errors/Error404';
import Main from './Views/Main';
import Docker from './Views/Docker/Docker';
import DockerData from './Views/Docker/DockerData';
import DockerIndex from './Views/Docker/DockerIndex';

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
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;

