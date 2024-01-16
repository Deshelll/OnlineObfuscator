// Функция для удаления лишних пробелов и переносов строк из кода
function removeSpacesBetweenLines(code) {
  // Удаляем все пробелы и переносы строк
  code = code.replace(/\s+/g, ' ');

  // Добавляем точку с запятой после закрывающих фигурных скобок, если они не следуют за ключевыми словами else и catch
  code = code.replace(/}\s*(?=\w)(?!(\s*else|\s*catch))/g, '}; ');

  return code;
}


// Обработчик события DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
  // Обработчик события для кнопки "Обфусцировать"
  document.getElementById('obfuscateButton').addEventListener('click', function() {
      var inputCode = document.getElementById('inputCode').value;

      // Проверяем, выбран ли чекбокс "Удалять пробелы"
      if (document.getElementById('removeSpacesCheckbox').checked) {
          inputCode = removeSpacesBetweenLines(inputCode);
      }

      // Выводим результат обфускации в поле для вывода кода
      document.getElementById('outputCode').value = inputCode;
  });
});
