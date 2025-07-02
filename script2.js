document.addEventListener('DOMContentLoaded',()=>{
    if(document.getElementById('quizForm')){
        const checkboxes=document.querySelectorAll('.habit-check');
        const score=document.getElementById('score');
        const message=document.getElementById('message');
        const showscore=document.getElementById('showscore');

        function updatescore(){
            const count=[...checkboxes].filter(box=>box.checked).length;
            score.textContent=`Your GreenTag score: ${count}/5`;
            message.style.display= count == 5 ?'block':'none';
            if(count==5){
                score.style.color='#2b6930';
            }
            else if(count>=3){
                score.style.color='#ed7d3a' ; 
            }
            else{
                score.style.color='#d90429';
            }
        }
        showscore.addEventListener('click', (e) => {
            e.preventDefault(); 
            updatescore();
        });
        checkboxes.forEach(box => {
            box.addEventListener('change', () => {
                score.textContent = '';
                message.style.display = 'none';
            });
        });
    }
});