---
---
(function (d, data) {
    var tags, mp = d.getElementsByClassName('sponsors__partner');

    if (!mp.length) {
        return;
    }

    mp = mp[0];
    tags = mp.getAttribute('data-tags') ? mp.getAttribute('data-tags').split(/ +/) : ["main"];

    data.forEach(function(v, k) {
        var hd, ha, hi;

        if (v.tags) {
            var c = v.tags.filter(function(n) {
                return tags.indexOf(n) != -1;
            });

            if (!c.length) {
                return;
            }
        }

        hi = d.createElement("DIV");
        hi.setAttribute("style", "background-image: url({{ site.helper_baseurl }}/img/media-partners/" + v.img + ')');
        hi.setAttribute("class", "sponsors__image");

        ha = d.createElement("A");
        ha.setAttribute("href", v.url);
        ha.setAttribute("title", v.name);
        ha.setAttribute("class", "sponsors__link");
        ha.appendChild(hi);

        hd = d.createElement("DIV");
        hd.setAttribute("class", "sponsors__partner-column");
        hd.appendChild(ha);

        mp.appendChild(hd);
    });

})(document, {{ site.data.media_partners_2017 | sort_natural: 'name' | jsonify }});
