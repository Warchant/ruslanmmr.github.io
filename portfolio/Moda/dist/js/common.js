$(document).ready(function() {
            $('.nav a').hover(function() {
                    $(this).toggleClass("active");
                    $(this).next(".bg").toggleClass("activebg");
                });
            });