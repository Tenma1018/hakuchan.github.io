const targetElement = document.querySelectorAll(".animationTarget");

document.addEventListener('scroll', function(){
        for (let i = 0; i < targetElement.length; i++) {
            const getElementDistance = targetElement[i].getBoundingClientRect().top +
            targetElement[i].clientHeight*0.4;
            if(i === 1){
                console.log("innerHeight:"+ window.innerHeight)
                console.log("ElementDistance:"+ getElementDistance+"\n")
            
            }
            if(window.innerHeight > getElementDistance){
                targetElement[i].classList.add("show");
                console.log(getElementDistance)
            }
            
        }



})


    
