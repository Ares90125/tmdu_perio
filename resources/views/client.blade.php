<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>tmdu_perio</title>
        <link rel="icon" href="{{ asset('favicon.ico') }}">
        <!-- Fonts -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    </head>
    <body class="bg-bgColor">
        <div id="app"></div>
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
    <script>
        function idleLogout() {
            var t;
            window.onload = resetTimer;
            window.onmousemove = resetTimer;
            window.onmousedown = resetTimer;  // catches touchscreen presses as well
            window.ontouchstart = resetTimer; // catches touchscreen swipes as well
            window.ontouchmove = resetTimer;  // required by some devices
            window.onclick = resetTimer;      // catches touchpad clicks as well
            window.onkeydown = resetTimer;
            window.addEventListener('scroll', resetTimer, true); // improved; see comments

            function yourFunction() {
                // your function for too long inactivity goes here
                // e.g. window.location.href = 'logout.php';
                $.ajax({
                    url:"/api/client/logout",
                    method:'get',
                    headers:{
                        "Authorization":"Bearer "+localStorage.getItem('token')
                    }
                });
                localStorage.removeItem('token');
                window.location.href = '/client';
            }

            function resetTimer() {
                clearTimeout(t);
                t = setTimeout(yourFunction, 1000*60*20);  // time is in milliseconds
            }
        }
    idleLogout();
    </script>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>

</html>
