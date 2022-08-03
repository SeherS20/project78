var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.pinimg.com/originals/29/8d/71/298d71b79f119669b580a05909f81a0d.jpg", "https://th.bing.com/th/id/OIP._UZcfDvx1uaamVpQTgfVhQHaSh?pid=ImgDet&rs=1" , "https://th.bing.com/th/id/R.48defe7fc302fa202873704f88b55655?rik=YDggD9eFpBFXVw&riu=http%3a%2f%2fclipart-library.com%2fimg1%2f990223.jpg&ehk=4KrTp%2bYciCpyUCC4CPnNNvEvIBiT3hU5plxDujAPiGQ%3d&risl=&pid=ImgRaw&r=0", "https://th.bing.com/th/id/OIP.tKLSLTVTXU390Zns3TLEIwHaHO?pid=ImgDet&rs=1"];
var names = ["My family book","Sunny Sharma (dad)", "Pooja Sharma (mom)", "Vivaan Sharma (Son)", "Seher Sharma (daughter)"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [images[i]];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [names[i]];
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
