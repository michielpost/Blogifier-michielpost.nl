(function () {
  'use strict';

  // get the newsletter form elements
  var form = document.getElementById("newsletter");
  var form_email = document.getElementById("newsletter_email");
  var form_status = document.getElementById("newsletter_status");

  // Success, Loading and Error functions
  function successNewsletter(message) {
    form_status.innerHTML = "<div class=\"newsletter-msg bg-success\"><div class=\"m-auto\">".concat(message, "</div></div>");
    setTimeout(function () {
      resetNewsletter();
    }, 2000);
  }
  function loadingNewsletter() {
    form_status.innerHTML = '<div class="newsletter-msg"><div class="m-auto spinner-border" role="status"></div></div>';
  }
  function errorNewsletter(message) {
    form_status.innerHTML = "<div class=\"newsletter-msg bg-danger\"><div class=\"m-auto\">".concat(message, "</div></div>");
  }
  function resetNewsletter() {
    form.reset();
    form_status.innerHTML = "";
  }
  function subscribeNewsletter(url, data) {
    var options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };
    fetch(url, options).then(function (response) {
      if (response.status === 200) {
        successNewsletter('Đăng ký nhận thông báo mới cho email này thành công!');
      } else if (response.status === 400) {
        errorNewsletter('Email này đã tồn tại trong danh sách đăng ký.');
      } else {
        errorNewsletter('Lỗi không xác định.');
      }
    })["catch"](function (err) {
      errorNewsletter(err.message);
    });
  }
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    loadingNewsletter();
    var subscriber_data = {
      Email: form_email.value,
      Ip: "unknown",
      Country: "unknown",
      Region: "unknown"
    };
    subscribeNewsletter(form.action, subscriber_data);
  });

  // search modal auto focus
  var myModal = document.getElementById('searchModal');
  if (myModal) {
    myModal.addEventListener('shown.bs.modal', function () {
      document.getElementById('searchFormInput').focus();
    });
  }

})();
//# sourceMappingURL=main.js.map

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsianMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBnZXQgdGhlIG5ld3NsZXR0ZXIgZm9ybSBlbGVtZW50c1xyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdzbGV0dGVyXCIpO1xyXG5jb25zdCBmb3JtX2VtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdzbGV0dGVyX2VtYWlsXCIpO1xyXG5jb25zdCBmb3JtX3N0YXR1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3c2xldHRlcl9zdGF0dXNcIik7XHJcblxyXG4vLyBTdWNjZXNzLCBMb2FkaW5nIGFuZCBFcnJvciBmdW5jdGlvbnNcclxuZnVuY3Rpb24gc3VjY2Vzc05ld3NsZXR0ZXIobWVzc2FnZSkge1xyXG4gIGZvcm1fc3RhdHVzLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwibmV3c2xldHRlci1tc2cgYmctc3VjY2Vzc1wiPjxkaXYgY2xhc3M9XCJtLWF1dG9cIj4ke21lc3NhZ2V9PC9kaXY+PC9kaXY+YDtcclxuICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIHJlc2V0TmV3c2xldHRlcigpO1xyXG4gIH0sIDIwMDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkaW5nTmV3c2xldHRlcigpIHtcclxuICBmb3JtX3N0YXR1cy5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cIm5ld3NsZXR0ZXItbXNnXCI+PGRpdiBjbGFzcz1cIm0tYXV0byBzcGlubmVyLWJvcmRlclwiIHJvbGU9XCJzdGF0dXNcIj48L2Rpdj48L2Rpdj4nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlcnJvck5ld3NsZXR0ZXIobWVzc2FnZSkge1xyXG4gIGZvcm1fc3RhdHVzLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwibmV3c2xldHRlci1tc2cgYmctZGFuZ2VyXCI+PGRpdiBjbGFzcz1cIm0tYXV0b1wiPiR7bWVzc2FnZX08L2Rpdj48L2Rpdj5gO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXNldE5ld3NsZXR0ZXIoKSB7XHJcbiAgZm9ybS5yZXNldCgpO1xyXG4gIGZvcm1fc3RhdHVzLmlubmVySFRNTCA9IFwiXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN1YnNjcmliZU5ld3NsZXR0ZXIodXJsLCBkYXRhKSB7XHJcbiAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSlcclxuICB9O1xyXG5cclxuICBmZXRjaCh1cmwsIG9wdGlvbnMpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgc3VjY2Vzc05ld3NsZXR0ZXIoJ8SQxINuZyBrw70gbmjhuq1uIHRow7RuZyBiw6FvIG3hu5tpIGNobyBlbWFpbCBuw6B5IHRow6BuaCBjw7RuZyEnKTtcclxuICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMCkge1xyXG4gICAgICAgIGVycm9yTmV3c2xldHRlcignRW1haWwgbsOgeSDEkcOjIHThu5NuIHThuqFpIHRyb25nIGRhbmggc8OhY2ggxJHEg25nIGvDvS4nKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBlcnJvck5ld3NsZXR0ZXIoJ0zhu5dpIGtow7RuZyB4w6FjIMSR4buLbmguJyk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICBlcnJvck5ld3NsZXR0ZXIoZXJyLm1lc3NhZ2UpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbiAoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBsb2FkaW5nTmV3c2xldHRlcigpO1xyXG4gIHZhciBzdWJzY3JpYmVyX2RhdGEgPSB7XHJcbiAgICBFbWFpbDogZm9ybV9lbWFpbC52YWx1ZSxcclxuICAgIElwOiBcInVua25vd25cIixcclxuICAgIENvdW50cnk6IFwidW5rbm93blwiLFxyXG4gICAgUmVnaW9uOiBcInVua25vd25cIlxyXG4gIH07XHJcblxyXG4gIHN1YnNjcmliZU5ld3NsZXR0ZXIoZm9ybS5hY3Rpb24sIHN1YnNjcmliZXJfZGF0YSk7XHJcbn0pO1xyXG5cclxuLy8gc2VhcmNoIG1vZGFsIGF1dG8gZm9jdXNcclxudmFyIG15TW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoTW9kYWwnKTtcclxuaWYgKG15TW9kYWwpIHtcclxuICBteU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ3Nob3duLmJzLm1vZGFsJywgZnVuY3Rpb24gKCkge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaEZvcm1JbnB1dCcpLmZvY3VzKClcclxuICB9KVxyXG59Il0sIm5hbWVzIjpbImZvcm0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZm9ybV9lbWFpbCIsImZvcm1fc3RhdHVzIiwic3VjY2Vzc05ld3NsZXR0ZXIiLCJtZXNzYWdlIiwiaW5uZXJIVE1MIiwiY29uY2F0Iiwic2V0VGltZW91dCIsInJlc2V0TmV3c2xldHRlciIsImxvYWRpbmdOZXdzbGV0dGVyIiwiZXJyb3JOZXdzbGV0dGVyIiwicmVzZXQiLCJzdWJzY3JpYmVOZXdzbGV0dGVyIiwidXJsIiwiZGF0YSIsIm9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsImVyciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJzdWJzY3JpYmVyX2RhdGEiLCJFbWFpbCIsInZhbHVlIiwiSXAiLCJDb3Vu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{"version":3,"file":"main.js","sources":["js/main.js"],"sourcesContent":["// get the newsletter form elements\r\nconst form = document.getElementById(\"newsletter\");\r\nconst form_email = document.getElementById(\"newsletter_email\");\r\nconst form_status = document.getElementById(\"newsletter_status\");\r\n\r\n// Success, Loading and Error functions\r\nfunction successNewsletter(message) {\r\n  form_status.innerHTML = `<div class=\"newsletter-msg bg-success\"><div class=\"m-auto\">${message}</div></div>`;\r\n  setTimeout(() => {\r\n    resetNewsletter();\r\n  }, 2000);\r\n}\r\n\r\nfunction loadingNewsletter() {\r\n  form_status.innerHTML = '<div class=\"newsletter-msg\"><div class=\"m-auto spinner-border\" role=\"status\"></div></div>';\r\n}\r\n\r\nfunction errorNewsletter(message) {\r\n  form_status.innerHTML = `<div class=\"newsletter-msg bg-danger\"><div class=\"m-auto\">${message}</div></div>`;\r\n}\r\n\r\nfunction resetNewsletter() {\r\n  form.reset();\r\n  form_status.innerHTML = \"\";\r\n}\r\n\r\nfunction subscribeNewsletter(url, data) {\r\n  var options = {\r\n    method: \"POST\",\r\n    headers: { \"Content-Type\": \"application/json\" },\r\n    body: JSON.stringify(data)\r\n  };\r\n\r\n  fetch(url, options)\r\n    .then((response) => {\r\n      if (response.status === 200) {\r\n        successNewsletter('Đăng ký nhận thông báo mới cho email này thành công!');\r\n      } else if (response.status === 400) {\r\n        errorNewsletter('Email này đã tồn tại trong danh sách đăng ký.');\r\n      } else {\r\n        errorNewsletter('Lỗi không xác định.');\r\n      }\r\n    })\r\n    .catch((err) => {\r\n      errorNewsletter(err.message);\r\n    });\r\n}\r\n\r\nform.addEventListener(\"submit\", function (e) {\r\n  e.preventDefault();\r\n  loadingNewsletter();\r\n  var subscriber_data = {\r\n    Email: form_email.value,\r\n    Ip: \"unknown\",\r\n    Country: \"unknown\",\r\n    Region: \"unknown\"\r\n  };\r\n\r\n  subscribeNewsletter(form.action, subscriber_data);\r\n});\r\n\r\n// search modal auto focus\r\nvar myModal = document.getElementById('searchModal');\r\nif (myModal) {\r\n  myModal.addEventListener('shown.bs.modal', function () {\r\n    document.getElementById('searchFormInput').focus()\r\n  })\r\n}"],"names":["form","document","getElementById","form_email","form_status","successNewsletter","message","innerHTML","concat","setTimeout","resetNewsletter","loadingNewsletter","errorNewsletter","reset","subscribeNewsletter","url","data","options","method","headers","body","JSON","stringify","fetch","then","response","status","err","addEventListener","e","preventDefault","subscriber_data","Email","value","Ip","Country","Region","action","myModal","focus"],"mappings":";;;EAAA;EACA,IAAMA,IAAI,GAAGC,QAAQ,CAACC,cAAc,CAAC,YAAY,CAAC,CAAA;EAClD,IAAMC,UAAU,GAAGF,QAAQ,CAACC,cAAc,CAAC,kBAAkB,CAAC,CAAA;EAC9D,IAAME,WAAW,GAAGH,QAAQ,CAACC,cAAc,CAAC,mBAAmB,CAAC,CAAA;;EAEhE;EACA,SAASG,iBAAiBA,CAACC,OAAO,EAAE;EAClCF,EAAAA,WAAW,CAACG,SAAS,GAAA,iEAAA,CAAAC,MAAA,CAAiEF,OAAO,EAAc,cAAA,CAAA,CAAA;EAC3GG,EAAAA,UAAU,CAAC,YAAM;EACfC,IAAAA,eAAe,EAAE,CAAA;KAClB,EAAE,IAAI,CAAC,CAAA;EACV,CAAA;EAEA,SAASC,iBAAiBA,GAAG;IAC3BP,WAAW,CAACG,SAAS,GAAG,2FAA2F,CAAA;EACrH,CAAA;EAEA,SAASK,eAAeA,CAACN,OAAO,EAAE;EAChCF,EAAAA,WAAW,CAACG,SAAS,GAAA,gEAAA,CAAAC,MAAA,CAAgEF,OAAO,EAAc,cAAA,CAAA,CAAA;EAC5G,CAAA;EAEA,SAASI,eAAeA,GAAG;IACzBV,IAAI,CAACa,KAAK,EAAE,CAAA;IACZT,WAAW,CAACG,SAAS,GAAG,EAAE,CAAA;EAC5B,CAAA;EAEA,SAASO,mBAAmBA,CAACC,GAAG,EAAEC,IAAI,EAAE;EACtC,EAAA,IAAIC,OAAO,GAAG;EACZC,IAAAA,MAAM,EAAE,MAAM;EACdC,IAAAA,OAAO,EAAE;EAAE,MAAA,cAAc,EAAE,kBAAA;OAAoB;EAC/CC,IAAAA,IAAI,EAAEC,IAAI,CAACC,SAAS,CAACN,IAAI,CAAA;KAC1B,CAAA;IAEDO,KAAK,CAACR,GAAG,EAAEE,OAAO,CAAC,CAChBO,IAAI,CAAC,UAACC,QAAQ,EAAK;EAClB,IAAA,IAAIA,QAAQ,CAACC,MAAM,KAAK,GAAG,EAAE;QAC3BrB,iBAAiB,CAAC,sDAAsD,CAAC,CAAA;EAC3E,KAAC,MAAM,IAAIoB,QAAQ,CAACC,MAAM,KAAK,GAAG,EAAE;QAClCd,eAAe,CAAC,+CAA+C,CAAC,CAAA;EAClE,KAAC,MAAM;QACLA,eAAe,CAAC,qBAAqB,CAAC,CAAA;EACxC,KAAA;EACF,GAAC,CAAC,CAAA,OAAA,CACI,CAAC,UAACe,GAAG,EAAK;EACdf,IAAAA,eAAe,CAACe,GAAG,CAACrB,OAAO,CAAC,CAAA;EAC9B,GAAC,CAAC,CAAA;EACN,CAAA;EAEAN,IAAI,CAAC4B,gBAAgB,CAAC,QAAQ,EAAE,UAAUC,CAAC,EAAE;IAC3CA,CAAC,CAACC,cAAc,EAAE,CAAA;EAClBnB,EAAAA,iBAAiB,EAAE,CAAA;EACnB,EAAA,IAAIoB,eAAe,GAAG;MACpBC,KAAK,EAAE7B,UAAU,CAAC8B,KAAK;EACvBC,IAAAA,EAAE,EAAE,SAAS;EACbC,IAAAA,OAAO,EAAE,SAAS;EAClBC,IAAAA,MAAM,EAAE,SAAA;KACT,CAAA;EAEDtB,EAAAA,mBAAmB,CAACd,IAAI,CAACqC,MAAM,EAAEN,eAAe,CAAC,CAAA;EACnD,CAAC,CAAC,CAAA;;EAEF;EACA,IAAIO,OAAO,GAAGrC,QAAQ,CAACC,cAAc,CAAC,aAAa,CAAC,CAAA;EACpD,IAAIoC,OAAO,EAAE;EACXA,EAAAA,OAAO,CAACV,gBAAgB,CAAC,gBAAgB,EAAE,YAAY;MACrD3B,QAAQ,CAACC,cAAc,CAAC,iBAAiB,CAAC,CAACqC,KAAK,EAAE,CAAA;EACpD,GAAC,CAAC,CAAA;EACJ;;;;;;"}