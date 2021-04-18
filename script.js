// Attraverso una chiamata axios all'API di boolean
// https://flynn.boolean.careers/exercises/api/array/music
// avremo a disposizione una decina di dischi musicali. 
// Utilizzando vue, stampiamo a schermo una card per ogni album.
// BONUS: Creare una select con tutti i generi dei dischi. In base a cosa scegliamo nella select, vedremo i corrispondenti cd.
// BONUS 2: Ordinare i dischi per anno di uscita.


function albumCard(){
    new Vue({
        el: '#app',
        data: {
            music:[],
            sortedMusic:'',
            filterMusic:'',


                    },
        mounted:
            function(){
                        
                axios.get('https://flynn.boolean.careers/exercises/api/array/music')
                    
                    .then(data => {
                        this.music = data.data.response;

                        this.sortedMusic = this.music.sort((a, b) => b.year - a.year)
                        console.log(this.sortedMusic)
                        

                        
                    })
                     .catch(() => {
                        console.log('Errore');
                    }); 
            },
            
            
        

        methods:{
                    

            filterGenre:function(){
                let filteredMusic = [];

                if(this.filterMusic != 0){
                    filteredMusic=this.sortedMusic.filter((elem) => elem.genre ==this.filterMusic);
                    
                    console.log(filteredMusic)
                }else{
                    filteredMusic=this.sortedMusic;
                }
                return filteredMusic;
             }
               
            }
        })
    }


function init() {
    albumCard()
}
document.addEventListener('DOMContentLoaded', init);

