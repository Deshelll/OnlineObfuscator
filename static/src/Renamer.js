// Функция для генерации случайных имен
function generateRandomName(length) {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let randomName = '';
  for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomName += characters.charAt(randomIndex);
  }
  return randomName;
}

// Функция для переименования переменных в коде
function renameVariablesInCode(code) {
  const variableMap = {};
  const variableRegex = /\b(?:const|let|var)\s+([a-zA-Z_]\w*)\s*=\s*([^;]+)\s*;/g;
  let match;
  
  while ((match = variableRegex.exec(code)) !== null) {
      const originalName = match[1];

      if (!variableMap.hasOwnProperty(originalName)) {
          const newName = generateRandomName(8);
          variableMap[originalName] = newName;
          code = code.replace(new RegExp(`\\b${originalName}\\b`, 'g'), newName);
      }
  }

  console.log('Переменные успешно переименованы:');
  console.log(variableMap);

  return code;
}

// Обработчик события для кнопки "Обфусцировать"
document.getElementById('obfuscateButton').addEventListener('click', function() {
  var inputCode = document.getElementById('inputCode').value;

  // Переименовываем переменные в коде
  var obfuscatedCode = renameVariablesInCode(inputCode);


  // Выводим результат обфускации в поле для вывода кода
  document.getElementById('outputCode').value = obfuscatedCode;
});
