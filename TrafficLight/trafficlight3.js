
window.onload = function() {
    
    TrafficLights();
    //initial function call
   
   
function TrafficLights(){
     // Get all the first light container
    const firstLight = document.querySelectorAll('.light')[0];
    const secondLight = document.querySelectorAll('.light')[1];
    const thirdLight = document.querySelectorAll('.light')[2];

    //removing the color of the second and third container
    secondLight.classList.remove('yellow');
    thirdLight.classList.remove('green');
    
    setTimeout(function() {// first 3 seconds time out
        firstLight.classList.remove('red');
        firstLight.classList.add('transparent');
        secondLight.classList.remove('yellow');
        secondLight.classList.add('yellow');
        

        // After the first light becomes transparent, change the color of the second light to yellow immediately

        setTimeout(function(){//second three seconds time out
            secondLight.classList.remove('yellow')
            thirdLight.classList.add('green')
            
            // thirdLight.classList.add('transparent')
            
            setTimeout(function(){
                thirdLight.classList.remove('green')
                firstLight.classList.add('red')
                setTimeout(function(){
                    // firstLight.classList.add('red')
                    // for (let index = 0; index < 10; index++) {
                        if (thirdLight != 'green') {
                            TrafficLights();
                        }
                        
                    // }
                    
                }, 2000)
                
            }, 2000)
            
            
            }, 2000);    
        }, 2000);
        
    }
    // while (thirdLight = 'green') {
    //     TrafficLights();  
    // }
    
    // TrafficLights();
}    
