
var app = new Vue (
    {
        el: '#root',
        data: {
            currentActiveImage: 0,
            carouselImages: [
                'img/campagna.jpg',
                'img/cascate.webp',
                'img/fiori.jpeg',
                'img/montagne.webp'
            ],
            
        },

        methods: {
            nextPhoto() {
                console.log("this.currentActiveImage", this.currentActiveImage);
                
                // incremento dell indice
                const nextImageIndex = this.currentActiveImage + 1;

                console.log("nextImageIndex", nextImageIndex);

                // aggiornamento dell indice
                this.currentActiveImage = nextImageIndex;

                console.log(this.carouselImages.length - 1);

                if ( nextImageIndex > this.carouselImages.length - 1 ) {
                    this.currentActiveImage = 0;
                } else {
                    this.currentActiveImage = nextImageIndex;
                }
            },

            prevPhoto() {

                const prevImageIndex = this.currentActiveImage - 1;


                if ( prevImageIndex < 0 ) {
                    this.currentActiveImage = this.carouselImages.length - 1;
                } else {
                    this.currentActiveImage = prevImageIndex;
                }
            }
        }
    }
);