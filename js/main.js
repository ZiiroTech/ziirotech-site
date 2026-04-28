async function loadSection(id, file) {
  try {
    const res = await fetch(file);

    if (!res.ok) {
      throw new Error(`Failed to load ${file}`);
    }

    const html = await res.text();
    document.getElementById(id).innerHTML = html;

  } catch (err) {
    console.error(err);
    document.getElementById(id).innerHTML =
      `<p style="color:red;">Error loading ${file}</p>`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadSection("hero", "sections/hero.html");
  loadSection("about", "sections/about.html");
  loadSection("skills", "sections/skills.html");
  loadSection("projects", "sections/projects.html");
  loadSection("services", "sections/services.html");
  loadSection("contact", "sections/contact.html");
});
