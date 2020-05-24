var D = new Date();
var current, birthday;
current = D.getFullYear();
do {
    birthday = prompt("Bạn sinh năm bao nhiêu?: ", " ");
} while (parseInt(birthday) > current)
document.write("Tuổi của bạn bây giờ là: " + (current - birthday))
