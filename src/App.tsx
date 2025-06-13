import "./index.css";
import { NavBar } from "./components/Nav/NavBar";
import ReservationDetails from "./components/ReservationDetails/ReservationDetails";
import { StepsNavigation } from "./components/StepNavigation/StepsNavigation";
import FilterSidebar from "./components/FilterSideBar/FilterSideBar";
import CardList from "./components/CardList/CardList";
import { Suscribe } from "./components/Footer/Suscribe";
import { Footer } from "./components/Footer/Footer";

function App() {
  const handleModify = () => {
    console.log("Modificar reserva");
  };

  return (
    <div className="bg-white flex flex-col min-h-screen">
      {/* Contenedor principal */}
      <div className="max-w-7xl w-full bg-white">
        <NavBar />
        <ReservationDetails
          origin="Miami International Airport (MIA)"
          destination="Orlando International Airport (MCO)"
          startDate="20 septiembre 2025, 12:00"
          endDate="30 septiembre 2025, 18:00"
          onModify={handleModify}
        />
      </div>

      {/* Navegación de pasos */}
      <div className="flex items-center justify-center w-full bg-[var(--color-custom-2)] min-h-[60px] h-auto mt-4 py-2">
        <StepsNavigation />
      </div>

      {/* Contenedor de contenido principal */}
      <div className="w-full bg-[var(--color-custom-light-gray)] flex-grow flex justify-center pt-4 pb-5">
        <div className="pt-1.5 w-[89%] sm:w-[89%] md:w-[89%] lg:w-[89%] xl:w-auto">
          <div className="flex flex-row w-full mx-auto bg-transparent items-start">
            <FilterSidebar />
            <CardList />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full">
        <Suscribe />
        <Footer />
      </div>
    </div>
  );
}

export default App;
