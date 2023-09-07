// #region 标题栏 
(()=>{
    let domTitle  = document.querySelector(".title");
    domTitle.addEventListener("mousedown",(evt)=>{
        chrome.webview.hostObjects.sync.host.MouseDownDrag();
        evt.preventDefault();
        evt.stopPropagation();
    })
    let minimizeBtn = document.querySelector(".minimizeBtn")
    minimizeBtn.addEventListener("click",()=>{
        chrome.webview.hostObjects.sync.host.Close();
        evt.preventDefault();
        evt.stopPropagation();
    })
})()
// #endregion
