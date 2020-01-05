

const bars = document.querySelector('#open'),
      times = document.querySelector('#close'),
      navbar = document.querySelector('.links'),
      element = document.querySelectorAll('.links ul li');
      



     let timerDellay = [.3 , .8 , 1 , 1.5 ];
     let i = 0 ; // counter to loop time delay 

      function hidden(){
       
       // animation fade in in slide navbar
       addAnimation(navbar , 'fadeInUp');

       // fade In to times close 
       addAnimation(times , 'fadeIn');


        setTimeout(() => {
            this.style.display = 'none ';  

            element.forEach((elm) => {
            elm.className = 'fadeInner';
            elm.style.animationDelay = timerDellay[i] + 's';
            i++;

            });
        
            times.style.display = 'block';
            navbar.classList.remove('d-none')
        } , 500);


        
      }


        
      



        function show(){
            // reset class item navbar and add fadeOut for close 
            element.forEach((elm) => {
                elm.className = 'fadeOuter';
                elm.style.animationDelay = timerDellay[i - 1] + 's';
                i--;
            });


            setTimeout(() => {
                addAnimation(navbar , 'fadeOuter');
            } , 2000)



            setTimeout(() => {
            this.style.display = 'none ';
            bars.style.display = 'block';
            navbar.classList.add('d-none');
            } , 3000)
        
        }

        function addAnimation(elm , nameClass ){
            elm.style.animationName = nameClass;
            elm.style.animationDuration = '1s';
            elm.style.animationFillMode = 'forwards';
        }



        bars.addEventListener('click' , hidden);
        times.addEventListener('click' , show);
            
