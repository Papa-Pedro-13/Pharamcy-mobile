$(".modal").hide()
$(".modal__close").on("click", () => {
    $(".modal").hide()

})

$(".advertising").on("click", (e) => {
    $(".modal").show()
    console.log(e.pageX)
    $(".modal").css({ "top": `${e.pageX}` });
})