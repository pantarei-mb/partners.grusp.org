---
---
(function ($, data) {
    var $mp = $("#media_partner");
    var tags = [ "main" ];

    $.each(data, function(k, v) {
        if (v.tag && -1 == $.inArray(v.tag, tags)) {
            return;
        }

        $mp.append($("<A>")
            .attr("href", v.url)
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
})(jQuery, {{ site.data.media_partners_2016 | sort_natural: 'name' | jsonify }});
