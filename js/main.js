var index = 0; 

// const activeIntroLink = document.querySelector(".introduction__links__item a");
// activeIntroLink.parentElement
//                 .nextElementSibling
//                 .childNodes[1]
//                 .className = "notice";



const notice = () => {   
  const activeIntroLink = document.getElementsByClassName("introduction__links__item-link")[index]; 
  const activeIntroIcon = document.getElementsByClassName("introduction__links__item-icon-circle")[index];


  if(activeIntroIcon.parentElement.parentElement.nextElementSibling) {
      activeIntroLink.classList.remove("notice");
      activeIntroIcon.classList.remove("notice");

      activeIntroLink.parentElement
                  .nextElementSibling
                  .childNodes[1]
                  .className = "introduction__links__item-link notice";
      activeIntroIcon.parentElement.parentElement
                  .nextElementSibling
                  .childNodes[3].childNodes[1]
                  .className = "introduction__links__item-icon-circle notice";
       index++;
  }else {
      activeIntroIcon.classList.remove("notice");
      activeIntroLink.classList.remove("notice");
      index = 0;
      document.getElementsByClassName("introduction__links__item-link")[0].className = "introduction__links__item-link notice";
      document.getElementsByClassName("introduction__links__item-icon-circle")[0].className = "introduction__links__item-icon-circle notice";
    }
} 


setInterval(notice, 1000);

