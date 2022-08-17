var navstatus = 0; //0 means hidden and 1 means show
function openNav()
{
    if(!navstatus){
    $('.maindiv').css('width','20%') //jquery statement
    $('li').css('display','block')
    navstatus = 1
    }
    else{
        $('.maindiv').css('width','0')
        $('li').css('display','none')
        navstatus = 0
    }
}