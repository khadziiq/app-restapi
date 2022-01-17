'use strict'

exports.ok = function (values, res) {
    let data = {
        'status': 200,
        'values':values
    }
    res.json(data)
    res.end()
}

//response untuk nested Matakuliah

exports.okNested = function(values, res){
    //lakukan akumulasi
    const hasil = values.reduce((akumulasikan, item)=>{
        //tentukan key group
        if (akumulasikan[item.nama]) {
            //buat variabel group nama mahaiswa
            const group = akumulasikan[item.nama]
            //cek jika array matakuliah
            if (Array.isArray(group.nama_matakuliah)) {
                //tambahkan value kedalam group matakuliah
                group.nama_matakuliah.push[item.nama_matakuliah]
            } else{
                group.nama_matakuliah = [group.nama_matakuliah, item.nama_matakuliah]
            }
        }else {
            akumulasikan[item.nama] = item
        }
        return akumulasikan
    },{})
    let data = {
        'status': 200,
        'values':hasil
    }
    res.json(data)
    res.end()
}