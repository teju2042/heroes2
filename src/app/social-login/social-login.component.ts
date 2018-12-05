import { Component, OnInit } from '@angular/core';
import { AuthService } from "angular-6-social-login";
import { SocialUser } from "angular-6-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angular-6-social-login";
@Component({
  selector: 'app-social-login',
  templateUrl: './social-login.component.html',
  styleUrls: ['./social-login.component.css']
})
export class SocialLoginComponent implements OnInit {

  constructor(private socialAuthService: AuthService) {}

  public socialSignIn(socialPlatform : string)
  {
    let socialPlatformProvider;
    if(socialPlatform == "facebook") {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }
    else if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        console.log(socialPlatform+"sign in data :", userData);
      }
    );
  }

  
  ngOnInit() {
    this.socialSignIn('google');
  }

}
