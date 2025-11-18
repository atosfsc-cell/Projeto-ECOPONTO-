import { Scan, Map, Home, User, Leaf, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import type { Screen } from '../App';

interface DashboardProps {
  onNavigate: (screen: Screen) => void;
  userName: string;
}

export function Dashboard({ onNavigate, userName }: DashboardProps) {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Header */}
      <div className="bg-green-600 text-white p-6 pb-8 rounded-b-3xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-white">ECOPONTO+</h1>
            <p className="text-green-100 text-sm">Olá, {userName}! 👋</p>
          </div>
          <Leaf className="w-8 h-8" />
        </div>

        {/* Impact Card */}
        <Card className="bg-white/95 border-0 shadow-lg">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 rounded-full p-3">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-green-900">Você já reciclou</p>
                <p className="text-green-600">5kg este mês!</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Actions */}
      <div className="flex-1 p-6 space-y-4">
        <h2 className="text-gray-900">Ações Rápidas</h2>

        <Button
          onClick={() => onNavigate('scanner')}
          className="w-full h-32 bg-green-600 hover:bg-green-700 text-white rounded-2xl shadow-lg"
        >
          <div className="flex flex-col items-center gap-2">
            <Scan className="w-12 h-12" />
            <span className="text-white">Escanear Item</span>
          </div>
        </Button>

        <Button
          onClick={() => onNavigate('map')}
          className="w-full h-32 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl shadow-lg"
        >
          <div className="flex flex-col items-center gap-2">
            <Map className="w-12 h-12" />
            <span className="text-white">Ver Mapa</span>
          </div>
        </Button>

        {/* Recent Activity */}
        <div className="pt-4">
          <h3 className="text-gray-900 mb-3">Atividade Recente</h3>
          <Card>
            <CardContent className="p-4 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <p className="text-gray-700 text-sm">Plástico PET reciclado - Hoje</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <p className="text-gray-700 text-sm">Vidro reciclado - Ontem</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <p className="text-gray-700 text-sm">Metal reciclado - 2 dias atrás</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-gray-200 p-4 safe-area-bottom">
        <div className="flex justify-around items-center max-w-md mx-auto">
          <button
            onClick={() => onNavigate('dashboard')}
            className="flex flex-col items-center gap-1 text-green-600"
          >
            <Home className="w-6 h-6" />
            <span className="text-xs">Início</span>
          </button>
          <button
            onClick={() => onNavigate('map')}
            className="flex flex-col items-center gap-1 text-gray-400"
          >
            <Map className="w-6 h-6" />
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