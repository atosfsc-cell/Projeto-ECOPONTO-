import { useState } from 'react';
import { ArrowLeft, MapPin, Navigation, Filter, Home, Map as MapIcon, Scan, User, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { Checkbox } from './ui/checkbox';
import type { Screen } from '../App';

interface MapViewProps {
  onNavigate: (screen: Screen) => void;
}

interface CollectionPoint {
  id: number;
  name: string;
  address: string;
  distance: string;
  materials: string[];
  hours: string;
  lat: number;
  lng: number;
}

export function MapView({ onNavigate }: MapViewProps) {
  const [selectedPoint, setSelectedPoint] = useState<CollectionPoint | null>(null);
  const [filters, setFilters] = useState({
    plastic: true,
    glass: true,
    metal: true,
    paper: true,
    isopor: false,
  });

  const collectionPoints: CollectionPoint[] = [
    {
      id: 1,
      name: 'PEV Centro',
      address: 'Rua das Flores, 123',
      distance: '0.5 km',
      materials: ['Plástico', 'Vidro', 'Metal', 'Papel'],
      hours: 'Seg-Sex: 8h-18h',
      lat: -23.550520,
      lng: -46.633308,
    },
    {
      id: 2,
      name: 'EcoPonto Norte',
      address: 'Av. Principal, 456',
      distance: '1.2 km',
      materials: ['Plástico', 'Metal', 'Papel'],
      hours: 'Seg-Sáb: 7h-19h',
      lat: -23.545520,
      lng: -46.638308,
    },
    {
      id: 3,
      name: 'PEV Isopor Especializado',
      address: 'Rua da Reciclagem, 789',
      distance: '2.1 km',
      materials: ['Isopor', 'Plástico'],
      hours: 'Ter-Sex: 9h-17h',
      lat: -23.555520,
      lng: -46.628308,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-green-600 text-white p-4 shadow-lg z-10">
        <div className="flex items-center justify-between">
          <button
            onClick={() => onNavigate('dashboard')}
            className="flex items-center gap-2 text-white"
          >
            <ArrowLeft className="w-6 h-6" />
            <span>Pontos de Coleta</span>
          </button>
          
          <Sheet>
            <SheetTrigger asChild>
              <button className="flex items-center gap-2 bg-white/20 px-3 py-2 rounded-lg">
                <Filter className="w-5 h-5" />
                <span className="text-sm">Filtros</span>
              </button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-[400px]">
              <SheetHeader>
                <SheetTitle>Filtrar por tipo de material</SheetTitle>
              </SheetHeader>
              <div className="space-y-4 mt-6">
                <div className="flex items-center gap-3">
                  <Checkbox
                    id="plastic"
                    checked={filters.plastic}
                    onCheckedChange={(checked) =>
                      setFilters({ ...filters, plastic: !!checked })
                    }
                  />
                  <label htmlFor="plastic" className="cursor-pointer">
                    Plástico
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox
                    id="glass"
                    checked={filters.glass}
                    onCheckedChange={(checked) =>
                      setFilters({ ...filters, glass: !!checked })
                    }
                  />
                  <label htmlFor="glass" className="cursor-pointer">
                    Vidro
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox
                    id="metal"
                    checked={filters.metal}
                    onCheckedChange={(checked) =>
                      setFilters({ ...filters, metal: !!checked })
                    }
                  />
                  <label htmlFor="metal" className="cursor-pointer">
                    Metal
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox
                    id="paper"
                    checked={filters.paper}
                    onCheckedChange={(checked) =>
                      setFilters({ ...filters, paper: !!checked })
                    }
                  />
                  <label htmlFor="paper" className="cursor-pointer">
                    Papel
                  </label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox
                    id="isopor"
                    checked={filters.isopor}
                    onCheckedChange={(checked) =>
                      setFilters({ ...filters, isopor: !!checked })
                    }
                  />
                  <label htmlFor="isopor" className="cursor-pointer">
                    Isopor
                  </label>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Map Area */}
      <div className="flex-1 relative bg-gray-200">
        {/* Simulated Map */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full">
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="gray" strokeWidth="1"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* User Location */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
              <div className="absolute inset-0 w-4 h-4 bg-blue-400 rounded-full animate-ping"></div>
            </div>
          </div>

          {/* Collection Points */}
          <div className="absolute top-1/3 left-1/3">
            <button
              onClick={() => setSelectedPoint(collectionPoints[0])}
              className="transform hover:scale-110 transition-transform"
            >
              <MapPin className="w-10 h-10 text-green-600 fill-green-200" />
            </button>
          </div>
          <div className="absolute top-1/4 right-1/3">
            <button
              onClick={() => setSelectedPoint(collectionPoints[1])}
              className="transform hover:scale-110 transition-transform"
            >
              <MapPin className="w-10 h-10 text-green-600 fill-green-200" />
            </button>
          </div>
          <div className="absolute bottom-1/3 left-1/2">
            <button
              onClick={() => setSelectedPoint(collectionPoints[2])}
              className="transform hover:scale-110 transition-transform"
            >
              <MapPin className="w-10 h-10 text-orange-600 fill-orange-200" />
            </button>
          </div>
        </div>

        {/* Current Location Button */}
        <button className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-lg">
          <Navigation className="w-6 h-6 text-green-600" />
        </button>

        {/* Selected Point Info */}
        {selectedPoint && (
          <div className="absolute bottom-20 left-0 right-0 p-4">
            <Card className="shadow-xl">
              <CardContent className="p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-gray-900">{selectedPoint.name}</h3>
                    <p className="text-gray-600 text-sm">{selectedPoint.address}</p>
                  </div>
                  <button
                    onClick={() => setSelectedPoint(null)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                </div>

                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1 text-gray-600">
                    <Navigation className="w-4 h-4" />
                    <span>{selectedPoint.distance}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{selectedPoint.hours}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {selectedPoint.materials.map((material) => (
                    <span
                      key={material}
                      className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs"
                    >
                      {material}
                    </span>
                  ))}
                </div>

                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <Navigation className="w-4 h-4 mr-2" />
                  Como chegar
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-gray-200 p-4 safe-area-bottom">
        <div className="flex justify-around items-center max-w-md mx-auto">
          <button
            onClick={() => onNavigate('dashboard')}
            className="flex flex-col items-center gap-1 text-gray-400"
          >
            <Home className="w-6 h-6" />
            <span className="text-xs">Início</span>
          </button>
          <button
            onClick={() => onNavigate('map')}
            className="flex flex-col items-center gap-1 text-green-600"
          >
            <MapIcon className="w-6 h-6" />
            <span className="text-xs">Mapa</span>
          </button>
          <button
            onClick={() => onNavigate('scanner')}
            className="flex flex-col items-center gap-1 text-gray-400"
          >
            <Scan className="w-6 h-6" />
            <span className="text-xs">Scanner</span>
          </button>
          <button
            onClick={() => onNavigate('profile')}
            className="flex flex-col items-center gap-1 text-gray-400"
          >
            <User className="w-6 h-6" />
            <span className="text-xs">Perfil</span>
          </button>
        </div>
      </div>
    </div>
  );
}
