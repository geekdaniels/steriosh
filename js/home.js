var index = 0; 
const introLink = document.getElementsByClassName("introduction__links__item-link"); 
const introIcon = document.getElementsByClassName("introduction__links__item-icon-circle");

const notice = () => {   
  var activeIntroLink = introLink[index]; 
  var activeIntroIcon = introIcon[index];

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


var executeNotice = setInterval(notice, 2000);

Object.values(introLink).forEach((linkItem) => {
     linkItem.addEventListener('mouseover',() => {
       
      clearInterval(executeNotice);
      introLink[index].classList.remove("notice");
      introIcon[index].classList.remove("notice");
      introLink[index].className = "introduction__links__item-link noticed";
      introIcon[index].className = "introduction__links__item-icon-circle noticed";

     })
});

Object.values(introLink).forEach((linkItem,index) => {
  linkItem.addEventListener('mouseout',() => {
   executeNotice =  setInterval(notice, 2000);
  })
});
