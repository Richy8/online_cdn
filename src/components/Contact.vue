<template>
  <div class="contact grey lighten-3">
      <div class="container">
          <div class="row">
              <div class="col-12 title-header text-center spectra mb-5">Contact Me</div>
              <div class="col-sm-12 col-md-5">
                  <div class="contact-info-block">
                        <h6>Contact Info</h6>
                        <div class="address mb-3 font-small"><i class="fas fa-map-marker-alt mr-2 cyan-text"></i>Plot 90B, Aladelola, Ikosi-Ketu, Lagos State</div>
                        <div class="email font-small">
                            <a href="mailto:menaelvisjones@gmail.com" class="spectra">
                                <i class="fas fa-envelope mr-2 cyan-text"></i>
                                menaelvisjones@gmail.com
                            </a>
                            
                        </div>
                        <div class="phone mt-4 font-small">
                            <div class="phone-one mb-2">
                                <a href="tel:+2348131177703" class="spectra">
                                    <i class="fas fa-phone rotate-x mr-2 cyan-text"></i>
                                    +234-8131-1777-03
                                </a>
                            </div>
                            <div class="phone-one">
                                <a href="tel:+2347086980070" class="spectra">
                                    <i class="fas fa-phone rotate-x mr-2 cyan-text"></i>
                                    +234-7086-9800-70
                                </a>
                            </div>
                        </div>

                        <div class="website mt-4 font-small">
                            <a href="http://devcone.epizy.com" class="spectra">
                                <i class="fas fa-globe cyan-text mr-2"></i>
                                www.devcone.epizy.com
                            </a>
                        </div>

                        <div class="social-link">
                            <h6 class="font-small">Follow Me</h6>
                            <ul class="list-unstyled list-inline">
                                <li class="list-inline-item facebook-bg">
                                    <a href="http://"><i class="ti-facebook"></i></a>
                                </li>
                                <li class="list-inline-item twitter-bg">
                                    <a href="http://"><i class="fab fa-twitter"></i></a>
                                </li>
                                <li class="list-inline-item linkedin-bg">
                                    <a href="http://"><i class="ti-linkedin"></i></a>
                                </li>
                            </ul>
                        </div>
                  </div>
              </div>

              <!-- CONTACT FORM -->
              <div class="col-sm-12 col-md-7">
                <div class="contact-form-block">
                    <form action="" method="POST">
                        <!-- FULLNAME -->
                        <div class="form-group mb-4">
                            <label for="" class="font-small spectra pl-1"> <i class="fas fa-user mr-2 cyan-text"></i> Fullname</label>
                            <input type="text" v-model="fullname" class="form-control form-control-sm font-small" placeholder="Enter Fullname Here">
                        </div>

                        <!-- SUBJECT -->
                        <div class="form-group">
                            <label for="" class="font-small spectra pl-1"> <i class="fab fa-stack-exchange mr-2 cyan-text"></i> Subject</label>
                            <input type="text" v-model="subject" class="form-control form-control-sm font-small" placeholder="Enter Email Subject Here">
                        </div>

                        <!-- MESSAGE -->
                        <div class="form-group">
                            <label for="" class="font-small spectra pl-1"> <i class="fas fa-envelope mr-2 cyan-text"></i> Message</label>
                            <textarea class="form-control form-control-sm" v-model="message" rows="4"  placeholder="Enter Email Message Here"></textarea>
                        </div>

                        <div class="form-group">
                            <button type="submit" class="btn btn-md cyan white-ic font-weight-500">SEND MESSAGE <i class="fas fa-paper-plane ml-2"></i></button>
                        </div>

                    </form>    
                </div>    
              </div>
              
          </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'Contact',
  data(){
      return {
          fullname: null,
          subject: null,
          message: null,
      }
  }
 
}
</script>
