function populate(s1, s2) {
  var s1 = document.getElementById(s1);
  var s2 = document.getElementById(s2);
  s2.innerHTML = "";

  if (s1.value == "commercial") {
    var optionArray = [
      "multifamily|Multifamily",
      "office|Office",
      "industrial|Industrial",
    ];
  } else if (s1.value == "resedential") {
    var optionArray = ["apartment|Apartment", "society|Society"];
  } else if (s1.value == "education") {
    var optionArray = [
      "primary|Primary School",
      "secondary|Secondary School",
      "university|University",
    ];
  } else {
    var optionArray = [" | "];
  }

  for (var option in optionArray) {
    var pair = optionArray[option].split("|");
    var newoption = document.createElement("option");
    newoption.value = pair[0];
    newoption.innerHTML = pair[1];
    s2.options.add(newoption);
  }
}

// function manage() {
//   $("input[type='text'], input[type='radio'], select").each(function () {
//     debugger;
//     if (
//       ($(this).val() != undefined && $(this).val().trim().length > 0) ||
//       $(this).prop("checked")
//     ) {
//       $("#btnNext").removeClass("disabled").removeAttr("disabled");
//     } else {
//       $("#btnNext").addClass("disabled").attr("disabled", true);
//     }
//   });
// }

function manage() {
  var validate = false;
  $("input[type='text'], select").each(function () {
    debugger;
    if (
      ($(this).val() != null && $(this).val().trim().length == 0) ||
      $("input[type='radio']:checked").length == 0
    ) {
      validate = true;
    }
    if ($(this).val() == null) {
      validate = true;
    }
  });
  if (validate) {
    $("#btnNext").addClass("disabled").attr("disabled", true);
  } else {
    $("#btnNext").removeClass("disabled").removeAttr("disabled");
  }
}
