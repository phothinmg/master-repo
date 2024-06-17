function c001847() {
  const head = document.querySelector("head");
  const styleTag = document.createElement("style");
  styleTag.innerHTML = `
  .c001847{
            color: #585858;
        }
        @media (prefers-color-scheme: dark){
            .c001847{
            color: #ababab;
        }
        }
  
  `;
  head.appendChild(styleTag);
}

c001847();
