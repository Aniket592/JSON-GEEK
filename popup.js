document.getElementById("beautifyBtn").addEventListener("click", () => {
    const inputElement = document.getElementById("jsonInput");
    const jsonInput = inputElement.value.trim();
    try {
      const parsedJSON = JSON.parse(jsonInput);
      const beautifiedJSON = JSON.stringify(parsedJSON, null, 2);
      inputElement.value = beautifiedJSON;
    } catch (error) {
      console.error("Invalid JSON input:", error.message);
    }
  });
  
  document.getElementById("parseBtn").addEventListener("click", () => {
    const inputElement = document.getElementById("jsonInput");
    const jsonInput = inputElement.value.trim();
    try {
      const parsedJSON = JSON.parse(jsonInput);
      const parsedJSONString = JSON.stringify(parsedJSON, null, 2);
      document.getElementById("result").textContent = parsedJSONString;
    } catch (error) {
      console.error("Invalid JSON input:", error.message);
    }
  });
  
  document.getElementById("compareBtn").addEventListener("click", () => {
    const inputElement = document.getElementById("jsonInput");
    const compareInputElement = document.getElementById("compareInput");
    const jsonInput = inputElement.value.trim();
    const compareJsonInput = compareInputElement.value.trim();
    try {
      const parsedJSON = JSON.parse(jsonInput);
      const compareParsedJSON = JSON.parse(compareJsonInput);
      const isEqual = JSON.stringify(parsedJSON) === JSON.stringify(compareParsedJSON);
      document.getElementById("result").textContent = isEqual ? "JSONs are equal." : "JSONs are not equal.";
    } catch (error) {
      console.error("Invalid JSON input:", error.message);
    }
  });
  