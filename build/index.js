// render/index.ts
(() => {
  document.addEventListener("mousedown", (evt2) => {
    if (evt2.x > 0 && evt2.y > 0 && evt2.x < 6 && evt2.y < 6) {
      chrome.webview.hostObjects.sync.host.HitTest(13);
    } else {
    }
    evt2.preventDefault();
    evt2.stopPropagation();
  });
  let minimizeBtn = document.querySelector(".minimizeBtn");
  minimizeBtn.addEventListener("click", () => {
    chrome.webview.hostObjects.sync.host.Close();
    evt.preventDefault();
    evt.stopPropagation();
  });
})();
