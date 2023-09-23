import React from "jsx-dom"
import "./NavigateBox.css"
export default function () {
    let minimize = () => {

    }
    return (
        <div id="navigateBox">
            <div id="navigateHeader">
                <div id="navigateSearchBox">
                    <div class="searchIcon">
                        <i class="iconfont icon-search"></i>
                    </div>
                    <input id="navigateSearchInput" type="text"></input>
                </div>
                <div>
                    <i class="iconfont icon"></i>
                </div>
            </div>
        </div>
    )
}