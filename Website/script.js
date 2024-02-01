$(document).ready(function() {
    $(".sidebar-service-list a").on("click", function(e) {
        e.preventDefault();
        var targetContentId = $(this).attr("href");
        $(".service-content").hide();
        $(targetContentId).show();
    });
});
