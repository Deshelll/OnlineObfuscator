document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('obfuscateButton').addEventListener('click', function() {
      var inputCode = document.getElementById('inputCode').value;
  
      // Добавление переменных
      if (document.getElementById('addVariablesCheckbox').checked) {
        const variablesToAdd = [
          { name: 'count', value: 0 },
          { name: 'path', value: 'src/Test.js' },
          { name: 'total', value: 0 }
        ];
        inputCode = addVariablesToCode(inputCode, variablesToAdd);
      }
  
      // Удаление комментариев
      if (document.getElementById('removeCommentsCheckbox').checked) {
        inputCode = removeCommentsFromCode(inputCode);
      }
  
      // Удаление пробелов
      if (document.getElementById('removeSpacesCheckbox').checked) {
        inputCode = removeSpacesBetweenLines(inputCode);
      }
  
      // Переименование переменных
      if (document.getElementById('renameVariablesCheckbox').checked) {
        inputCode = renameVariablesInCode(inputCode);
      }
  
      // Выводим результат в поле для вывода кода
      document.getElementById('outputCode').value = inputCode;
    });
  });
  
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

  // Функция для удаления комментариев из кода
function removeCommentsFromCode(code) {
    // Удаляем однострочные комментарии
    code = code.replace(/\/\/.*?(\r\n|\n|$)/g, '');
    // Удаляем многострочные комментарии
    code = code.replace(/\/\*[\s\S]*?\*\//g, '');
    return code;
  }

  // Функция для удаления лишних пробелов и переносов строк из кода
function removeSpacesBetweenLines(code) {
    // Удаляем все пробелы и переносы строк
    code = code.replace(/\s+/g, ' ');
  
    // Добавляем точку с запятой после закрывающих фигурных скобок, если они не следуют за ключевыми словами else и catch
    code = code.replace(/}\s*(?=\w)(?!(\s*else|\s*catch))/g, '}; ');
  
    return code;
  }
  
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