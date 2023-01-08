import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Skill {
  name:string,
  pic: string
}

interface Project {
  des:string,
  pic:string
}


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})



export class HomePage implements OnInit  {
  skills:Skill[] = []
  projects = [
    {des: "E-Commerce Website From Scratch using Angular and Ionic", pic:"https://firebasestorage.googleapis.com/v0/b/portfoilo-af9ab.appspot.com/o/Twiick%20ScreenShot.png?alt=media&token=bb5eaf19-99ab-4eae-85fb-75279c0fcf11", site:"https://twiick.web.app/home"},
    {des: "Airbnb Clone using Angular and Ionic", pic:"https://firebasestorage.googleapis.com/v0/b/portfoilo-af9ab.appspot.com/o/Airbnb%20Clone.png?alt=media&token=6f9358c6-b072-43d8-9862-3512c3c9c3d1", site:"https://recipe-d32ef.web.app/places/tabs/discover"},
    {des: "Simple Food Ordering App using React", pic:"https://firebasestorage.googleapis.com/v0/b/portfoilo-af9ab.appspot.com/o/foodOrderApp%20SC.png?alt=media&token=7611bc8d-b737-4320-9571-6bb7f03afa02", site:"https://reactmeals-5e576.web.app/"},
    {des: "Simple Expense Tracker using React", pic:"https://firebasestorage.googleapis.com/v0/b/portfoilo-af9ab.appspot.com/o/expense%20tracker.png?alt=media&token=5eb046b8-b83f-4815-a6c1-b2aa55e58e4a", site:"https://expense-tracker-9347b.web.app/"},


  ]
  showPic = true;



  constructor(private http:HttpClient) {}


  ngOnInit() {
    this.http.get<Skill[]>("https://portfoilo-af9ab-default-rtdb.firebaseio.com/skills.json").subscribe( (data: Skill[]) => {
      this.skills = data;
    });

    const intersectionCallback = (entries:any) => {
      for (const entry of entries) { // Loop over all elements that either enter or exit the view.
        if (entry.isIntersecting) { // This is true when the element is in view.
          entry.target.classList.add('typewriter'); // Add a class.
        }
      }
    }


    const observer = new IntersectionObserver(intersectionCallback);


    const items = document.querySelectorAll('.ty');
    for (const item of items) {
      observer.observe(item);
    }
    const div1 = document.getElementById("t1");
    const div2 = document.getElementById("t2");
    div1!.addEventListener("animationend", this.myEndFunction);
    div2!.addEventListener("animationend", this.myEndFunction2);

  }
  gotoAnchorHeader(too:string,close:boolean){
    var anchor = document.getElementById(too);
    anchor!.scrollIntoView({block: "start", behavior: "smooth"});
    if (close){
      var box = document.getElementById("openmenu") as HTMLInputElement;
      if (box!.checked) {
        box!.checked = false;
      } else {
        box!.checked = true;
      }
    }
  }

  changePic(){
    console.log("fi");
  }

  myEndFunction(){
    const ite = document.querySelectorAll('.typewriter');
    for (const item of ite) {
      let it = item as HTMLElement;
      it.style.borderRight  = "0px solid black";
    }

    const intersectionCallback = (entries:any) => {
      for (const entry of entries) { // Loop over all elements that either enter or exit the view.
        if (entry.isIntersecting) { // This is true when the element is in view.
          entry.target.classList.add('typewriter'); // Add a class.
        }
      }
    }

    /**
     * Create a observer and use the instersectionCallback as
     * the instructions for what to do when an element enters
     * or leaves the view
     */
    const observer = new IntersectionObserver(intersectionCallback);

    /**
     * Get all .item elements and loop over them.
     * Observe each individual item.
     */
    const items = document.querySelectorAll('.ty1');
    for (const item of items) {
      observer.observe(item);
    }

  }

  myEndFunction2(){
    const ite = document.querySelectorAll('.typewriter');
    for (const item of ite) {
      let it = item as HTMLElement;
      it.style.borderRight  = "0px solid black";
    }
  }

}
