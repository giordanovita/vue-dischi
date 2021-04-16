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
            poster:[]
                    },
        mounted(){
            this.getData()
        },

        methods:{
                    
            getData: function (){
                        
                axios.get('https://flynn.boolean.careers/exercises/api/array/music')
                    
                    .then(data => {
                        this.music = data.data.response;
                        console.log(this.music);
                        
                    })
                    

            }
        }
    });
}


function init() {
    albumCard()
}
document.addEventListener('DOMContentLoaded', init);

