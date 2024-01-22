import { useState } from 'react';
import { HousesMainPage } from './pages/HousesMainPage/HousesMainPage';
import { IsLoadingContext } from './context';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <IsLoadingContext.Provider value={{ isLoading, setIsLoading }}>
      <HousesMainPage />
    </IsLoadingContext.Provider>
  );
}

export default App;
