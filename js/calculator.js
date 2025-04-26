// Validate that all entered numbers are between 0 and 100 (if not empty)
function validateInputs() {
    const inputs = document.querySelectorAll('input');
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value !== "") {
        const value = parseFloat(inputs[i].value);
        if (value < 0 || value > 100) {
          alert("هيڤیە ژمارە بەینی 0 و 100 بنڤیسە " );
          return false;
        }
      }
    }
    return true;
  }
  
  function calculate() {
    // Validate inputs first
    if (!validateInputs()) return;
  
    const inputs = document.querySelectorAll('input');
    const results = [];
    
    // Subject names array
    const subjects = ["بیركاری", "زانست", "كۆمەڵایەتی", "كوردی", "ئینگلیزی"];
    
    // Process first 5 inputs
    for (let i = 0; i < 5; i++) {
      const value = parseFloat(inputs[i].value);
      if (!isNaN(value)) {
        const calculation = -1 * (((0.4 * value) - 50) / 0.6);
        results.push({
          grade: subjects[i],
          input: value.toFixed(1),
          result: Math.ceil(calculation)
        });
      }
    }
    
    // Process Arabic and Islamic inputs (fields 6 and 7)
    const value6 = parseFloat(inputs[5].value);
    const value7 = parseFloat(inputs[6].value);
    
    if (inputs[5].value !== "" || inputs[6].value !== "") {
      const val6 = isNaN(value6) ? 0 : value6;
      const val7 = isNaN(value7) ? 0 : value7;
      const combinedValue = (val6 * 0.8) + (val7 * 0.2);
      const combinedCalculation = -1 * (((combinedValue * 0.4) - 50) / 0.6);
      
      results.push({
        grade: "عەرەبی و ئیسلامی",
        input: `${val6.toFixed(1)} و ${val7.toFixed(1)}`,
        result: Math.ceil(combinedCalculation)
      });
    }
  
    showResults(results);
  }
  
  function showResults(data) {
    const resultsBody = document.querySelector('#resultsTable tbody');
    resultsBody.innerHTML = '';
    data.forEach(item => {
      const row = `
        <tr>
          <td>${item.grade}</td>
          <td>${item.input}</td>
          <td>${item.result}</td>
        </tr>
      `;
      resultsBody.innerHTML += row;
    });
    document.getElementById('inputContainer').style.display = 'none';
    document.getElementById('resultsContainer').style.display = 'block';
  }
  
  function showInput() {
    document.getElementById('inputContainer').style.display = 'block';
    document.getElementById('resultsContainer').style.display = 'none';
  }
  
  function resetInputs() {
    document.querySelectorAll('input').forEach(input => {
      input.value = '';
    });
    showInput();
  }
  
  // Activate field animations
  document.querySelectorAll('.input-group').forEach((el, index) => {
    el.style.animationDelay = `${0.2 + (index * 0.1)}s`;
  });
  