
async function loadSection(id, file) {
  const res = await fetch(file);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
}

loadSection("hero", "sections/hero.html");
loadSection("about", "sections/about.html");
loadSection("services", "sections/services.html");
loadSection("contact", "sections/contact.html");
