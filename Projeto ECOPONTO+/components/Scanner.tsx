import { useState, useEffect } from 'react';
import { ArrowLeft, Camera, Zap } from 'lucide-react';
import { Button } from './ui/button';
import type { Screen } from '../App';

interface ScannerProps {
  onScan: (material: { type: string; instructions: string }) => void;
  onNavigate: (screen: Screen) => void;
}

export function Scanner({ onScan, onNavigate }: ScannerProps) {
  const [isScanning, setIsScanning] = useState(false);

  const materials = [
    {
      type: 'Isopor (PS)',
      instructions: 'Descarte em pontos de coleta específicos para isopor',
    },
    {
      type: 'Plástico PET',
      instructions: 'Lave e descarte em lixeiras de reciclagem ou PEVs',
    },
    {
      type: 'Vidro',
      instructions: 'Descarte em pontos de coleta para vidro',
    },
    {
      type: 'Metal (Alumínio)',
      instructions: 'Limpe e descarte em pontos de reciclagem de metal',
    },
  ];

  const handleScan = () => {
    setIsScanning(true);
    
    // Simula o processo de scanning
    setTimeout(() => {
      const randomMaterial = materials[Math.floor(Math.random() * materials.length)];
      onScan(randomMaterial);
      setIsScanning(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 p-4 bg-gradient-to-b from-black/60 to-transparent">
        <button
          onClick={() => onNavigate('dashboard')}
          className="flex items-center gap-2 text-white"
        >
          <ArrowLeft className="w-6 h-6" />
          <span>Voltar</span>
        </button>
      </div>

      {/* Camera View */}
      <div className="flex-1 relative flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-64 h-64">
            {/* Scanning Frame */}
            <div className="absolute inset-0 border-4 border-green-500 rounded-3xl opacity-80">
              <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-white rounded-tl-3xl"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-white rounded-tr-3xl"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-white rounded-bl-3xl"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-white rounded-br-3xl"></div>
            </div>

            {/* Scanning Animation */}
            {isScanning && (
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <div className="absolute w-full h-1 bg-green-400 animate-pulse scanning-line"></div>
              </div>
            )}
          </div>
        </div>

        <Camera className="absolute w-16 h-16 text-white/20" />
      </div>

      {/* Instructions */}
      <div className="absolute bottom-32 left-0 right-0 px-6">
        <div className="bg-black/60 backdrop-blur-lg rounded-2xl p-4 text-white text-center">
          <Zap className="w-6 h-6 mx-auto mb-2 text-green-400" />
          <p className="text-sm">
            {isScanning
              ? 'Identificando material...'
              : 'Aponte a câmera para a embalagem'}
          </p>
        </div>
      </div>

      {/* Scan Button */}
      <div className="absolute bottom-0 left-0 right-0 p-6 pb-8">
        <Button
          onClick={handleScan}
          disabled={isScanning}
          className="w-full h-16 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg disabled:opacity-50"
        >
          {isScanning ? (
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Escaneando...
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Camera className="w-6 h-6" />
              Escanear Agora
            </div>
          )}
        </Button>
      </div>

      <style>{`
        @keyframes scanning {
          0% { top: 0; }
          50% { top: 100%; }
          100% { top: 0; }
        }
        .scanning-line {
          animation: scanning 2s linear infinite;
        }
      `}</style>
    </div>
  );
}
