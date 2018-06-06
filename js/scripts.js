const app = new Vue({
    el: '#app',
    data: {
        isOpen: false
    },
    methods: {
        toggleMenu: function() {
            this.isOpen = !this.isOpen;
            if(this.isOpen){
                console.log("true")
            } else {
                console.log("false")
            }
        },
    }
})

        // Defining Variables
        var element = document.getElementById('content3scroll');
        var elementTop = (element.offsetTop);

        var nav = document.getElementById('desktopNavbar');
        var navTop = (nav.offsetTop);
        var navB = (nav.offsetHeight);
        var navBottom = (navTop + navB);

        var box1 = document.getElementById('content3box1');
        var box1Top = (box1.offsetTop);
        var box1b = ((box1.offsetHeight) / 2 + box1Top);

        var box2 = document.getElementById('content3box2');
        var box2Top = (box2.offsetTop);
        var box2b = ((box2.offsetHeight) / 2 + box2Top);

        var box3 = document.getElementById('content3box3');
        var box3Top = (box3.offsetTop);
        var box3b = ((box3.offsetHeight) / 2 + box3Top);


        window.addEventListener('scroll', function(box2) {
            var scrollAmount = (window.pageYOffset);

            /*console.log(scrollAmount);*/

            // STICKY NAV
            if (scrollAmount > navBottom) {
                document.getElementById('desktopNavbar').className = 'fixed2';
            } else {
                document.getElementById('desktopNavbar').classList.remove('fixed2');
            }
            // ADD FIXED CLASS TO SIDEBAR
            if (scrollAmount > box1Top) {
                document.getElementById('content3scroll').className = 'fixed';
            } else {
                document.getElementById('content3scroll').classList.remove('fixed');
            }

            // PART 1
            if (scrollAmount > box1Top) {
                document.getElementById('part1').classList.add('red');
                document.getElementById('part2').classList.remove('red');
            }
            // PART 2
            if (scrollAmount > box1b) {
                document.getElementById('part2').classList.add('red');
                document.getElementById('part1').classList.remove('red');
                document.getElementById('part3').classList.remove('red');
            }
            // PART 3
            if (scrollAmount > box2b) {
                document.getElementById('part3').classList.add('red');
                document.getElementById('part2').classList.remove('red');
                document.getElementById('part4').classList.remove('red');
            }
            // PART 4
            if (scrollAmount > box3b) {
                document.getElementById('part4').classList.add('red');
                document.getElementById('part3').classList.remove('red');
            }
        })

        function openYear (evt, yearsName) {
            var i, box1, tablinks;
            
            box1 = document.getElementsByClassName("box1");
                for (i = 0; i < box1.length; i++) {
        box1[i].style.display = "none";
    }
            
                document.getElementById(yearsName).style.display = "block";
        }
        
var width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;
        
        if (width < 768) {
        document.getElementById("defaultYear").click();
        }
        function paraAppear() {
        var para1 = document.querySelector('.wrap1');
        var para2 = document.querySelector('.wrap2');
        var paraPos = para1.getBoundingClientRect().top + 200;
        var ScreenPos = window.innerHeight;
            
            if (paraPos < ScreenPos) {
                para1.classList.add('fadeIn');
                para2.classList.add('fadeIn');
            }
        }
        
        window.addEventListener('scroll', paraAppear)
        window.onload = function() {
            document.getElementById('content1header').classList.add('fadeIn');
            
            
            
            setTimeout(function() {
                document.getElementById('content1para').classList.add('fadeIn');
            },1000);
        }
