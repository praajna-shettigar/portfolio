import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skillsList = [
    { name: 'Guitar', iconUrl: 'https://media.istockphoto.com/id/484766226/photo/classical-guitar-on-a-dark-background.jpg?s=1024x1024&w=is&k=20&c=u0zUvtWnxn7jKfw70ygxRhZ7jB-5kduQNqqiNNuoV2Y=',description: 'A versatile instrument with six strings, used to create melodic and harmonic sounds.' },
    { name: 'Piano', iconUrl: 'https://media.istockphoto.com/id/1067782680/photo/piano-keys-bokeh-in-the-background-christmas-lights.jpg?s=1024x1024&w=is&k=20&c=olAV0KuBall82E7lON4OfqWMoNnaED6pSa5CkqSuNh8=',description: 'A grand instrument with keys that produces a wide range of musical tones.' },
    { name: 'Voice', iconUrl: 'https://media.istockphoto.com/id/1009981950/photo/the-magic-happens-behind-the-mic.jpg?s=1024x1024&w=is&k=20&c=5eRcym56sFcM-HVoFoki_qH94B9a3Yt37Jb8qGIzpbY=',description: 'The human voice as a musical instrument, capable of expressing various emotions.' },
    // Add more skills as needed
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
