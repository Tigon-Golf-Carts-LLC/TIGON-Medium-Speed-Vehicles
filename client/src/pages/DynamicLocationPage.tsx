import { useParams } from "wouter";
import { LOCATION_MAP } from "@/data/locations";
import LocationPage from "@/components/LocationPage";

export default function DynamicLocationPage() {
  const params = useParams() as { slug: string };
  const location = LOCATION_MAP[params.slug];

  if (!location) {
    // Return 404 if location not found
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Location Not Found</h1>
          <p className="text-gray-600 mb-8">
            The location you're looking for doesn't exist.
          </p>
          <a href="/" className="text-theme-primary hover:underline">
            Return Home
          </a>
        </div>
      </div>
    );
  }

  return <LocationPage location={location} />;
}
