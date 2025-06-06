document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("loadGallery");

  if (btn) {
    btn.addEventListener("click", (e) => {
      e.preventDefault(); 
      fetch("/static/html/galeria.html")
        .then(res => {
          if (!res.ok) throw new Error("Błąd wczytywania");
          return res.text();
        })
        .then(html => {
          document.getElementById("center").innerHTML = html;
        })
        .catch(err => {
          console.error(err);
          document.getElementById("center").innerHTML = `<p style="color:red;">Błąd ładowania galerii.</p>`;
        });
    });
  }
});
