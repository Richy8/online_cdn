<template>
  <div class="header">
   <header>
       <!-- TOP NAV -->
       <nav class="navbar navbar-expand-lg navbar-light fixed-top scrolling-bg index-99 w-100" style="background: rgba(6,10,30,.7);">
           <div class="container">
               <div class="row d-flex justify-content-between align-items-center w-100">
                    <div class="navbar-brand white-text">
                        Mena
                    </div>
                    <div class="social-links float-right">
                        <ul class="list-unstyled list-inline mt-3">
                            <li class="list-inline-item">
                                <a href="http://" target="_blank" class="white-text" rel="noopener noreferrer"><i class="ti-facebook"></i></a>
                            </li>
                            <li class="list-inline-item ml-2">
                                <a href="http://" target="_blank" class="white-text" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
                            </li>
                            <li class="list-inline-item ml-2">
                                <a href="http://" target="_blank" class="white-text" rel="noopener noreferrer"><i class="ti-linkedin"></i></a>
                            </li>
                            <li class="list-inline-item ml-2">
                                <a href="http://" target="_blank" class="white-text" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                            </li>
                        </ul>
                    </div>
               </div>
           </div>
       </nav>


       <!-- FULL IMAGE BACKGROUND -->
        <div class="bg-img bg-overlay view" style="background-image: url('../assets/forest.jpg');">
            <div class="container h-100">
                <div class="row h-100 align-items-center position-relative">
                    <div class="col-12">
                        <div class="content text-center">
                            <span class="white-text px-2">Hello</span>
                            <div class="white-text i-am">I'M</div>
                            <div class="firstname pl-2">EFEMENA</div>
                            <div class="lastname">ELVIS</div>
                            <div class="white-text role">SOFTWARE DEVELOPER & GRAPHICS DESIGNER</div>
                        </div>
                    </div>

                    <div class="col-12 text-center scroll-down position-absolute w-100 d-flex justify-content-center">
                        <div class="wrapper z-depth-1-half">
                            <i class="fas fa-angle-double-down white-text"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

   </header>
  </div>
</template>

<script>

export default {
  name: 'Header',
 
}
</script>
