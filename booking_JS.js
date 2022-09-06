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

    import singleRoom from "./singleRoom.js";
    import doubleRoom from "./doubleRoom.js";
    import twinbedRoom from "./twinbedRoom.js";
    import superiorDoubleRoom from "./superiorDoubleRoom.js";
    import deluxeRoom from "./deluxeRoom.js";

    function validateForm2(adults, children, roomType) {
        console.log(adults+children+roomType);
        if (roomType = "Single room") {
            if ((adults > singleRoom.maxAdults) || adults < 1 || children < 0 || children > singleRoom.maxChildren) {
                alert("maximum adult occupancy in Single room: 1, maximum child occupancy in Single room: 1")
                return false;
            } else if ((adults + children) > 2) {
                alert("maximum adult occupancy in Single room: 1, maximum child occupancy in Single room: 1")
                return false;
            } else return true;

        } else if (roomType = "Double room") {
            if ((adults > doubleRoom.maxxAdults) || adults < 1 || children < 0 || children > doubleRoom.maxxChildren) {
                alert("maximum adult occupancy in Double room: 1, maximum child occupancy in Double room: 1")
                return false;
            } else if ((adults > doubleRoom.maxAdults) || adults < 1 || children < 0 || children > doubleRoom.maxChildren) {
                alert("maximum adult occupancy in Double room: 2, maximum child occupancy in Double room: 1")
                return false;
            } else if ((adults + children) > 3) {
                alert("maximum adult occupancy in Double room: 2, maximum child occupancy in Double room: 1")
                return false;
            } else return true;
        } else if (roomType = "Twinbed room") {
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
        } else if (roomType = "Superior double room") {
            if ((adults > superiorDoubleRoom.maxxxAdults) || adults < 1 || children < 0 || children > superiorDoubleRoom.maxxxChildren) {
                alert("maximum adult occupancy in Superior double room: 3, maximum child occupancy in Superior double room: 1")
                return false;
            } else if ((adults > superiorDoubleRoom.maxxAdults) || adults < 1 || children < 0 || children > superiorDoubleRoom.maxxChildren) {
                alert("maximum adult occupancy in Superior double room: 2, maximum child occupancy in Superior double room: 2")
                return false;
            } else if ((adults > superiorDoubleRoom.maxAdults) || adults < 1 || children < 0 || children > superiorDoubleRoom.maxChildren) {
                alert("maximum adult occupancy in Superior double room: 1, maximum child occupancy in Superior double room: 3")
                return false;
            } else if ((adults + children) > 4) {
                alert("maximum adult occupancy in Superior double room: 3, maximum child occupancy in Superior double room: 1")
                return false;
            } else return true;
        } else if (roomType = "Deluxe room") {
            if ((adults > deluxeRoom.maxAdults) || adults < 1 || children < 0 || children > deluxeRoom.maxChildren) {
                alert("maximum adult occupancy in Deluxe room: 4, maximum child occupancy in Deluxe room: 1")
                return false;
            } else if ((adults > deluxeRoom.maxxChildren) || adults < 1 || children < 0 || children > deluxeRoom.maxxAdults) {
                alert("maximum adult occupancy in Deluxe room: 3, maximum child occupancy in Deluxe room: 2")
                return false;
            } else if ((adults > deluxeRoom.maxxAdults) || adults < 1 || children < 0 || children > deluxeRoom.maxxChildren) {
                alert("maximum adult occupancy in Deluxe room: 2, maximum child occupancy in Deluxe room: 3")
                return false;
            } else if ((adults > deluxeRoom.maxxxAdults) || adults < 1 || children < 0 || children > deluxeRoom.maxxxChildren) {
                alert("maximum adult occupancy in Deluxe room: 1, maximum child occupancy in Deluxe room: 4")
                return false;
            } else if ((adults + children) > 5) {
                alert("maximum adult occupancy in Superior double room: 3, maximum child occupancy in Superior double room: 1")
                return false;
            } else return true;
        }
    }