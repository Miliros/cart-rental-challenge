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
    <div className="bg-white flex flex-col items-center min-h-screen pt-2 ">
      <div className="w-7xl bg-white">
        <NavBar />
        <ReservationDetails
          origin="Miami International Airport (MIA)"
          destination="Orlando International Airport (MCO)"
          startDate="20 septiembre 2025, 12:00"
          endDate="30 septiembre 2025, 18:00"
          onModify={handleModify}
        />
      </div>

      <div className="flex items-center justify-center w-full bg-[var(--color-custom-2)] h-[60px] mt-4">
        <StepsNavigation />
      </div>
      <div className="w-full bg-[var(--color-custom-light-gray)] h-full flex justify-center pt-4">
        <div className="pt-1.5 w-[90%]">
          <div className="flex flex-row w-full mx-auto bg-transparent items-start">
            <FilterSidebar />
            <CardList />
          </div>
        </div>
      </div>
      <div className="w-full">
        <Suscribe />
        <Footer />
      </div>
    </div>
  );
}

export default App;
