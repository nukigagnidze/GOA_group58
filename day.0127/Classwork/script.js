function manualMap(array, callback) {
      const result = [];
      for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
      }
      return result;
    }

    // ორიგინალი მასივი
    const numbers = [1, 2, 3, 4, 5];

    // manualMap-ის გამოყენება
    const doubled = manualMap(numbers, function(num) {
      return num * 2;
    });

    // შედეგის ჩვენება გვერდზე
    document.getElementById("original").textContent = numbers.join(", ");
    document.getElementById("mapped").textContent = doubled.join(", ");