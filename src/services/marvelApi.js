import axios from 'axios';

//10e6e3167a7ea12cf17152fa8d3f27a3b680f3f0a13214488292737a463bec9bc315b8826
//hash: 013380175212d9b51d0942e070802e5e
//ts=1&apikey=13214488292737a463bec9bc315b8826&hash=013380175212d9b51d0942e070802e5e
//const baseUrl = 'https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=13214488292737a463bec9bc315b8826&hash=013380175212d9b51d0942e070802e5e';
//apikey = ?ts=1&apikey=13214488292737a463bec9bc315b8826&hash=013380175212d9b51d0942e070802e5e
const baseUrl = 'https://gateway.marvel.com:443/v1/public/'
        //const apikeyPriv = `0e6e3167a7ea12cf17152fa8d3f27a3b680f3f0a`;
        //const apikeyPublic = `13214488292737a463bec9bc315b8826`;
        
class marvelApi {
    constructor(){
        this.resource = axios.create({
            baseUrl,
        });
        
    }
    getComics(limit){
        //const apiKey = `ts=1&apikey=13214488292737a463bec9bc315b8826&hash=013380175212d9b51d0942e070802e5e`;
        
        const urlbas = 'https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=13214488292737a463bec9bc315b8826&hash=013380175212d9b51d0942e070802e5e'
        //return urlbas;
        return `https://gateway.marvel.com:443/v1/public/comics?limit=${limit}&ts=1&apikey=13214488292737a463bec9bc315b8826&hash=013380175212d9b51d0942e070802e5e`
        //return this.resource.get(`${baseUrl}comics?${apiKey}`);
    }
    getComic(id){
        //const apiKey = `ts=1&apikey=13214488292737a463bec9bc315b8826&hash=013380175212d9b51d0942e070802e5e`;
        //return this.resource.get(`${baseUrl}comics/${id}?${apiKey}`);
        //const urlbas = 'https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=13214488292737a463bec9bc315b8826&hash=013380175212d9b51d0942e070802e5e'
        return `https://gateway.marvel.com:443/v1/public/comics/${id}?ts=1&apikey=13214488292737a463bec9bc315b8826&hash=013380175212d9b51d0942e070802e5e`
    }
    getCharacters(limit){
        return `https://gateway.marvel.com:443/v1/public/characters?limit=${limit}&ts=1&apikey=13214488292737a463bec9bc315b8826&hash=013380175212d9b51d0942e070802e5e`
    }

    getCharacter(id){
        return `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=13214488292737a463bec9bc315b8826&hash=013380175212d9b51d0942e070802e5e`
    }
};
export default new marvelApi();
