export default class Song {
    constructor(song) {
        this.title = song.trackName
        //Change 250x250 if you want a larger image
        this.albumArt = song.artworkUrl60.replace(/60x60/g, "250x250")
        this.artist = song.artistName
        this.collection = song.collectionName
        this.price = song.collectionPrice
        this.preview = song.previewUrl
    }
    Template() {
        return `
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card card-background">
                    <img src="${this.albumArt}" class="card-img-top" alt="song">
                    <div class="card-body">
                        <p class="card-text">${this.artist}</p>
                        <p class="card text">${this.collection}</p>
                        <p class="card-text">${this.price}</p>
                        <audio controls>
                        <source src="${this.preview}">
                        <!--<source src="${this.preview}"> -->
                        </audio>

                    </div>
                </div>

            </div>
        
        `
    }
}
