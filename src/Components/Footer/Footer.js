import React from 'react';
import "./Footer.css";

    

export default function Footer() {
  return (
    <section>
    <footer class="footer-distributed">
    
          <div class="footer-left">
    
            <h3>My<span>Library</span></h3>
    
            <p class="footer-links">
              <a href="#" class="link-1">Home</a>
            
            
              <a href="#">About</a>
              
              
              <a href="#">Contact</a>
            </p>
    
            
          </div>
       
            <div class="footer-right">
          <p class="Address">
          <span><h4>Address</h4></span>
              <i class="fa fa-map-marker"></i>
              <span>Cgc landran</span> Mohali, Punjab
            </p>
    
           
            <p class = "email">
              <i class="fa fa-envelope"></i>
             <span><h4>Email</h4></span> 
              <ul>
             
             <li><a href="mailto:support@company.com">sharmaananya540@gmail.com</a></li>
            
              </ul>
              </p>
              </div>
    
    
          <div class="footer-right">
    
            <p class="footer-company-about">
              <span><h4>About website</h4></span>
              It makes book content more discoverable. 
              With this web application anyone can perform full-text searches and 
              retrieve book information, viewability and eBook availability.
            </p>

    
          </div>
    
        </footer>
        </section>











    

  )
}