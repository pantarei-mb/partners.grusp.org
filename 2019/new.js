---
---
(function (d, data) {
    var tags, name, mp = d.getElementsByClassName('sponsors__partner');

    if (!mp.length) {
        return;
    }

    mp = mp[0];
    tags = mp.getAttribute('data-tags') ? mp.getAttribute('data-tags').split(/ +/) : ["main"];
    name = mp.getAttribute('data-name') ?  mp.getAttribute('data-name') : 'grusp';

    data.forEach(function(v, k) {
        var hd, ha, hi;

        if (v.tags) {
            var c = v.tags.filter(function(n) {
                return n === name || tags.indexOf(n) !== -1;
            });

            if (!c.length) {
                return;
            }
        }

        hi = d.createElement("DIV");
        hi.setAttribute("style", "background-image: url({{ site.helper_baseurl }}/img/media-partners/" + v.img + ')');
        hi.setAttribute("class", "sponsors__image");

        ha = d.createElement("A");
        ha.setAttribute("href", v.url.replace(/%name%/g, encodeURIComponent(name)));
        ha.setAttribute("title", v.name);
        ha.setAttribute("class", "sponsors__link");
        ha.appendChild(hi);

        hd = d.createElement("DIV");
        hd.setAttribute("class", "sponsors__partner-column");
        hd.appendChild(ha);

        mp.appendChild(hd);
    });

})(document, {{ site.data.media_partners_2019 | sort_natural: 'name' | jsonify }});
