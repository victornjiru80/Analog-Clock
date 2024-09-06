document.addEventListener("DOMContentLoaded",  () => {

    function updateClock() {
      const now = new Date();
      const seconds = now.getSeconds();
      const minutes = now.getMinutes();
      const hours = now.getHours();

      const secondDegrees = ((seconds/60) * 360);
      const minutedegrees = ((minutes/60) * 360 ) + ((seconds/60) * 6);
      const hourdegrees = ((hours/12) * 360 ) + ((minutes/60) * 30 );
    
      document.getElementById("hour-hand").style.transform = ` translateX(-50%) translateY(-100%) rotate($(hourdegrees)) `;
      document.getElementById("minute-hand").style.transform = ` translateX(-50%) translateY(-100%) rotate($(minutedegrees)) `;
      document.getElementById("second-hand").style.transform = ` translateX(-50%) translateY(-100%) rotate($(secondDegrees)) `;


      let digitalClock = document.getElementById("digital-clock");
      digitalClock.textContent = `${ String(hours)padStart(2,"0") } : ${ String(minutes).padStart(2, "0") } : ${ String(seconds).padStart(2, "0") } `;
    
  }


  setInterval(updateClock, 1000);
  updateClock();
  
})
