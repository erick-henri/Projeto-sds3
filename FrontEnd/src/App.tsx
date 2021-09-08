import BarChart from "assets/components/BarChart";
import DataTable from "assets/components/DataTable";
import Footer from "assets/components/Footer";
import NavBar from "./assets/components/NavBar"
import DonutChart from "assets/components/DonutChart"

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">Dashboard de Vendas </h1>

        <div className="row px-3">

          <div className="col-sm-6">
          <h5 className="text-center text-secondary"> Taxa de sucesso</h5>
          <BarChart/>
          </div>
          <div className="col-sm-6">
          <h5> TTaxa de sucesso</h5>
          <DonutChart/>
          </div>
          
          <div className="py-3">
            <h2 className="text-primary"> Todas as Vendas</h2>
          </div>
        </div>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;