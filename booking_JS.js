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