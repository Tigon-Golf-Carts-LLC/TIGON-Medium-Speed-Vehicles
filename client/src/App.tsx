import { Route, Switch } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import useScrollToTop from "@/hooks/useScrollToTop";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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
// Vehicle Page Imports
import EvolutionD5Ranger6Plus from "@/pages/vehicles/EvolutionD5Ranger6Plus";
import EvolutionD5Ranger22Plus from "@/pages/vehicles/EvolutionD5Ranger22Plus";
import EvolutionForester4Plus from "@/pages/vehicles/EvolutionForester4Plus";
import EvolutionTurfman1000 from "@/pages/vehicles/EvolutionTurfman1000";
import DenagoEvCity from "@/pages/vehicles/DenagoEvCity";
import EvolutionD6MaxGT4 from "@/pages/vehicles/EvolutionD6MaxGT4";
import DenagoEvNomad from "@/pages/vehicles/DenagoEvNomad";
import EvolutionClassic4Plus from "@/pages/vehicles/EvolutionClassic4Plus";
import DenagoEVRoverXL from "@/pages/vehicles/DenagoEVRoverXL";
import DenagoEvNomadXL from "@/pages/vehicles/DenagoEvNomadXL";
import DenagoEvRoverXL6 from "@/pages/vehicles/DenagoEvRoverXL6";
import DenagoEvRoverXXL from "@/pages/vehicles/DenagoEvRoverXXL";
import EvolutionCarrier6Plus from "@/pages/vehicles/EvolutionCarrier6Plus";
import EvolutionCarrier8Plus from "@/pages/vehicles/EvolutionCarrier8Plus";
import EvolutionClassic2Plus from "@/pages/vehicles/EvolutionClassic2Plus";
import EvolutionClassic2Pro from "@/pages/vehicles/EvolutionClassic2Pro";
import EvolutionD5Maverick4 from "@/pages/vehicles/EvolutionD5Maverick4";
import EvolutionD5Maverick6 from "@/pages/vehicles/EvolutionD5Maverick6";
import EvolutionD5Maverick4Plus from "@/pages/vehicles/EvolutionD5Maverick4Plus";
import EvolutionD5Maverick6Plus from "@/pages/vehicles/EvolutionD5Maverick6Plus";
import EvolutionD6MaxGT6 from "@/pages/vehicles/EvolutionD6MaxGT6";
import EvolutionD6MaxXT4 from "@/pages/vehicles/EvolutionD6MaxXT4";
import EvolutionD6MaxXT6 from "@/pages/vehicles/EvolutionD6MaxXT6";
// Bucks County Town Pages
import {
  BristolPage, ChalfontPage, DoylestownPage, DublinPage, HulmevillePage,
  IvylandPage, LanghornePage, LanghorneManorPage, MorrisvillePage, NewBritainPage,
  NewHopePage, NewtownPage, PenndelPage, PerkasiePage, QuakertownPage,
  RichlandtownPage, RiegelsvillePage, SellersvillePage, SilverdalePage, TelfordPage,
  TrumbauersvillePage, TullytownPage, YardleyPage, HatboroPage, SoudertonPage,
  BedminsterTownshipPage, BensalemTownshipPage, BridgetonTownshipPage, BristolTownshipPage,
  BuckinghamTownshipPage, DoylestownTownshipPage, DurhamTownshipPage, EastRockhillTownshipPage,
  FallsTownshipPage, HaycockTownshipPage, HilltownTownshipPage, LowerMakefieldTownshipPage,
  LowerSouthamptonTownshipPage, MiddletownTownshipPage, MilfordTownshipPage, NewBritainTownshipPage,
  NewtownTownshipPage, NockamixonTownshipPage, NorthamptonTownshipPage, PlumsteadTownshipPage,
  RichlandTownshipPage, SoleburyTownshipPage, SpringfieldTownshipPage, TinicumTownshipPage,
  UpperMakefieldTownshipPage, UpperSouthamptonTownshipPage, WarminsterTownshipPage,
  WarringtonTownshipPage, WarwickTownshipPage, WestRockhillTownshipPage, WrightstownTownshipPage
} from "@/pages/towns/BucksCountyTownPages";

