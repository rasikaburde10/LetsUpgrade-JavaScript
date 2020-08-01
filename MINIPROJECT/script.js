var quotes=[
    'The Way to Get Started Is to Quit Talking And Begin Doing. -Walt Disney',
    'The Pessimist Sees Difficulty In Every Opportunity.The Optoimist Sees The Opportunity in Every Difficulty. -Wnston Churchill ',
    'Don\'t Let Yesterday Take Up Too Much Of Today - Will Rogers',
    'You Learn More From Failure Than From Success. Don\'t Let It Stop You. Failure Builds Charatcter. -Unknown',
    'It\'s Not Whether You Get Knocked Down, It\'s Whether You Get Up. -Vince Lombardi',
    'If You Are Wroking On Something You Really Care About, You Dont\'t Have To Be Pushed. The Vision Pulls You. -Steve Jobs',
    'The People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do. -Rob Siltanen',
    'Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough. -Og Mandino',
    'Entreprenuers Are Great At Dealing With Uncertainity And Also Very Good At Minimising Risk. That\'s The Classic Enterepreneur. -Monish Pabrai',
    'We May Encounter Many Defeats But We Must Not Be Defeated. -Maya Angelou'

]


function displayQuote(){
    //create an index of a random number 
    //convert it into between 0 to length of quotes[]
    let index=Math.floor(Math.random()*quotes.length);
   
    //display the quote of that index
    let div=document.querySelector('#quote');
    let quote=`<div class="card">
    <img src="icons/favicon.png">
    <p>${quotes[index]}</p>
    <img src="icons/favicon.png">
   </div>
    `;
    div.innerHTML=quote;
    

}
const dmode=document.getElementById('dark');
dmode.onclick=function changeColor()
{
    setTimeout(()=>{
        document.body.style.backgroundColor='grey';
        document.body.style.color='black';
        document.body.style.fontFamily='Helvetica';
    },300);
    
}