---
---
(function (data) {
    var $mp = $("#media-partners");
    var tags = $mp.data("tags") ?  $mp.data("tags").split(/ +/) : [];

    $.each(data, function(k, v) {
        if (v.tags) {
            var c = v.tags.filter(function(n) {
                return tags.indexOf(n) != -1;
            });

            if (!c.length) {
                return;
            }
        }

        $mp.append($("<A>")
            .attr("href", v.url)
            .attr("title", v.name)
            .addClass("banner")
            .append($("<IMG>")
                .attr("src", "{{ site.helper_baseurl }}/img/media-partners/" + v.img)
                .attr("alt", v.name)
            )
        );
    });

    $mp.append($("<DIV>").addClass("clear"));
})({{ site.data.media_partners_2018 | sort_natural: 'name' | jsonify }});
