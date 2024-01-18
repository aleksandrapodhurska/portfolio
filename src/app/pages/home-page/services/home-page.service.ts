import { Injectable } from '@angular/core';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faWalking } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  private socialLinks = new BehaviorSubject([
    { id: 1, href: "#", icon: faLaptop},
    { id: 2, href: "#", icon: faWalking},
    { id: 3, href: "#", icon: faHeart}
  ]);

  private testimonials = new BehaviorSubject([
    { 
      id: 1, 
      title: "Slide 1 title", 
      content: "Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque. Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque. Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque.", 
      author: {
        src: "../../../assets/images/testimonials/thumb.png", 
        name: "Robert Thompson", 
        title: "Business Owner"
      }
    },
    { 
      id: 2, 
      title: "Slide 2 title", 
      content: "Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque. Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque.", 
      author: {
        src: "../../../assets/images/testimonials/thumb.png", 
        name: "Robert Thompson", 
        title: "Business Owner"
      }
    },
  ]);

  private statistics = new BehaviorSubject([
    {
      id: 1,
      counter: "200+",
      label: "Total Projects"
    },
    {
      id: 2,
      counter: "5+",
      label: "Ongoing Projects"
    },
    {
      id: 3,
      counter: "100%",
      label: "Job Success"
    },
  ]);

  private services = new BehaviorSubject([
    {
      id: 1,
      img: "../../../assets/images/services/software.png",
      title: "Software Development",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor."
    },
    {
      id: 2,
      img: "../../../assets/images/services/mobile.png",
      title: "Mobile Development",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor."
    },
    {
      id: 3,
      img: "../../../assets/images/services/web.png",
      title: "Web Development",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor."
    },

  ]);

  private portfolio = new BehaviorSubject([
    {
      id: 1,
      img: "../../../assets/images/portfolio/portfolio1.jpg",
      size: "col-sm-7 col-12",
      title: "Portfolio Item",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor."
    },
    {
      id: 2,
      img: "../../../assets/images/portfolio/portfolio2.jpg",
      size: "col-sm-5 col-12",
      title: "Portfolio Item",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor."
    },
    {
      id: 3,
      img: "../../../assets/images/portfolio/portfolio3.jpg",
      size: "col-sm-4 col-12",
      title: "Portfolio Item",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor."
    },
    {
      id: 4,
      img: "../../../assets/images/portfolio/portfolio4.jpg",
      size: "col-sm-4 col-12",
      title: "Portfolio Item",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor."
    },
    {
      id: 5,
      img: "../../../assets/images/portfolio/portfolio5.jpg",
      size: "col-sm-4 col-12",
      title: "Portfolio Item",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor."
    },
  ]);

  getSocialLinks() {
    return this.socialLinks.asObservable();
  }

  addSocialLinks() {
    const newLinks = [
      ...this.socialLinks.value,
      { id: 4, href: "#", icon: faHeart}
    ];
    this.socialLinks.next(newLinks);
  }

  getTestimonials() {
    return this.testimonials.asObservable();
  }

  getStatistics() {
    return this.statistics.asObservable();
  }

  getServices() {
    return this.services.asObservable();
  }

  getPortfolio() {
    return this.portfolio.asObservable();
  }

  constructor() { }
}
