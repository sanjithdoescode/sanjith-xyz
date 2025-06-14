
import { useEffect, useState } from 'react';

const AsciiBackground = () => {
  const [grid, setGrid] = useState<string[][]>([]);

  useEffect(() => {
    const chars = ['0', '1', '/', '\\', '|', '-', '+', '*', '~', '.', ':', ';'];
    const rows = 30;
    const cols = 80;

    const generateGrid = () => {
      return Array.from({ length: rows }, () =>
        Array.from({ length: cols }, () => chars[Math.floor(Math.random() * chars.length)])
      );
    };

    setGrid(generateGrid());

    const interval = setInterval(() => {
      setGrid(currentGrid => {
        const newGrid = [...currentGrid];
        // Randomly update a few characters
        for (let i = 0; i < 5; i++) {
          const row = Math.floor(Math.random() * rows);
          const col = Math.floor(Math.random() * cols);
          newGrid[row][col] = chars[Math.floor(Math.random() * chars.length)];
        }
        return newGrid;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="code-rain">
      <pre className="ascii-grid">
        {grid.map((row, i) => (
          <div key={i}>{row.join('')}</div>
        ))}
      </pre>
    </div>
  );
};

export default AsciiBackground;
