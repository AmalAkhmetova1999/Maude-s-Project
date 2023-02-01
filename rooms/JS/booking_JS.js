    $(document).ready(function () {
        $('#hotel').change(function () {
            var selectedOption = $('#hotel option:selected');
            if (selectedOption.val() == 'enskede') {
                $('#1').show();
                $('#2').show();
                $('#3').show();
                $('#4').show();
                $('#5').hide();
            } else $('#first').show();
        });
        $('#hotel').change(function () {
            var selectedOption = $('#hotel option:selected');
            if (selectedOption.val() == 'bymaude') {
                $('#1').show();
                $('#2').show();
                $('#3').hide();
                $('#4').show();
                $('#5').show();
            } else $('#first').show();
        });
        $('#hotel').change(function () {
            var selectedOption = $('#hotel option:selected');
            if (selectedOption.val() == 'solna') {
                $('#1').show();
                $('#2').show();
                $('#3').show();
                $('#4').show();
                $('#5').show();
            } else $('#first').show();
        });


    });

    function push() {
        var adults = document.getElementById("selectAdult").value;
        var children = document.getElementById("selectChild").value;
        var roomType = document.getElementById("first").value;
        console.log(roomType);
        if (validateForm2(parseInt(adults), parseInt(children), roomType)) {
            fetch('http://localhost:5000/getTest')
                /*fetch('http://localhost:5000/getOneParam?' + new URLSearchParams)({
                        name: document.getElementById('fname').value
                    })*/
                .then((res) => {
                    if (res.status >= 200 && res.status < 300) {
                        console.log('+');
                        alert('Спасибо,регистрация прошла успешно!');
                        window.location.replace("index.html");
                    } else {
                        console.log('-');
                        alert('Ошибка, попробуйте снова.');
                    }
                })
        }

    }

    import singleRoom from "./singleRoom.js";
    import doubleRoom from "./doubleRoom.js";
    import twinbedRoom from "./twinbedRoom.js";
    import superiorDoubleRoom from "./superiorDoubleRoom.js";
    import deluxeRoom from "./deluxeRoom.js";

    document.getElementById('pushButton').addEventListener('click', push)

    function validateForm2(adults, children, roomType) {
        console.log(adults + children + roomType);
        if (roomType == "Single room") {
            if ((adults > singleRoom.maxAdults) || adults < 1 || children < 0 || children > singleRoom.maxChildren) {
                alert("maximum adult occupancy in Single room: 1, maximum child occupancy in Single room: 1")
                return false;
            } else if ((adults + children) > 2) {
                alert("maximum adult occupancy in Single room: 1, maximum child occupancy in Single room: 1")
                return false;
            } else return true;

        } else if (roomType == "Double room") {
            if ((adults > doubleRoom.maxxAdults) & children > doubleRoom.maxxChildren || adults > doubleRoom.maxAdults & children > doubleRoom.maxChildren) {
                alert("maximum adult occupancy in Double room: 1, maximum child occupancy in Double room: 1")
                return false;
            } else if ((adults + children) > 3) {
                alert("maximum adult occupancy in Double room: 2, maximum child occupancy in Double room: 1")
                return false;
            } else return true;
        } else if (roomType == "Twinbed room") {
            if ((adults > twinbedRoom.maxxAdults) || adults < 1 || children < 0 || children > twinbedRoom.maxxChildren) {
                alert("maximum adult occupancy in Twinbed room: 1, maximum child occupancy in Twinbed room: 1")
                return false;
            } else if ((adults > twinbedRoom.maxAdults) || adults < 1 || children < 0 || children > twinbedRoom.maxChildren) {
                alert("maximum adult occupancy in Twinbed room: 2, maximum child occupancy in Twinbed room: 1")
                return false;
            } else if ((adults + children) > 3) {
                alert("maximum adult occupancy in Twinbed room: 2, maximum child occupancy in Twinbed room: 1")
                return false;
            } else return true;
        } else if (roomType == "Superior double room") {
            if ((adults > superiorDoubleRoom.maxxxAdults) & children > superiorDoubleRoom.maxxxChildren || adults > superiorDoubleRoom.maxxAdults & children > superiorDoubleRoom.maxxChildren || adults > superiorDoubleRoom.maxAdults & children > superiorDoubleRoom.maxChildren || adults >= 4 || children >= 4) {
                alert("maximum adult occupancy in Superior double room: 3, maximum child occupancy in Superior double room: 1")
                return false;
            } else if ((adults + children) > 4) {
                alert("maximum adult occupancy in Superior double room: 3, maximum child occupancy in Superior double room: 1")
                return false;
            } else return true;
        } else if (roomType == "Deluxe room") {
            if ((adults > deluxeRoom.maxAdults) & children > deluxeRoom.maxChildren || adults > deluxeRoom.maxxChildren & children > deluxeRoom.maxxAdults || adults > deluxeRoom.maxxAdults & children > deluxeRoom.maxxChildren || adults > deluxeRoom.maxxxAdults & children > deluxeRoom.maxxxChildren || adults >= 5 || children >= 5) {
                alert("maximum adult occupancy in Deluxe room: 4, maximum child occupancy in Deluxe room: 1")
                return false;
            } else if ((adults + children) > 5) {
                alert("maximum adult occupancy in Superior double room: 3, maximum child occupancy in Superior double room: 1")
                return false;
            } else return true;
        } else alert('Please, try again')
    }