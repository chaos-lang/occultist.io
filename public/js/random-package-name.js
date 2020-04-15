function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

function updateSpellNames() {
    var spell_name_list = [
        'math',
        'strlib',
        're',
        'http',
        'imap',
        'smtp',
        'mysql',
        'crypt',
        'warnings',
        'errors',
        'zip',
        'test',
        'csv',
        'arraylib',
        'json',
        'parsers',
        'cmath',
        'copy',
        'datetime',
        'base64',
        'binhex',
        'keyword',
        'email',
        'pipes',
        'posix',
        'pwd',
        'readline',
        'ssl',
        'tar',
        'uuid',
        'url',
        'winreg'
    ];
    var spell_names = document.getElementsByClassName("content__container__list__item");
    var parent_div = document.getElementById("console-text-animation");
    if (window.getComputedStyle(parent_div).getPropertyValue("opacity") == 0) {
        var picked_spell_names = getRandom(spell_name_list, spell_names.length);
        for (var i = 0; i < spell_names.length; i++) {
            spell_names.item(i).innerHTML = picked_spell_names[i];
        }
    }
    setTimeout(updateSpellNames, 1000);
}

docReady(function() {
    updateSpellNames();
});
