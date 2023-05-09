// Tema değiştirme düğmesine tıklama olayını yakalayın
document.getElementById("tema-butonu").addEventListener("click", function() {
        
    // Varsayılan CSS stil dosyanızın yolunu alın
    var cssPath = "static/css/light.css";
    
    // Şu anki teması kontrol edin ve diğerine geçin
    if (document.documentElement.getAttribute("data-tema") === "acik") {
    cssPath = "static/css/dark.css";
    document.documentElement.setAttribute("data-tema", "koyu");
    } else {
    document.documentElement.setAttribute("data-tema", "acik");
    }
    
    // CSS stil dosyasını değiştirin
    var linkElement = document.getElementById("tema-stili");
    linkElement.setAttribute("href", cssPath);
    
});