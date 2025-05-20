document.addEventListener("DOMContentLoaded", function () {
   const authorName = document.querySelectorAll("span.entry-author-name");
   authorName.forEach(function (el) {
      if (el.textContent.trim() === "Stephen A Weisberg") {
         const link = document.createElement("a");
         link.href = "https://www.wtaxattorney.com/stephen-weisberg/";
         link.textContent = el.textContent;
         link.className = el.className;
         el.replaceWith(link);
      }
   });
});
