var sounds=["green","red","yellow","blue","wrong"];
var sequence=[];
var flag=0;



function randomAudio()
{
	var randomNumber = Math.floor(Math.random()*4);
	var soundFileName = "sounds/"+sounds[randomNumber] + ".mp3";
	var audio = new Audio(soundFileName);
	audio.play();
	animation(sounds[randomNumber]);
	sequence.push(sounds[randomNumber])
	flag=0;
	j=0;
	

}

function clickAudio(id)
{	
	var soundFileName = "sounds/"+id+ ".mp3";
	var audio = new Audio(soundFileName);
	audio.play();
}

function animation(currentkey)
{
	var activeButton =document.querySelector("."+currentkey);
	activeButton.classList.add("pressed");
	setTimeout (function(){
		activeButton.classList.remove("pressed");
	},100);
}




$(document).keypress(function()
{	
	 $("h1").html("level 1");
	 randomAudio();
	 
});


$(document).click(function()
	{	
		animation(event.target.id);	
		validating(event.target.id);
		clickAudio(event.target.id);



	});

function validating(idName)
	{
		for(i=flag;i<sequence.length;i++)
		{
			if(sequence[i]!==idName)
			{
				$("h1").html("Game over press any key to restart");
				clickAudio("wrong");
				sequence.length=0;
				
			}
			else
			{	
				flag=flag+1;
			}	
			break;
		}
		if(flag===sequence.length)
		{	
			$("h1").html("level "+flag);
			setTimeout (function()
			{
			randomAudio();
			},1000);	
		}
	}







