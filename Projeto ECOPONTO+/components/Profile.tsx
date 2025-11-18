import { ArrowLeft, Trophy, Award, Star, TrendingUp, Home, Map, Scan, User, LogOut } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Progress } from './ui/progress';
import { Button } from './ui/button';
import type { Screen } from '../App';

interface ProfileProps {
  onNavigate: (screen: Screen) => void;
  userName: string;
  onLogout: () => void;
}

export function Profile({ onNavigate, userName, onLogout }: ProfileProps) {
  const achievements = [
    { id: 1, name: 'Primeiro Passo', description: 'Reciclou o primeiro item', icon: '🌱', unlocked: true },
    { id: 2, name: 'Eco Guerreiro', description: 'Reciclou 10 itens', icon: '⚡', unlocked: true },
    { id: 3, name: 'Protetor Verde', description: 'Reciclou 50 itens', icon: '🛡️', unlocked: true },
    { id: 4, name: 'Mestre Reciclador', description: 'Reciclou 100 itens', icon: '👑', unlocked: false },
    { id: 5, name: 'Herói do Planeta', description: 'Reciclou 500 itens', icon: '🌍', unlocked: false },
    { id: 6, name: 'Lenda Verde', description: 'Reciclou 1000 itens', icon: '⭐', unlocked: false },
  ];

  const leaderboard = [
    { rank: 1, name: 'Maria Silva', points: 2450, avatar: '👩' },
    { rank: 2, name: 'João Santos', points: 2180, avatar: '👨' },
    { rank: 3, name: 'Você', points: 1750, avatar: '😊', isCurrentUser: true },
    { rank: 4, name: 'Ana Costa', points: 1520, avatar: '👧' },
    { rank: 5, name: 'Pedro Lima', points: 1340, avatar: '🧑' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Header */}
      <div className="bg-green-600 text-white p-4">
        <button
          onClick={() => onNavigate('dashboard')}
          className="flex items-center gap-2 text-white mb-4"
        >
          <ArrowLeft className="w-6 h-6" />
          <span>Voltar</span>
        </button>

        {/* Profile Info */}
        <div className="flex items-center gap-4 pb-4">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-4xl">
            😊
          </div>
          <div>
            <h2 className="text-white">{userName}</h2>
            <p className="text-green-100 text-sm">Membro desde Nov 2025</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 space-y-6 pb-24">
        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3">
          <Card>
            <CardContent className="p-4 text-center">
              <TrendingUp className="w-6 h-6 mx-auto mb-2 text-green-600" />
              <p className="text-gray-900">5kg</p>
              <p className="text-xs text-gray-500">Reciclado</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Trophy className="w-6 h-6 mx-auto mb-2 text-yellow-600" />
              <p className="text-gray-900">1,750</p>
              <p className="text-xs text-gray-500">Pontos</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Award className="w-6 h-6 mx-auto mb-2 text-blue-600" />
              <p className="text-gray-900">3</p>
              <p className="text-xs text-gray-500">Medalhas</p>
            </CardContent>
          </Card>
        </div>

        {/* Level Progress */}
        <Card>
          <CardContent className="p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="text-gray-900">Nível 3</span>
              </div>
              <span className="text-gray-600 text-sm">750 / 2000 XP</span>
            </div>
            <Progress value={37.5} className="h-2" />
            <p className="text-gray-500 text-xs">1250 XP para o próximo nível</p>
          </CardContent>
        </Card>

        {/* Achievements */}
        <div>
          <h3 className="text-gray-900 mb-3">Conquistas</h3>
          <div className="grid grid-cols-3 gap-3">
            {achievements.map((achievement) => (
              <Card
                key={achievement.id}
                className={achievement.unlocked ? 'border-green-200 bg-white' : 'bg-gray-100 opacity-60'}
              >
                <CardContent className="p-4 text-center">
                  <div className="text-4xl mb-2">{achievement.icon}</div>
                  <p className="text-xs text-gray-900">{achievement.name}</p>
                  <p className="text-xs text-gray-500 mt-1">{achievement.description}</p>
                  {achievement.unlocked && (
                    <div className="mt-2 inline-flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                      ✓ Desbloqueada
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Leaderboard */}
        <div>
          <h3 className="text-gray-900 mb-3">Ranking Mensal</h3>
          <Card>
            <CardContent className="p-4 space-y-3">
              {leaderboard.map((user) => (
                <div
                  key={user.rank}
                  className={`flex items-center gap-3 p-3 rounded-lg ${
                    user.isCurrentUser ? 'bg-green-100' : 'bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white">
                    <span className="text-sm">{user.rank}</span>
                  </div>
                  <div className="text-2xl">{user.avatar}</div>
                  <div className="flex-1">
                    <p className="text-gray-900 text-sm">{user.name}</p>
                    <p className="text-gray-500 text-xs">{user.points} pontos</p>
                  </div>
                  {user.rank <= 3 && (
                    <Trophy
                      className={`w-5 h-5 ${
                        user.rank === 1
                          ? 'text-yellow-500'
                          : user.rank === 2
                          ? 'text-gray-400'
                          : 'text-amber-700'
                      }`}
                    />
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Logout Button */}
        <Button
          onClick={onLogout}
          variant="outline"
          className="w-full border-2 border-red-600 text-red-600 hover:bg-red-50"
        >
          <LogOut className="w-5 h-5 mr-2" />
          Sair da Conta
        </Button>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-gray-200 p-4 safe-area-bottom fixed bottom-0 left-0 right-0">
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
            className="flex flex-col items-center gap-1 text-green-600"
          >
            <User className="w-6 h-6" />
            <span className="text-xs">Perfil</span>
          </button>
        </div>
      </div>
    </div>
  );
}