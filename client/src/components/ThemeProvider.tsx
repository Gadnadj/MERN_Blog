import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const theme = useSelector((state: RootState) => state.theme.theme); // Accédez directement au theme

  // Appliquez le thème à l'élément body
  React.useEffect(() => {
    document.body.className = theme; // Change la classe du body selon le thème sélectionné
  }, [theme]);

  return (
    <div className="bg-white text-gray-700 dark:text-gray-200 dark:bg-dark-bg">
      {children}
    </div>
  );
};

export default ThemeProvider;
