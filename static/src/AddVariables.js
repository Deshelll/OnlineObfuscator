// Функция для добавления новых переменных в код
function addVariablesToCode(code, variables) {
  variables.forEach(({ name, value }) => {
      const existingVariableRegex = new RegExp(`\\bconst\\s+${name}\\s*=\\s*[^;]+\\s*;`, 'g');

      if (existingVariableRegex.test(code)) {
          const randomSuffix = Math.floor(Math.random() * 1000);
          value = `${value}_${randomSuffix}`;
          console.log(`К переменной ${name} добавлено случайное число: ${randomSuffix}`);
      }

      code = code.replace(existingVariableRegex, '');
      code += `\nconst ${name} = ${JSON.stringify(value)};`;
      console.log(`Переменная ${name} добавлена в код.`);
  });

  return code;
}

// Обработчик события для кнопки "Обфусцировать"
document.getElementById('obfuscateButton').addEventListener('click', function() {
  var inputCode = document.getElementById('inputCode').value;
    // Указываем переменные, которые нужно добавить
    const variablesToAdd = [
      { name: 'count', value: 0 },
      { name: 'path', value: 'src/Test.js' },
      { name: 'total', value: 0 }
  ];

  // Проверяем, выбран ли чекбокс
  if (document.getElementById('addVariablesCheckbox').checked) {

    // Вызываем функцию addVariablesToCode с обоими аргументами
    inputCode = addVariablesToCode(inputCode, variablesToAdd);
  }

  // Выводим результат в поле для вывода кода
  document.getElementById('outputCode').value = inputCode;
});
