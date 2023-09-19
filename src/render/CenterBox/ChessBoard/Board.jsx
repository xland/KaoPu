import React from "jsx-dom"
import RedChess from "./RedChess"

export default function (props) {
    return (<svg id={props.id} preserveAspectRatio="xMidYMid meet" viewBox="0 0 898 1010" xmlns="http://www.w3.org/2000/svg">
  <g>
    <defs>
      <path id="topLeft" fill="none" stroke="#fff" stroke-width="1" d="M 0 10 L 10 10 L 10 0" />
      <path id="bottomLeft" fill="none" stroke="#fff" stroke-width="1" d="M 0 0 L 10 0 L 10 10" />
      <path id="topRight" fill="none" stroke="#fff" stroke-width="1" d="M 0 0 L 0 10 L 10 10" />
      <path id="bottomRight" fill="none" stroke="#fff" stroke-width="1" d="M 0 10 L 0 0 L 10 0" />
      <g id="redChess" viewBox="0 0 40,40">
        <circle rx="100" ry="100" r="40" fill="#FFF" stroke="none"></circle>
        <circle rx="100" ry="100" r="36" fill="#FFF" stroke="red" stroke-width="4"></circle>
      </g>
    </defs>
    <rect stroke="#fff" fill="none" stroke-width="2" width="894" height="1006" x="2" y="2" />
    <rect stroke="#fff" fill="none" stroke-width="1" width="878" height="989" x="10" y="10" />

    <line stroke="#fff" x1="10" x2="888" y1="111" y2="111" />
    <line stroke="#fff" x1="10" x2="888" y1="222" y2="222" />
    <line stroke="#fff" x1="10" x2="888" y1="333" y2="333" />
    <line stroke="#fff" x1="10" x2="888" y1="444" y2="444" />
    <line stroke="#fff" x1="10" x2="888" y1="555" y2="555" />
    <line stroke="#fff" x1="10" x2="888" y1="666" y2="666" />
    <line stroke="#fff" x1="10" x2="888" y1="777" y2="777" />
    <line stroke="#fff" x1="10" x2="888" y1="888" y2="888" />

    <line stroke="#fff" x1="111" x2="111" y1="10" y2="444" />
    <line stroke="#fff" x1="222" x2="222" y1="10" y2="444" />
    <line stroke="#fff" x1="333" x2="333" y1="10" y2="444" />
    <line stroke="#fff" x1="444" x2="444" y1="10" y2="444" />
    <line stroke="#fff" x1="555" x2="555" y1="10" y2="444" />
    <line stroke="#fff" x1="666" x2="666" y1="10" y2="444" />
    <line stroke="#fff" x1="777" x2="777" y1="10" y2="444" />
    
    <line stroke="#fff" x1="111" x2="111" y1="555" y2="999" />
    <line stroke="#fff" x1="222" x2="222" y1="555" y2="999" />
    <line stroke="#fff" x1="333" x2="333" y1="555" y2="999" />
    <line stroke="#fff" x1="444" x2="444" y1="555" y2="999" />
    <line stroke="#fff" x1="555" x2="555" y1="555" y2="999" />
    <line stroke="#fff" x1="666" x2="666" y1="555" y2="999" />
    <line stroke="#fff" x1="777" x2="777" y1="555" y2="999" />
    
    <path fill="none" stroke="#fff" d="M 333 10 L 444 111 L 555 222" />
    <path fill="none" stroke="#fff" d="M 555 10 L 444 111 L 333 222" />
    
    <path fill="none" stroke="#fff" d="M 333 999 L 444 888 L 555 777" />
    <path fill="none" stroke="#fff" d="M 555 999 L 444 888 L 333 777" />

    <text x="166" y="520" font-family="KaiTi" fill="#888" font-size="56">楚河</text>
    <text x="612" y="520" font-family="KaiTi" fill="#888" font-size="56">汉界</text>

    <use href="#topLeft" x="98" y="208" width="15" height="15"></use>
    <use href="#bottomLeft" x="98" y="226" width="15" height="15"></use>
    <use href="#topRight" x="114" y="208" width="15" height="15"></use>
    <use href="#bottomRight" x="114" y="226" width="15" height="15"></use>

    <use href="#topLeft" x="763" y="208" width="15" height="15"></use>
    <use href="#bottomLeft" x="763" y="226" width="15" height="15"></use>
    <use href="#topRight" x="781" y="208" width="15" height="15"></use>
    <use href="#bottomRight" x="781" y="226" width="15" height="15"></use>

    <use href="#topRight" x="14" y="318" width="15" height="15"></use>
    <use href="#bottomRight" x="14" y="338" width="15" height="15"></use>

    <use href="#topLeft" x="208" y="318" width="15" height="15"></use>
    <use href="#bottomLeft" x="208" y="338" width="15" height="15"></use>
    <use href="#topRight" x="226" y="318" width="15" height="15"></use>
    <use href="#bottomRight" x="226" y="338" width="15" height="15"></use>

    <use href="#topLeft" x="430" y="318" width="15" height="15"></use>
    <use href="#bottomLeft" x="430" y="338" width="15" height="15"></use>
    <use href="#topRight" x="448" y="318" width="15" height="15"></use>
    <use href="#bottomRight" x="448" y="338" width="15" height="15"></use>

    <use href="#topLeft" x="652" y="318" width="15" height="15"></use>
    <use href="#bottomLeft" x="652" y="338" width="15" height="15"></use>
    <use href="#topRight" x="670" y="318" width="15" height="15"></use>
    <use href="#bottomRight" x="670" y="338" width="15" height="15"></use>

    <use href="#topLeft" x="873" y="318" width="15" height="15"></use>
    <use href="#bottomLeft" x="873" y="338" width="15" height="15"></use>

    <use href="#topRight" x="14" y="652" width="15" height="15"></use>
    <use href="#bottomRight" x="14" y="670" width="15" height="15"></use>

    <use href="#topLeft" x="208" y="652" width="15" height="15"></use>
    <use href="#bottomLeft" x="208" y="670" width="15" height="15"></use>
    <use href="#topRight" x="226" y="652" width="15" height="15"></use>
    <use href="#bottomRight" x="226" y="670" width="15" height="15"></use>

    <use href="#topLeft" x="430" y="652" width="15" height="15"></use>
    <use href="#bottomLeft" x="430" y="670" width="15" height="15"></use>
    <use href="#topRight" x="448" y="652" width="15" height="15"></use>
    <use href="#bottomRight" x="448" y="670" width="15" height="15"></use>

    <use href="#topLeft" x="652" y="652" width="15" height="15"></use>
    <use href="#bottomLeft" x="652" y="670" width="15" height="15"></use>
    <use href="#topRight" x="670" y="652" width="15" height="15"></use>
    <use href="#bottomRight" x="670" y="670" width="15" height="15"></use>

    <use href="#topLeft" x="873" y="652" width="15" height="15"></use>
    <use href="#bottomLeft" x="873" y="670" width="15" height="15"></use>

    <use href="#topLeft" x="98" y="763" width="15" height="15"></use>
    <use href="#bottomLeft" x="98" y="781" width="15" height="15"></use>
    <use href="#topRight" x="114" y="763" width="15" height="15"></use>
    <use href="#bottomRight" x="114" y="781" width="15" height="15"></use>

    <use href="#topLeft" x="763" y="763" width="15" height="15"></use>
    <use href="#bottomLeft" x="763" y="781" width="15" height="15"></use>
    <use href="#topRight" x="781" y="763" width="15" height="15"></use>
    <use href="#bottomRight" x="781" y="781" width="15" height="15"></use>

    
    <use href="#redChess" x="0" y="0" width="10" height="10"></use>
  </g>
</svg>)
}