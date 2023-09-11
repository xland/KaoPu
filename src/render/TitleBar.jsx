import React from "jsx-dom"
import "./TitleBar.css"
export default function() {
  return (
    <div class="titleBar">
        <div class="title">测试程序</div>
        <div class="toolBtns">
            <div id="minimizeBtn">
                <i class="iconfont icon-minimize"></i>
            </div>
            <div id="restoreBtn" style="display: none;">
                <i class="iconfont icon-suoxiao1"></i>
            </div>
            <div id="maximizeBtn">
                <i class="iconfont icon-fangda"></i>
            </div>
            <div id="closeBtn">
                <i class="iconfont icon-close"></i>
            </div>
        </div>
    </div>
  )
}