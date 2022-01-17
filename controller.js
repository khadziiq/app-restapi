'use strict'

var  response = require('./res')
var connection = require('./connection')
const conn = require('./connection')

exports.index = function(req, res){
    response.ok("REST API Application is run", res)
}


// menampilkan seluruh data mahasiswa
exports.showDataMahasiswa = function (req, res) {
    connection.query('SELECT * FROM mahasiswa', function(error, rows, fields){
        if (error) {
            console.log(error)
        } else {
            response.ok(rows, res)
        }
    })
}
//menampilkan semua data mahasiswa berdasarkan idnya
exports.showDataMahasiswaById = function(req, res){
    let id = req.params.id
    connection.query('SELECT * FROM mahasiswa WHERE id = ?',[id],
    function(error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    }
    )
}
//menambahkan data mahasiswa
exports.addMahasiswa = function(req, res){
    let nim = req.body.nim
    let nama = req.body.nama
    let jurusan = req.body.jurusan

    connection.query('INSERT INTO mahasiswa (nim,nama,jurusan) VALUES(?,?,?)', [nim,nama,jurusan],
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(`Berhasil menambahkan data`, res)
        }
    })
}

// mengubahn data berdasarkan id
exports.changeDataMahasiswa = function(req, res){
    const id = req.params.id
    let nim = req.body.nim
    let nama = req.body.nama
    let jurusan = req.body.jurusan

    connection.query('UPDATE mahasiswa SET nim=?,nama=?,jurusan=? WHERE id=?',[nim,nama,jurusan,id],
    function(error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(`Berhasil Ubah Data`, res)
        }
    })
}

//menghapus data berdasarkan id
exports.deleteMahasiswa = function(req, res){
    let id = req.params.id
    connection.query('DELETE FROM mahasiswa WHERE id=?',[id],
    function(error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(`Berhasil Hapus Data`, res)
        }
    })
}

//menampilkan matakuliah group
exports.showGroupMatakuliah = function(req, res){
    connection.query('SELECT mahasiswa.id, mahasiswa.nim, mahasiswa.nama, mahasiswa.jurusan, matakuliah.nama_matakuliah,matakuliah.sks from krs JOIN matakuliah JOIN mahasiswa WHERE krs.id = mahasiswa.id AND krs.id_matakuliah = matakuliah.id_matakuliah ORDER BY mahasiswa.id',
        function(error, rows, fields){
            if (error) {
                console.log(error)
            } else{
                response.okNested(rows, res)
            }
        }
    )
}