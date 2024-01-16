// Функция для удаления комментариев из кода
function removeCommentsFromCode(code) {
  // Удаляем однострочные комментарии
  code = code.replace(/\/\/.*?(\r\n|\n|$)/g, '');
  // Удаляем многострочные комментарии
  code = code.replace(/\/\*[\s\S]*?\*\//g, '');
  return code;
}

// Обработчик события для кнопки "Обфусцировать"
document.getElementById('obfuscateButton').addEventListener('click', function() {
  var inputCode = document.getElementById('inputCode').value;
  
  // Проверяем, выбран ли чекбокс "Удалять комментарии"
  if (document.getElementById('removeCommentsCheckbox').checked) {
    // Удаляем комментарии из кода
    inputCode = removeCommentsFromCode(inputCode);
  }

  // Выводим результат обфускации в поле для вывода кода
  document.getElementById('outputCode').value = inputCode;
});