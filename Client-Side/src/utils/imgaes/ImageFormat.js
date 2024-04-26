export function  imageFromat(img){
    return img.startsWith('https') ? img : `http://127.0.0.1:8000/storage/${img}`
}