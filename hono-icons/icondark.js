function c001847() {
  const head = document.querySelector("head");
  const styleTag = document.createElement("style");
  styleTag.innerHTML = `
    .c001847{
        color: rgb(37, 33, 33);
      }
      .c001847:hover{
        color: darkgreen;
        cursor: pointer;
      }
      @media (prefers-color-scheme: dark){
        .c001847{
          color: goldenrod;
        }
      }
        
  
  `;
  head.appendChild(styleTag);
}

c001847();
