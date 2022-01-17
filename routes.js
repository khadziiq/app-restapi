'use strict'

module.exports = function (app) {
    var  jsonku = require('./controller')

    app.route('/')
    .get(jsonku.index)

    app.route('/show')
    .get(jsonku.showDataMahasiswa)

    app.route('/show/:id')
    .get(jsonku.showDataMahasiswaById)

    app.route('/add')
    .post(jsonku.addMahasiswa)

    app.route('/change/:id')
    .put(jsonku.changeDataMahasiswa)

    app.route('/delete/:id')
    .delete(jsonku.deleteMahasiswa)

    app.route('/showmatakuliah')
    .get(jsonku.showGroupMatakuliah)
}