const queryClient = new QueryClient();

function App() {
  // Global scroll-to-top on route changes
  useScrollToTop();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-50 flex flex-col">
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
            
            {/* Vehicle Detail Pages */}
            <Route path="/vehicles/evolution-d5-ranger-6-plus" component={EvolutionD5Ranger6Plus} />
            <Route path="/vehicles/evolution-d5-ranger-22-plus" component={EvolutionD5Ranger22Plus} />
            <Route path="/vehicles/evolution-forester-4-plus" component={EvolutionForester4Plus} />
            <Route path="/vehicles/evolution-turfman-1000" component={EvolutionTurfman1000} />
            <Route path="/vehicles/denago-ev-city" component={DenagoEvCity} />
            <Route path="/vehicles/evolution-d6-max-gt4" component={EvolutionD6MaxGT4} />
            <Route path="/vehicles/denago-ev-nomad" component={DenagoEvNomad} />
            <Route path="/vehicles/evolution-classic-4-plus" component={EvolutionClassic4Plus} />
            <Route path="/vehicles/denago-ev-rover-xl" component={DenagoEVRoverXL} />
            <Route path="/vehicles/denago-ev-nomad-xl" component={DenagoEvNomadXL} />
            <Route path="/vehicles/denago-ev-rover-xl6" component={DenagoEvRoverXL6} />
            <Route path="/vehicles/denago-ev-rover-xxl" component={DenagoEvRoverXXL} />
            <Route path="/vehicles/evolution-carrier-6-plus" component={EvolutionCarrier6Plus} />
            <Route path="/vehicles/evolution-carrier-8-plus" component={EvolutionCarrier8Plus} />
            <Route path="/vehicles/evolution-classic-2-plus" component={EvolutionClassic2Plus} />
            <Route path="/vehicles/evolution-classic-2-pro" component={EvolutionClassic2Pro} />
            <Route path="/vehicles/evolution-d5-maverick-4" component={EvolutionD5Maverick4} />
            <Route path="/vehicles/evolution-d5-maverick-6" component={EvolutionD5Maverick6} />
            <Route path="/vehicles/evolution-d5-maverick-4-plus" component={EvolutionD5Maverick4Plus} />
            <Route path="/vehicles/evolution-d5-maverick-6-plus" component={EvolutionD5Maverick6Plus} />
            <Route path="/vehicles/evolution-d6-max-gt6" component={EvolutionD6MaxGT6} />
            <Route path="/vehicles/evolution-d6-max-xt4" component={EvolutionD6MaxXT4} />
            <Route path="/vehicles/evolution-d6-max-xt6" component={EvolutionD6MaxXT6} />
            
            {/* Bucks County Borough Pages */}
            <Route path="/bristol-borough-golf-carts" component={BristolPage} />
            <Route path="/chalfont-borough-golf-carts" component={ChalfontPage} />
            <Route path="/doylestown-borough-golf-carts" component={DoylestownPage} />
            <Route path="/dublin-borough-golf-carts" component={DublinPage} />
            <Route path="/hulmeville-borough-golf-carts" component={HulmevillePage} />
            <Route path="/ivyland-borough-golf-carts" component={IvylandPage} />
            <Route path="/langhorne-borough-golf-carts" component={LanghornePage} />
            <Route path="/langhorne-manor-borough-golf-carts" component={LanghorneManorPage} />
            <Route path="/morrisville-borough-golf-carts" component={MorrisvillePage} />
            <Route path="/new-britain-borough-golf-carts" component={NewBritainPage} />
            <Route path="/new-hope-borough-golf-carts" component={NewHopePage} />
            <Route path="/newtown-borough-golf-carts" component={NewtownPage} />
            <Route path="/penndel-borough-golf-carts" component={PenndelPage} />
            <Route path="/perkasie-borough-golf-carts" component={PerkasiePage} />
            <Route path="/quakertown-borough-golf-carts" component={QuakertownPage} />
            <Route path="/richlandtown-borough-golf-carts" component={RichlandtownPage} />
            <Route path="/riegelsville-borough-golf-carts" component={RiegelsvillePage} />
            <Route path="/sellersville-borough-golf-carts" component={SellersvillePage} />
            <Route path="/silverdale-borough-golf-carts" component={SilverdalePage} />
            <Route path="/telford-borough-golf-carts" component={TelfordPage} />
            <Route path="/trumbauersville-borough-golf-carts" component={TrumbauersvillePage} />
            <Route path="/tullytown-borough-golf-carts" component={TullytownPage} />
            <Route path="/yardley-borough-golf-carts" component={YardleyPage} />
            <Route path="/hatboro-borough-golf-carts" component={HatboroPage} />
            <Route path="/souderton-borough-golf-carts" component={SoudertonPage} />
            
            {/* Bucks County Township Pages */}
            <Route path="/bedminster-township-golf-carts" component={BedminsterTownshipPage} />
            <Route path="/bensalem-township-golf-carts" component={BensalemTownshipPage} />
            <Route path="/bridgeton-township-golf-carts" component={BridgetonTownshipPage} />
            <Route path="/bristol-township-golf-carts" component={BristolTownshipPage} />
            <Route path="/buckingham-township-golf-carts" component={BuckinghamTownshipPage} />
            <Route path="/doylestown-township-golf-carts" component={DoylestownTownshipPage} />
            <Route path="/durham-township-golf-carts" component={DurhamTownshipPage} />
            <Route path="/east-rockhill-township-golf-carts" component={EastRockhillTownshipPage} />
            <Route path="/falls-township-golf-carts" component={FallsTownshipPage} />
            <Route path="/haycock-township-golf-carts" component={HaycockTownshipPage} />
            <Route path="/hilltown-township-golf-carts" component={HilltownTownshipPage} />
            <Route path="/lower-makefield-township-golf-carts" component={LowerMakefieldTownshipPage} />
            <Route path="/lower-southampton-township-golf-carts" component={LowerSouthamptonTownshipPage} />
            <Route path="/middletown-township-golf-carts" component={MiddletownTownshipPage} />
            <Route path="/milford-township-golf-carts" component={MilfordTownshipPage} />
            <Route path="/new-britain-township-golf-carts" component={NewBritainTownshipPage} />
            <Route path="/newtown-township-golf-carts" component={NewtownTownshipPage} />
            <Route path="/nockamixon-township-golf-carts" component={NockamixonTownshipPage} />
            <Route path="/northampton-township-golf-carts" component={NorthamptonTownshipPage} />
            <Route path="/plumstead-township-golf-carts" component={PlumsteadTownshipPage} />
            <Route path="/richland-township-golf-carts" component={RichlandTownshipPage} />
            <Route path="/solebury-township-golf-carts" component={SoleburyTownshipPage} />
            <Route path="/springfield-township-golf-carts" component={SpringfieldTownshipPage} />
            <Route path="/tinicum-township-golf-carts" component={TinicumTownshipPage} />
            <Route path="/upper-makefield-township-golf-carts" component={UpperMakefieldTownshipPage} />
            <Route path="/upper-southampton-township-golf-carts" component={UpperSouthamptonTownshipPage} />
            <Route path="/warminster-township-golf-carts" component={WarminsterTownshipPage} />
            <Route path="/warrington-township-golf-carts" component={WarringtonTownshipPage} />
            <Route path="/warwick-township-golf-carts" component={WarwickTownshipPage} />
            <Route path="/west-rockhill-township-golf-carts" component={WestRockhillTownshipPage} />
            <Route path="/wrightstown-township-golf-carts" component={WrightstownTownshipPage} />
            
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
