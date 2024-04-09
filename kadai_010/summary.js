$(function() {
    // 色が変わる
    $('#change-color').on('click', function() {
        $('#target').css('color', 'red');
    });
    
    // 文字が切り替わる
    $('#change-text').on('click', function() {
        const text = $('#target').text();
        if (text === 'こんにちは！') {
            $('#target').text('おはようございます。');
        }
        else {
            $('#target').text('こんにちは！');
        }
    });

    // フェードアウトで文字が消える
    $('#fade-out').on('click', function() {
        $('#target').fadeOut();
    });

    // フェードインで文字が現れる
    $('#fade-in').on('click', function() {
        $('#target').fadeIn();
    });
    
});