/* Start game with 0 points.*/
let value = 0;
/* 'document.ready' makes the page ready to perform tasks inside. */
$(document).ready(() => {
    /* Opening title sequence section is displayed */
    $("#enter").click(function(){
       //let value = 0; 
       $("#start, #steptwo, #stepthree, #stepfour, #stepfive, #stepsix, #stepseven, #resultwin, #resultlose").hide();
       $("#stepone").show();  
    });
    /* Only section on step 1 is displayed. */
    $("#a, #b, #c").click(function(){
    	/* check if correct picture was selected so that value increases by one */
    	if (this.id == 'a') {
    	   value = value + 1;
    	   
        }   

        else if  (this.id == 'b') {
           value = value + 0;
            
        }   

        else if (this.id == 'c'){
        	value = value + 0;
        }
        $("#start, #stepone, #stepthree, #stepfour, #stepfive, #stepsix, #stepseven, #resultwin, #resultlose").hide();
        $("#steptwo").show();

        
    });
    /* Only section on step 2 is displayed. */
    $("#d, #e, #f").click(function(){
       
        if (this.id == 'd') {
    	    value = value + 0;
        }   
        /* check if correct picture was selected so that value increases by one */
        else if  (this.id == 'e') {
            value = value + 1; 
        }   

        else if (this.id == 'f'){
        	value = value + 0;
        }

        $("#start, #stepone, #steptwo, #stepfour, #stepfive, #stepsix, #stepseven, #resultwin, #resultlose").hide();
        $("#stepthree").show();  
    });
    
    /* Only section on step 3 is displayed. */
    $("#g, #h, #i").click(function(){
     
        if (this.id == 'g') {
    	    value = value + 0;
         }   

        else if  (this.id == 'h') {
            value = value + 0; 
        }   
        /* check if correct picture was selected so that value increases by one */
        else if (this.id == 'i'){
        	value = value + 1;
        }
        $("#start, #stepone, #steptwo, #stepthree, #stepfive, #stepsix, #stepseven, #resultwin, #resultlose").hide();
        $("#stepfour").show();  
    });  

    /* Only section on step 4 is displayed. */
    $("#j, #k, #l").click(function(){
       
        if (this.id == 'j') {
    	    value = value + 0;
        }   
        /* check if correct picture was selected so that value increases by one */
        else if  (this.id == 'k') {
            value = value + 1; 
        }   

        else if (this.id == 'l'){
        	 value = value + 0;
        }
        $("#start, #stepone, #steptwo, #stepthree, #stepfour, #stepsix, #stepseven, #resultwin, #resultlose").hide();
        $("#stepfive").show();  
    });

    /* Only section on step 5 is displayed. */
    $("#m, #n, #o").click(function(){
        /* check if correct picture was selected so that value increases by one */
        if (this.id == 'm') {
    	    value = value + 1;
        }   

        else if  (this.id == 'n') {
            value = value + 0; 
        }   

        else if (this.id == 'o'){
            value = value + 0;
        }
        $("#start, #stepone, #stepthree, #stepfour, #stepfive, #stepsix, #stepseven, #resultwin, #resultlose").hide();
        $("#stepsix").show();  
    });

    /* Only section on step 6 is displayed. */
    $("#p, #q, #r").click(function(){
       
        if (this.id == 'p') {
    	    value = value + 0;
        }    
        /* check if correct picture was selected so that value increases by one */
        else if  (this.id == 'q') {
            value = value + 1; 
        }   

        else if (this.id == 'r'){
            value = value + 0;
        }
        $("#start, #stepone, #steptwo, #stepthree, #stepfour, #stepfive, #stepsix, #resultwin, #resultlose").hide();
        $("#stepseven").show();  
    });

    /* Only section on step 7 is displayed. */
    $("#s, #t, #u").click(function(){
       
        if (this.id == 's') {
    	    value = value + 0;
    	    $("#resultlose").show()
    	    $("#start, #stepone,#steptwo, #stepthree, #stepfour, #stepfive, #stepsix, #stepseven, #resultwin").hide();
    	   

        }   

        else if  (this.id == 't') {
            value = value + 0; 
    	    $("#resultlose").show()
    	    $("#start, #stepone,#steptwo, #stepthree, #stepfour, #stepfive, #stepsix, #stepseven, #resultwin").hide();
    	   
        }   
        /* check if correct picture was selected so that value increases by one */
        else if (this.id == 'u') {
        	value = value + 1;
        	/* check if all steps were done correctly to display win game result section */
        	if (value == 7){
    	   	   $("#resultwin").show();
    	   	   $("#start, #stepone,#steptwo, #stepthree, #stepfour, #stepfive, #stepsix, #stepseven, #resultlose").hide();
    	    }
           /* lose game result section is displayed.*/
    	    else {
    	   	   $("#resultlose").show()
    	   	   $("#start, #stepone,#steptwo, #stepthree, #stepfour, #stepfive, #stepsix, #stepseven, #resultwin").hide();
    	    }
        }
       
         
    });
    /* Only section on win game result is displayed. */
    $("#resultwin").click(function(){
       $("#stepone, #stepthree, #stepfour, #stepfive, #stepsix, #stepseven, #resultwin, #resultlose").hide();
       $("#start").show();  
    });

    /* Only section on lose game result is displayed. */
    $("#resultlose").click(function(){
       $("#stepone, #steptwo, #stepthree, #stepfour, #stepfive, #stepsix, #stepseven, #resultwin, #resultlose").hide();
       $("#start").show();  
    });


});