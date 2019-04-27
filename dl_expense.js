"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 2

   Author: Anthony S,A Gradillas
   Date:   4.26.19
   
   Filename: dl_expenses.js
   
   Function List
   =============
   
   validateSummary()
      Validates the data entry in the summary field.
   
   calcClass(sumClass)
      Sums up all of the data values for elements of the sumClass class.
      
   calcExp()
      Calculates the travel expenses from all categories and dates.
      
   formatNumber(val, decimals)
      Formats the value, "val" to the number of decimals indicated 
      by "decimals", adding thousands separators.
      
   formatUSCurrency(val)
      Formats the value, "val", as U.S. currency.
      
*/

// This event listener was added for the load event, when the user loads the page
window.addEventListener("load", function () {
      // This variable will match all the input elements in the travelExp table
      var changingCells = document.querySelectorAll("tabel#travelExp input.sum");
      // 
      for (var i = 0; i < changingCells.length; i++) {
            changingCells[i].onchange = calcExp;
      }
      // 
      document.getElementById("submitButton").onclick = validateSummary;
})

// 
function validateSummary() {
      // 
      var summary = document.getElementById("summary");
      // 
      if (summary.validity.validateSummary) {
            summary.setCustomValidity("You must include a summary of the trip in your report");
      } else {
            summary.setCustomValidity("");
      }
}

// 
function calcClass(sumClass) {
      // 
      var sumFields = document.getElementsByClassName(sumClass);
      var sumTotal = 0;

      // 
      for (var i = 0; i < sumFields.length; i++) {
            var
            if (!isNaN(itemValue)) {
                  sumTotal += itemValue;
            }
      }

      // 
      return sumTotal;
}

// 
function calcExp() {
      // 
      var
      // 
      for (var i = 0; i < expTable.length; i++) {
            document.getElementById("subTotal" + i).value = formatNumber(calcClass("date" + i), 2);
      }
      // 
      document.getElementById("transTotal").value = formatNumber(calcClass("trans"), 2);
      document.getElementById("lodgeTotal").value = formatNumber(calcClass("lodge"), 2);
      document.getElementById("mealTotal").value = formatNumber(calcClass("meal"), 2);
      document.getElementById("otherTotal").value = formatNumber(calcClass("other"), 2);
      document.getElementById("expTotal").value = formatNumber(calcClass("sum"));
}





function formatNumber(val, decimals) {
      return val.toLocaleString(undefined, {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
      });
}

function formatUSCurrency(val) {
      return val.toLocaleString('en-US', {
            style: "currency",
            currency: "USD"
      });
}