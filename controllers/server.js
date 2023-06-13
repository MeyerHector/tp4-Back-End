function get() {
    res.send('Peticion GET exitosa')
};

function post() {
    res.send('Peticion POST exitosa')
};

function put() {
    res.send('Peticon PUT exitosa')
};

function deletee() {
    res.send('Peticion DELETE exitosa')
}

module.exports = {
    get,
    post,
    put,
    deletee
};