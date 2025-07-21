import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface VehicleFiltersProps {
  selectedBrand: string;
  selectedDriveType: string;
  onBrandChange: (brand: string) => void;
  onDriveTypeChange: (driveType: string) => void;
}

export default function VehicleFilters({
  selectedBrand,
  selectedDriveType,
  onBrandChange,
  onDriveTypeChange,
}: VehicleFiltersProps) {
  return (
    <div className="flex flex-wrap gap-4">
      <Select value={selectedBrand} onValueChange={onBrandChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="All Brands" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="">All Brands</SelectItem>
          <SelectItem value="denago">DENAGO</SelectItem>
          <SelectItem value="evolution">EVOLUTION</SelectItem>
        </SelectContent>
      </Select>

      <Select value={selectedDriveType} onValueChange={onDriveTypeChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="All Drive Types" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="">All Drive Types</SelectItem>
          <SelectItem value="2x4">2X4</SelectItem>
          <SelectItem value="4x4">4X4</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
