import { Route, Switch } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import useScrollToTop from "@/hooks/useScrollToTop";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import HomePage from "@/pages/HomePage";
import InventoryPage from "@/pages/InventoryPage";
import RentalsPage from "@/pages/RentalsPage";
import ServicesPage from "@/pages/ServicesPage";
import AboutPage from "@/pages/AboutPage";
import DenagoPage from "@/pages/DenagoPage";
import EvolutionPage from "@/pages/EvolutionPage";
import VehicleDetailPage from "@/pages/VehicleDetailPage";
import ContactPage from "@/pages/ContactPage";
import ThankYouPage from "@/pages/ThankYouPage";
import ShowroomPage from "@/pages/ShowroomPage";
import NotFound from "@/pages/not-found";
import NewInventoryPage from "@/pages/NewInventoryPage";
import NewServicesPage from "@/pages/NewServicesPage";
import NewAboutPage from "@/pages/NewAboutPage";
import { PrivacyPolicyPage } from "@/pages/PrivacyPolicyPage";
import { TermsOfServicePage } from "@/pages/TermsOfServicePage";
// Vehicle Page Imports - DENAGO (5 models)
import DenagoEvNomad from "@/pages/vehicles/DenagoEvNomad";
import DenagoEvNomadXL from "@/pages/vehicles/DenagoEvNomadXL";
import DenagoEVRoverXL from "@/pages/vehicles/DenagoEVRoverXL";
import DenagoEvRoverXL6 from "@/pages/vehicles/DenagoEvRoverXL6";
import DenagoEvRoverXXL from "@/pages/vehicles/DenagoEvRoverXXL";
// Vehicle Page Imports - EVOLUTION (30 models)
import EvolutionCarrier6Plus from "@/pages/vehicles/EvolutionCarrier6Plus";
import EvolutionCarrier8Plus from "@/pages/vehicles/EvolutionCarrier8Plus";
import EvolutionClassic2Plus from "@/pages/vehicles/EvolutionClassic2Plus";
import EvolutionClassic2Pro from "@/pages/vehicles/EvolutionClassic2Pro";
import EvolutionClassic4Plus from "@/pages/vehicles/EvolutionClassic4Plus";
import EvolutionClassic4Pro from "@/pages/vehicles/EvolutionClassic4Pro";
import EvolutionD6MaxGT4 from "@/pages/vehicles/EvolutionD6MaxGT4";
import EvolutionD6MaxGT6 from "@/pages/vehicles/EvolutionD6MaxGT6";
import EvolutionD6MaxXT4 from "@/pages/vehicles/EvolutionD6MaxXT4";
import EvolutionD6MaxXT6 from "@/pages/vehicles/EvolutionD6MaxXT6";
import EvolutionD5Maverick22 from "@/pages/vehicles/EvolutionD5Maverick22";
import EvolutionD5Maverick22Plus from "@/pages/vehicles/EvolutionD5Maverick22Plus";
import EvolutionD5Maverick4 from "@/pages/vehicles/EvolutionD5Maverick4";
import EvolutionD5Maverick4Plus from "@/pages/vehicles/EvolutionD5Maverick4Plus";
import EvolutionD5Maverick42Plus from "@/pages/vehicles/EvolutionD5Maverick42Plus";
import EvolutionD5Maverick6 from "@/pages/vehicles/EvolutionD5Maverick6";
import EvolutionD5Maverick6Plus from "@/pages/vehicles/EvolutionD5Maverick6Plus";
import EvolutionD5Ranger22 from "@/pages/vehicles/EvolutionD5Ranger22";
import EvolutionD5Ranger22Plus from "@/pages/vehicles/EvolutionD5Ranger22Plus";
import EvolutionD5Ranger4 from "@/pages/vehicles/EvolutionD5Ranger4";
import EvolutionD5Ranger4Plus from "@/pages/vehicles/EvolutionD5Ranger4Plus";
import EvolutionD5Ranger42Plus from "@/pages/vehicles/EvolutionD5Ranger42Plus";
import EvolutionD5Ranger6 from "@/pages/vehicles/EvolutionD5Ranger6";
import EvolutionD5Ranger6Plus from "@/pages/vehicles/EvolutionD5Ranger6Plus";
import EvolutionForester4 from "@/pages/vehicles/EvolutionForester4";
import EvolutionForester4Plus from "@/pages/vehicles/EvolutionForester4Plus";
import EvolutionForester6Plus from "@/pages/vehicles/EvolutionForester6Plus";
import EvolutionTurman200Plus from "@/pages/vehicles/EvolutionTurman200Plus";
import EvolutionTurman800Plus from "@/pages/vehicles/EvolutionTurman800Plus";
import EvolutionTurman1000Plus from "@/pages/vehicles/EvolutionTurman1000Plus";
// Location Pages (States and Countries)
import DynamicLocationPage from "@/pages/DynamicLocationPage";

const queryClient = new QueryClient();

