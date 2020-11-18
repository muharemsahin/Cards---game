var prviIgrac = "";
var drugiIgrac = "";
var igracA=0;
var igracB=0;
var brojac=1;

var display = document.getElementById("display");

unos1();
//unos i validacija prvog imena
function unos1()
{
    display.innerHTML = "<div class='izbor'><label>PLAYER 1: </label><input id='name1' type='text'><br><button id='nxt' class='buttons'>Next</button></div>";
	var next_button = document.getElementById("nxt");
	next_button.addEventListener("click", function() {
		prviIgrac = document.getElementById("name1").value;
		if (prviIgrac == "")
			{
				unos1();
			}else{
				unos2();
			}
	});
}

//unos i validacija drugog imena
function unos2()
{
	display.innerHTML = "<div class='izbor'><label>PLAYER 2: </label><input id='name2' type='text'><br><button id='play' class='buttons'>Play!</button></div>";
	var play_button = document.getElementById("play");
	play_button.addEventListener("click", function() {
		drugiIgrac = document.getElementById("name2").value;
		if(drugiIgrac == "" || drugiIgrac == prviIgrac)
		{
			unos2();
		}else{
			play();
		}
	});
}

	//globalna varijabla igrac koja sluzi za reset
	var igrac = 1;
  function play(){
display.innerHTML = "<div id='table'></div>";
jQuery(document).ready(function($){
	
    var wrapp = $('#wrapp');
    wrapp.append('<div class="kontejner"></div>');
    var kontejner = $('.kontejner');
    var niz = [1,2,3,4,5,6,7,8,9,10,'smjesko','ljutko'];
    var testCliks =0;
    var sacuvajniz=[];
    var rezulztati = [];

    
    for(var i=0; i<5; i++){
		rezulztati.push([]);
        for(var j=0;j<5;j++){
        var rand = Math.floor(Math.random() *niz.length);
			rezulztati[i].push(niz[rand]);
        	
        kontejner.append('<div class="box" id="celija'+i+j+'"><div class="iza">'+ niz[rand]+'</div><div class="ispred"></div><div>');
		var celija = document.getElementById("celija" + i+j);	
		
				
			
        }
    }
    
    
    
    var boxes =$('.box');
    
	
    start();
   function start(){
	    //brojac cemo prilikom reseta promijeniti na 2 ili na 1 da se zamjeni igrac
	   
	   
   		boxes.click(function(){
			for(let m=0;m<5;m++)
				for(let n=0;n<5;n++){
					var celija =$('#celija'+m+n);
					celija.click(function(){
					
				
		  if (brojac % 2 != 0)
			{
				if(rezulztati[m][n] == 'smjesko')
							igracA*=2;
						else if(rezulztati[m][n] == 'ljutko')
							igracA = 0;
						else 
							igracA+=rezulztati[m][n];
						
						
				if(igracA>=50)
				{
					alert(prviIgrac +" je pobjednik!");
					question();
				}
			}
			else
			{
				if(rezulztati[m][n] == 'smjesko')
						igracB*=2;
					else if(rezulztati[m][n] == 'ljutko')
						igracB = 0;
					else
						igracB+=rezulztati[m][n];
					
				if(igracB>=50)
				{
					alert(prviIgrac +" je pobjednik!");
					question();
				}
			}
			brojac++;
        sacuvajniz.push($(this));
			
				
				
        testCliks++;
		
        $(this).find('.ispred').css('transform', 'perspective(900px) rotateY(180deg)');  
        $(this).find('.iza').css('transform', 'perspective(900px) rotateY(0deg)');
        if(testCliks === 1){
            testCliks = 0;
            boxes.off();
            if(true){
               
                //start();
            
            
            setTimeout(function(){ 
				sacuvajniz[0].find('.ispred').css('transform', 'perspective(900px) rotateY(0deg)');
                sacuvajniz[0].find('.iza').css('transform', 'perspective(900px) rotateY(180deg)');
                 testCliks=0;
                 sacuvajniz.length =0;                 
                start();
                },1000)
            
            }
            
        }
      });  }  
    });
   }
    
    
});

 }


function question()
{
	var reset = confirm("Zelite li igrati ponovo ?");
		//ukoliko ne zeli ponovo ploca ostaje prikazana
		
		if (reset == false)
		{
			document.getElementById(".box").disabled = true;
			
		}
		if (reset == true)
		{
			
			if(brojac % 2 == 0)
			{
				brojac+=1;
				igracA=0;
				igracB=0;
				var testCliks =0;
    			var sacuvajniz=[];
    			var rezulztati = [];
				return;
			}else if(brojac % 2 != 0)
			{
				brojac+=1;
				igracA=0;
				igracB=0;
				var testCliks =0;
    			var sacuvajniz=[];
    			var rezulztati = [];
				return;
			}
			play();

		}
}


		

