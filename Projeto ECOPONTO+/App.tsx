import { useState } from 'react';
import { Onboarding } from './components/Onboarding';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { Dashboard } from './components/Dashboard';
import { Scanner } from './components/Scanner';
import { ScanResult } from './components/ScanResult';
import { MapView } from './components/MapView';
import { Profile } from './components/Profile';

export type Screen = 'onboarding' | 'login' | 'signup' | 'dashboard' | 'scanner' | 'scanResult' | 'map' | 'profile';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('onboarding');
  const [scannedMaterial, setScannedMaterial] = useState({ type: '', instructions: '' });
  const [accessToken, setAccessToken] = useState<string>('');
  const [userName, setUserName] = useState<string>('Usuário');

  const handleScan = (material: { type: string; instructions: string }) => {
    setScannedMaterial(material);
    setCurrentScreen('scanResult');
  };

  const handleLoginSuccess = (token: string, name: string) => {
    setAccessToken(token);
    setUserName(name);
    setCurrentScreen('dashboard');
  };

  const handleSignupSuccess = () => {
    setCurrentScreen('login');
  };

  const handleLogout = () => {
    setAccessToken('');
    setUserName('Usuário');
    setCurrentScreen('login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {currentScreen === 'onboarding' && (
        <Onboarding onComplete={() => setCurrentScreen('login')} />
      )}
      {currentScreen === 'login' && (
        <Login
          onLoginSuccess={handleLoginSuccess}
          onNavigateToSignup={() => setCurrentScreen('signup')}
        />
      )}
      {currentScreen === 'signup' && (
        <Signup
          onSignupSuccess={handleSignupSuccess}
          onNavigateToLogin={() => setCurrentScreen('login')}
        />
      )}
      {currentScreen === 'dashboard' && (
        <Dashboard onNavigate={setCurrentScreen} userName={userName} />
      )}
      {currentScreen === 'scanner' && (
        <Scanner onScan={handleScan} onNavigate={setCurrentScreen} />
      )}
      {currentScreen === 'scanResult' && (
        <ScanResult
          material={scannedMaterial}
          onNavigate={setCurrentScreen}
        />
      )}
      {currentScreen === 'map' && (
        <MapView onNavigate={setCurrentScreen} />
      )}
      {currentScreen === 'profile' && (
        <Profile onNavigate={setCurrentScreen} userName={userName} onLogout={handleLogout} />
      )}
    </div>
  );
}