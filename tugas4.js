let siswa1 = 150
let siswa2 = 180
let siswa3 = 160

if((siswa1 > siswa2) && (siswa1 > siswa3)){
    console.log("Siswa Tertinggi memiliki tinggi : ", siswa1)
    if(siswa2 > siswa3){
        console.log("Urutan tinggi siswa : ", siswa1, ", ", siswa2, ", ", siswa3)
    }else{
        console.log("Urutan tinggi siswa : ", siswa1, ", ", siswa3, ", ", siswa2)
    }
}else if((siswa2 > siswa1) && (siswa2 > siswa3)){
    console.log("Siswa Tertinggi memiliki tinggi : ", siswa2)
    if(siswa1 > siswa3){
        console.log("Urutan tinggi siswa : ", siswa2, ", ", siswa1, ", ", siswa3)
    }else{
        console.log("Urutan tinggi siswa : ", siswa2, ", ", siswa3, ", ", siswa1)
    }
}else{
    console.log("Siswa Tertinggi memiliki tinggi : ", siswa3)
    if(siswa1 > siswa2){
        console.log("Urutan tinggi siswa : ", siswa3, ", ", siswa1, ", ", siswa2)
    }else{
        console.log("Urutan tinggi siswa : ", siswa3, ", ", siswa2, ", ", siswa1)
    }
}