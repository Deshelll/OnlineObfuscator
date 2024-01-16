// Функция addSemicolons, адаптированная для работы с текстом
function addSemicolons(code) {
  return code.replace(/}\s*(?=\w)(?!(\s*else|\s*catch))/g, '}; ');
}

// Обработчик события для кнопки "Обфусцировать"
document.getElementById('obfuscateButton').addEventListener('click', function() {
  // Получаем входной код из текстового поля
  var inputCode = document.getElementById('inputCode').value;
  
  // Применяем функцию обфускации к входному коду
  var obfuscatedCode = addSemicolons(inputCode);
  
  document.getElementById('outputCode').value = obfuscatedCode;
});
