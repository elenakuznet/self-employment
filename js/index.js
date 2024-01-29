// маска

jQuery(function($){
    $("#tel").mask("+7 (999) 999-9999");
});


//отослать форму

const form = $('.form__content');

form.submit(function(event) {
    event.preventDefault();
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        type: 'POST',
        data: $(this).serialize(),
        success(data) {
            const [{name, tel, email}] = form;
            $('.message').text('Спасибо, ваша заявка принята!')
            console.log(data);
            $('.name').val('');
            $('.mobile').val('');
            $('.email').val('');
        }
    })
})