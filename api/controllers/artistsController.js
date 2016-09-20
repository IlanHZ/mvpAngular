var Artists = require("../models/artist");

function artistsIndex(req, res){
    Artists.find({}, function(err, artists) {
        if (err) return res.status(404).send(err);
        res.status(200).send(artists);
    });
}

function artistsCreate(req, res){
    var artist = new Artists(req.body.artist);
    artist.save(function(err, artist) {
        if (err) return res.status(500).send(err);
        res.status(201).send(artist);
    });
}

function artistsShow(req, res){
    var id = req.params.id;
    Artists.findById({ _id: id }).populate("artworks").exec(function(err, artist) {
        if (err) return res.status(500).send(err);
        if (!artist) return res.status(404).send(err);
        res.status(200).send(artist);
    });
}

function artistsUpdate(req, res){
    var id = req.params.id;

    Artists.findByIdAndUpdate({ _id: id }, req.body.artist, function(err, artist){
        if (err) return res.status(500).send(err);
        if (!artist) return res.status(404).send(err);
        res.status(200).send(artist);
    });
}

function artistsDelete(req, res){
    var id = req.params.id;
    Artists.remove({ _id: id }, function(err) {
        if (err) return res.status(500).send(err);
        res.status(204).send()
    });
}

module.exports = {
    artistsIndex:  artistsIndex,
    artistsCreate: artistsCreate,
    artistsShow:   artistsShow,
    artistsUpdate: artistsUpdate,
    artistsDelete: artistsDelete
};
