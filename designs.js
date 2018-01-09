
function makeGrid() {
    //get the values of the rows and columns of the table from the input
    const row = document.getElementById("input_height").value;
    const col = document.getElementById("input_width").value;
    //remove all the child elements of the table
    $("#pixel_canvas").children().remove();
    //for loop to append the tr tags to the table
    for(let r=1;r<=row;r++)
    {
       $("table").append('<tr id='+r+'>');
       //for loop to append the td tags to the tr's and add the id's r+y
       //e.g. 11,12,21 to the td's for individual selection
       for(let y=1;y<=col;y++)
       {
        $("#"+r+"").append('<td></td>');
       }
    }
}



$("#submit").on("click",function(event){
    // prevent the values from resetting from the input
    event.preventDefault();
    makeGrid();

});


$("table").on("click","td", function(){
    //set the attributes of the clicked td's to the selected color
    $(this).attr("bgcolor", $("#colorPicker").val());
});




