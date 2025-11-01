document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  function handleSelect(role) {
    let msg = "";
    if (role === "customer") msg = "تم اختيار: زبون — سيتم نقلك لواجهة الطلبات.";
    else if (role === "driver") msg = "تم اختيار: سائق — سيتم نقلك لواجهة السائق.";
    else if (role === "dispatcher") msg = "تم اختيار: ديسباتشر (فريلانسر) — سيتم نقلك للوحة الإدارة.";
    document.body.style.transition = "opacity .28s ease";
    document.body.style.opacity = "0.7";
    setTimeout(() => {
      alert(msg);
      document.body.style.opacity = "1";
    }, 320);
  }

  cards.forEach(card => {
    const role = card.dataset.role;
    card.addEventListener("click", () => handleSelect(role));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleSelect(role);
      }
    });
  });
});
