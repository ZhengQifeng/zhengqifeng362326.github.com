/* 
* @Author: anchen
* @Date:   2016-10-20 10:44:11
* @Last Modified by:   anchen
* @Last Modified time: 2016-10-29 16:42:18
*/

$(".dropdown-menu").hide();

 $(document).ready(function(){
        $(".dropdown-trigger").mousedown(function(){
          $(".dropdown-menu:last").slideToggle();
        });
      });
 $(document).ready(function(){
        $(".nav-item:first").mousedown(function(){
          $(".dropdown-menu:first").slideToggle();
        });
      });
  // $(document).ready(function(){
  //        $(".nav-item-dropdown").mousedown(function(){
  //         $(".dropdown-menu").slideUp();
  //       });
  //     });