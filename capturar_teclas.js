<script type="text/javascript">
$('body').on("keydown", function(e) { 
    if (e.altKey && e.which === 83) {
        location.href = "es/about.html"
        e.preventDefault();
    }
});
$("#button").on("click", function(e) { 
    alert("You clicked button");
}); 
</script>