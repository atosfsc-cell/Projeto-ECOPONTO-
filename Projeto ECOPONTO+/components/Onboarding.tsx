import { useState } from 'react';
import { Scan, MapPin, Trophy, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

interface OnboardingProps {
  onComplete: () => void;
}

export function Onboarding({ onComplete }: OnboardingProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      icon: Scan,
      title: 'Escanear Itens',
      description: 'Use a câmera para identificar materiais e saber como reciclá-los corretamente',
      color: 'text-green-600',
      bg: 'bg-green-100',
    },
    {
      icon: MapPin,
      title: 'Encontrar Pontos',
      description: 'Localize facilmente os pontos de coleta mais próximos para cada tipo de material',
      color: 'text-blue-600',
      bg: 'bg-blue-100',
    },
    {
      icon: Trophy,
      title: 'Ganhar Pontos',
      description: 'Acumule pontos, desbloqueie conquistas e ajude o planeta',
      color: 'text-yellow-600',
      bg: 'bg-yellow-100',
    },
  ];

  const currentSlideData = slides[currentSlide];
  const Icon = currentSlideData.icon;

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 p-6">
      <div className="flex-1 flex flex-col items-center justify-center max-w-md w-full">
        <div className={`${currentSlideData.bg} rounded-full p-8 mb-8`}>
          <Icon className={`w-24 h-24 ${currentSlideData.color}`} />
        </div>
        
        <h1 className="text-center text-green-900 mb-4">
          {currentSlideData.title}
        </h1>
        
        <p className="text-center text-gray-600 mb-8">
          {currentSlideData.description}
        </p>

        <div className="flex gap-2 mb-12">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? 'w-8 bg-green-600'
                  : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="w-full max-w-md">
        <Button
          onClick={handleNext}
          className="w-full bg-green-600 hover:bg-green-700 text-white"
          size="lg"
        >
          {currentSlide < slides.length - 1 ? 'Próximo' : 'Começar'}
          <ChevronRight className="w-5 h-5 ml-2" />
        </Button>
        
        {currentSlide < slides.length - 1 && (
          <Button
            onClick={onComplete}
            variant="ghost"
            className="w-full mt-4 text-gray-600"
          >
            Pular
          </Button>
        )}
      </div>
    </div>
  );
}
