---
---
(function ($, data) {
    var $mp = $("#media_partner");
    var tags = $mp.data("tags") ?  $mp.data("tags").split(/ +/) : [ "main" ];
    var name = $mp.data("name") ?  $mp.data("name") : 'grusp';

    $.each(data, function(k, v) {
        if (v.tags) {
            var c = v.tags.filter(function(n) {
                return n === name || tags.indexOf(n) !== -1;
            });

            if (!c.length) {
                return;
            }
        }

        $mp.append($("<A>")
            .attr("href", v.url.replace(/%name%/g, encodeURIComponent(name)))
            .attr("title", v.name)
            .addClass("banner")
            .append($("<span class=\"ribbon media\">media</span>"))
            .append($("<IMG>")
                .attr("src", "{{ site.helper_baseurl }}/img/media-partners/" + v.img)
                .attr("alt", v.name)
            )
        );
    });

    $mp.append($("<DIV>").addClass("clear"));
})(jQuery, {{ site.data.media_partners_2020 | sort_natural: 'name' | jsonify }});