function App() {
  // Global scroll-to-top on route changes
  useScrollToTop();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Analytics />
        <Navigation />
        <main className="flex-1">
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/inventory" component={NewInventoryPage} />
            <Route path="/rentals" component={RentalsPage} />
            <Route path="/services" component={NewServicesPage} />
            <Route path="/about" component={NewAboutPage} />
            <Route path="/denago" component={DenagoPage} />
            <Route path="/evolution" component={EvolutionPage} />
            <Route path="/vehicle/:id" component={VehicleDetailPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/thank-you" component={ThankYouPage} />
            <Route path="/showroom" component={ShowroomPage} />
            <Route path="/privacy" component={PrivacyPolicyPage} />
            <Route path="/terms" component={TermsOfServicePage} />
            
            {/* DENAGO Vehicle Pages (5 models) */}
            <Route path="/vehicles/denago-ev-nomad" component={DenagoEvNomad} />
            <Route path="/vehicles/denago-ev-nomad-xl" component={DenagoEvNomadXL} />
            <Route path="/vehicles/denago-ev-rover-xl" component={DenagoEVRoverXL} />
            <Route path="/vehicles/denago-ev-rover-xl6" component={DenagoEvRoverXL6} />
            <Route path="/vehicles/denago-ev-rover-xxl" component={DenagoEvRoverXXL} />
            
            {/* EVOLUTION Vehicle Pages (30 models) */}
            <Route path="/vehicles/evolution-carrier-6-plus" component={EvolutionCarrier6Plus} />
            <Route path="/vehicles/evolution-carrier-8-plus" component={EvolutionCarrier8Plus} />
            <Route path="/vehicles/evolution-classic-2-plus" component={EvolutionClassic2Plus} />
            <Route path="/vehicles/evolution-classic-2-pro" component={EvolutionClassic2Pro} />
            <Route path="/vehicles/evolution-classic-4-plus" component={EvolutionClassic4Plus} />
            <Route path="/vehicles/evolution-classic-4-pro" component={EvolutionClassic4Pro} />
            <Route path="/vehicles/evolution-d6-max-gt4" component={EvolutionD6MaxGT4} />
            <Route path="/vehicles/evolution-d6-max-gt6" component={EvolutionD6MaxGT6} />
            <Route path="/vehicles/evolution-d6-max-xt4" component={EvolutionD6MaxXT4} />
            <Route path="/vehicles/evolution-d6-max-xt6" component={EvolutionD6MaxXT6} />
            <Route path="/vehicles/evolution-d5-maverick-2-2" component={EvolutionD5Maverick22} />
            <Route path="/vehicles/evolution-d5-maverick-2-2-plus" component={EvolutionD5Maverick22Plus} />
            <Route path="/vehicles/evolution-d5-maverick-4" component={EvolutionD5Maverick4} />
            <Route path="/vehicles/evolution-d5-maverick-4-plus" component={EvolutionD5Maverick4Plus} />
            <Route path="/vehicles/evolution-d5-maverick-4-2-plus" component={EvolutionD5Maverick42Plus} />
            <Route path="/vehicles/evolution-d5-maverick-6" component={EvolutionD5Maverick6} />
            <Route path="/vehicles/evolution-d5-maverick-6-plus" component={EvolutionD5Maverick6Plus} />
            <Route path="/vehicles/evolution-d5-ranger-2-2" component={EvolutionD5Ranger22} />
            <Route path="/vehicles/evolution-d5-ranger-2-2-plus" component={EvolutionD5Ranger22Plus} />
            <Route path="/vehicles/evolution-d5-ranger-4" component={EvolutionD5Ranger4} />
            <Route path="/vehicles/evolution-d5-ranger-4-plus" component={EvolutionD5Ranger4Plus} />
            <Route path="/vehicles/evolution-d5-ranger-4-2-plus" component={EvolutionD5Ranger42Plus} />
            <Route path="/vehicles/evolution-d5-ranger-6" component={EvolutionD5Ranger6} />
            <Route path="/vehicles/evolution-d5-ranger-6-plus" component={EvolutionD5Ranger6Plus} />
            <Route path="/vehicles/evolution-forester-4" component={EvolutionForester4} />
            <Route path="/vehicles/evolution-forester-4-plus" component={EvolutionForester4Plus} />
            <Route path="/vehicles/evolution-forester-6-plus" component={EvolutionForester6Plus} />
            <Route path="/vehicles/evolution-turman-200-plus" component={EvolutionTurman200Plus} />
            <Route path="/vehicles/evolution-turman-800-plus" component={EvolutionTurman800Plus} />
            <Route path="/vehicles/evolution-turman-1000-plus" component={EvolutionTurman1000Plus} />
            
            {/* Dynamic Location Pages (All States and Countries) - Must be last before 404 */}
            <Route path="/:slug" component={DynamicLocationPage} />
            
            {/* 404 Not Found - Must be absolute last */}
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}

export default App;
