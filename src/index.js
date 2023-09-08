// #region 标题栏 
(()=>{
    let minimizeBtn = document.querySelector(".minimizeBtn")
    minimizeBtn.addEventListener("click",()=>{
        chrome.webview.hostObjects.sync.host.Close();
        evt.preventDefault();
        evt.stopPropagation();
    })
})()
// #endregion
