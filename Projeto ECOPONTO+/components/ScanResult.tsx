import { ArrowLeft, MapPin, CheckCircle, Info } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import type { Screen } from '../App';

interface ScanResultProps {
  material: { type: string; instructions: string };
  onNavigate: (screen: Screen) => void;
}

export function ScanResult({ material, onNavigate }: ScanResultProps) {
  const getMaterialIcon = (type: string) => {
    if (type.includes('Plástico')) return '♻️';
    if (type.includes('Vidro')) return '🔷';
    if (type.includes('Metal')) return '🔧';
    if (type.includes('Isopor')) return '📦';
    return '♻️';
  };

  const getMaterialColor = (type: string) => {
    if (type.includes('Plástico')) return 'bg-red-100 text-red-700 border-red-200';
    if (type.includes('Vidro')) return 'bg-green-100 text-green-700 border-green-200';
    if (type.includes('Metal')) return 'bg-yellow-100 text-yellow-700 border-yellow-200';
    if (type.includes('Isopor')) return 'bg-blue-100 text-blue-700 border-blue-200';
    return 'bg-gray-100 text-gray-700 border-gray-200';
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Header */}
      <div className="bg-green-600 text-white p-4">
        <button
          onClick={() => onNavigate('dashboard')}
          className="flex items-center gap-2 text-white"
        >
          <ArrowLeft className="w-6 h-6" />
          <span>Voltar</span>
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 space-y-6">
        {/* Success Message */}
        <div className="flex items-center justify-center gap-2 text-green-600">
          <CheckCircle className="w-6 h-6" />
          <span>Material Identificado!</span>
        </div>

        {/* Material Card */}
        <Card className="border-2 shadow-lg">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-4">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl ${getMaterialColor(material.type)}`}>
                {getMaterialIcon(material.type)}
              </div>
              <div className="flex-1">
                <h2 className="text-gray-900">{material.type}</h2>
                <p className="text-sm text-gray-500">Material reciclável</p>
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-gray-900 mb-2">Como descartar:</h3>
                  <p className="text-gray-700">{material.instructions}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tips Card */}
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4">
            <h3 className="text-blue-900 mb-2">💡 Dica:</h3>
            <p className="text-blue-800 text-sm">
              Limpe bem o material antes de descartar. Isso facilita a reciclagem e evita contaminação!
            </p>
          </CardContent>
        </Card>

        {/* Find Location Button */}
        <Button
          onClick={() => onNavigate('map')}
          className="w-full h-14 bg-green-600 hover:bg-green-700 text-white rounded-xl shadow-lg"
        >
          <MapPin className="w-5 h-5 mr-2" />
          Encontrar local mais próximo
        </Button>

        {/* Secondary Action */}
        <Button
          onClick={() => onNavigate('scanner')}
          variant="outline"
          className="w-full h-12 border-2 border-green-600 text-green-600 hover:bg-green-50 rounded-xl"
        >
          Escanear outro item
        </Button>
      </div>
    </div>
  );
}
