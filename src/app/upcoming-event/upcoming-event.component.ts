import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upcoming-event',
  templateUrl: './upcoming-event.component.html',
  styleUrls: ['./upcoming-event.component.css']
})
export class UpcomingEventComponent {
  upcomingEvents = [
    {
      title: 'Concert in the Park',
      date: new Date('2023-12-15'),
      time: '7:00 PM',
      location: 'City Park',
      description: 'An evening of music under the stars.',
      imageUrl: 'https://media.istockphoto.com/id/1324006497/photo/music-controller-dj-mixer-in-a-nightclub-at-a-party.jpg?s=1024x1024&w=is&k=20&c=DPGBc_eABctkqmxilQJNUqP6BgkIo2fFVwTt8Ul1QN4='
    },
    {
      title: 'Music Festival',
      date: new Date('2024-02-22'),
      time: '3:30 PM',
      location: 'Main Stage Arena',
      description: 'A festival showcasing various genres of music.',
      imageUrl: 'https://media.istockphoto.com/id/939443944/photo/indian-girl-listening-to-music-streaming-with-headphones-from-smartphone-in-summer-on-a-meadow.jpg?s=1024x1024&w=is&k=20&c=U_qL6_f_mTx_I3ip3G5u1HXRi2RdidQWkWLs4Vy5BuE=' // Replace with your event image URL
    },
    {
      title: 'Concert in the Park',
      date: new Date('2023-12-15'),
      time: '7:00 PM',
      location: 'City Park',
      description: 'An evening of music under the stars.',
      imageUrl: 'https://media.istockphoto.com/id/1341449874/photo/young-indian-girl-vlogger-live-recording-or-streaming-and-checking-likes-comments-or-chatting.jpg?s=1024x1024&w=is&k=20&c=l0ClMrJeLWzZWeq3YDjRfthPw89yITyA02-pI31Ns7o='
    },
    {
      title: 'Music Festival',
      date: new Date('2024-02-22'),
      time: '3:30 PM',
      location: 'Main Stage Arena',
      description: 'A festival showcasing various genres of music.',
      imageUrl: 'https://media.istockphoto.com/id/924425774/photo/retro-vintage-microphone-on-yellow-background-studio.jpg?s=1024x1024&w=is&k=20&c=JWy84pEn3k0eyzaOlM_tQq418vwDMzQhSY1KSXr2uOU=' // Replace with your event image URL
    },
    // Add more events as needed
  ];

  constructor(private router: Router) {}

  redirectToMap(location: string): void {
    // Example: Redirect to Google Maps with the provided location
    const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(location)}`;
    window.open(mapUrl, '_blank');
  }

}
