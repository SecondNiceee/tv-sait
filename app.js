// app.js
const { exec } = require('child_process');
const path = require('path');

process.chdir(__dirname);

console.log('Текущая директория:', process.cwd());

// Убедимся, что pnpm установлен
const setup = exec('npm install -g pnpm && pnpm install && pnpm run build', {
  stdio: 'inherit',
  env: process.env
});

setup.on('close', (code) => {
  if (code !== 0) {
    console.error('Ошибка установки или сборки');
    process.exit(1);
  }

  console.log('Сборка завершена. Запускаем Next.js...');
  const port = process.env.PORT || 3000;
  const server = exec(`pnpm run start -p ${port}`, {
    stdio: 'inherit',
    env: { ...process.env, PORT: port.toString() }
  });

  server.on('close', (code) => {
    console.error(`Next.js завершился с кодом: ${code}`);
  });
});
